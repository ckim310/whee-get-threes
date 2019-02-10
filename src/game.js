import Board from './board';

export default class Game {
  constructor(ctx){
    this.board = new Board(ctx);
    this.ctx = ctx;

    this.down = false;

    this.keyPressed = this.keyPressed.bind(this);
    this.addKey = this.addKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.handleGame = this.handleGame.bind(this);
  }

  setup(){
    for (let i = 0; i < this.board.grid.length; i++) {
      this.board.addNumber();
    }

    this.board.draw();
  }

  keyPressed(e) {

    let direction;
    switch (e.key) {
      case "ArrowUp":
        direction = "up";
        break;
    
      case "ArrowDown":
        this.board.reverse();
        direction = "down";
        break;
    
      case "ArrowLeft":
        this.board.grid = this.board.rotate();
        direction = "left";

        break;
    
      case "ArrowRight":
        this.board.grid = this.board.rotate();
        this.board.reverse();
        direction = "right";
        break;

      default:
        break;
    }

    if (direction) {
      for (let i = 0; i < this.board.grid.length; i++) {
        this.board.move(this.board.grid[i], i);  
      }
    }

    if (direction === "up" || direction === "left") {
      for (let i = 0; i < this.board.grid.length; i++) {
        this.board.merge(this.board.grid[i], i);
      }
    }

    if (direction === "down" || direction === "right") {
      for (let i = 0; i < this.board.grid.length; i++) {
        if (this.board.grid[i][0] !== 0) {
          this.board.merge(this.board.grid[i], i);
        }
      }
      this.board.reverse();
    }

    if (direction === "right" || direction === "left") {
      this.board.grid = this.board.rotate();
    }

    if (direction) {
      this.board.addNumber();
      this.board.redraw();
    }
  }

  handleGame(e) {
    if (this.down) return;
    e.preventDefault();

    this.down = true;
    if (this.gameOver()) {
      this.ctx.stroke();
      this.ctx.font = "bold 50px Courier New";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Game Over", 200, 200);
      console.log("game over");
      
      this.removeKey();
    } else {
      this.keyPressed(e);
    }

    this.down = false;
  }

  addKey() {
    window.addEventListener("keydown", this.handleGame);
  }

  removeKey() {
    window.removeEventListener("keydown", this.handleGame);
  }

  play() {
    this.addKey();
  }

  gameOver() {
    for (let i = 0; i < this.board.grid.length; i++) {
      for (let j = 0; j < this.board.grid.length; j++) {
        if (this.board.grid[i][j] === 0) {
          return false;
        } else if (j < 3 && (this.board.grid[i][j].value === this.board.grid[i][j+1].value || this.board.rotate()[i][j].value === this.board.rotate()[i][j+1].value)) {
          return false;
        }
      }
    }
    return true;
  }
}