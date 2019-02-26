import Board from './board';

export default class Game {
  constructor(ctx){
    this.board = new Board(ctx);
    this.ctx = ctx;

    this.down = false;
    this.playing = true;

    this.keyPressed = this.keyPressed.bind(this);
    this.addKey = this.addKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.handleGame = this.handleGame.bind(this);
    this.setup = this.setup.bind(this);
    this.restart = this.restart.bind(this);
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

      case " ":
        this.board = new Board(this.ctx);
        this.setup();
        break;
    }
    
    if (direction) {
      for (let i = 0; i < this.board.grid.length; i++) {
        if (this.board.grid[i][0].value !== 0) {
          this.board.merge(this.board.grid[i], i);
        }
      }
    }
    
    if (direction) {
      for (let i = 0; i < this.board.grid.length; i++) {
        this.board.move(this.board.grid[i], i);
      }
      if (direction === "down" || direction === "right") {
        this.board.reverse();
      }
    }

    if (direction === "right" || direction === "left") {
      this.board.grid = this.board.rotate();
    }


    if (direction) {
      this.board.addNumber();
    }
  }

  handleGame(e) {
    if (this.down) return;

    if(this.playing) {
      this.board.draw();
    }

    this.down = true;
    if (this.gameOver()) {
      this.playing = false;
      const finalScore = this.countScore();

      this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      this.ctx.fillRect(0, 30, 400, 430);

      this.ctx.font = "bold 60px Courier New";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Game Over", 200, 150);
      this.ctx.fillText("Score:" + finalScore, 200, 250);
      this.ctx.font = "bold 20px Courier New";
      this.ctx.fillStyle = "black";
      this.ctx.fillText("Press spacebar to restart", 200, 330);
      
      this.removeKey();
      
      window.addEventListener("keydown", this.restart);
      return;
    } else {
      this.keyPressed(e);
    }

    this.down = false;
    
    window.requestAnimationFrame(this.handleGame);
  }

  addKey() {
    window.addEventListener("keydown", this.handleGame);
  }

  removeKey() {
    window.removeEventListener("keydown", this.handleGame);
  }

  play() {
    this.addKey();
    window.removeEventListener("keydown", this.restart);
  }

  restart(e) {
    let restart;
    switch (e.key) {
      case " ":
        restart = true;
        this.playing = true;
        this.down = false;
        break;
      default:
        restart = false;
        break;
    }

    if (restart) {
      this.board = new Board(this.ctx);
      this.setup();
      this.play();
    }
  }

  countScore() {
    let score = 0;
    for (let i = 0; i < this.board.grid.length; i++) {
      for (let j = 0; j < this.board.grid.length; j++) {
        if (this.board.grid[i][j].value % 3 === 0) {
          score += this.board.grid[i][j].value;
        }
      }
    }
    return score;

  }

  gameOver() {
    for (let i = 0; i < this.board.grid.length; i++) {
      for (let j = 0; j < this.board.grid.length; j++) {
        if (this.board.grid[i][j].value === 0) {
          return false;
        } else if (j < 3 &&
          (((this.board.grid[i][j].value !== 2) && this.board.grid[i][j].value === this.board.grid[i][j + 1].value) || ((this.board.rotate()[i][j].value !== 2) && this.board.rotate()[i][j].value === this.board.rotate()[i][j+1].value))) {
          return false;
        } else if (j < 3 &&
          ((this.board.grid[i][j].value + this.board.grid[i][j+1].value) === 3 || (this.board.rotate()[i][j].value + this.board.rotate()[i][j+1].value) === 3)) {
          return false;
        }
      }
    }
    return true;
  }
}