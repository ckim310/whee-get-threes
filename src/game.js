import Board from './board';

export default class Game {
  constructor(ctx){
    this.board = new Board(ctx);
    this.ctx = ctx;
  }

  setup(){
    this.board.addNumber();
    this.board.addNumber();
    this.board.addNumber();
    // this.board.addNumber();
    // this.board.addNumber();
    // this.board.addNumber();
    // this.board.addNumber();
    // this.board.addNumber();
    // this.board.addNumber();

    this.board.draw();
  }

  keyPressed(e) {
    const grid = this.board.grid;

    let direction;

    switch (e.key) {
      case "ArrowUp":
        direction = "up";
        break;
    
      case "ArrowDown":
        direction = "down";
        break;
    
      case "ArrowLeft":
        direction = "left";
        break;
    
      case "ArrowRight":
        direction = "right";
        break;
    
      default:
        break;
    }

    if (direction === "right" || direction === "left") {
      this.board.grid = this.board.rotate();
    }

    if (direction === "up" || direction === "left") {
      for (let i = 0; i < this.board.grid.length; i++) {
        this.board.moveUp(this.board.grid[i], i);  
      }
    }

    if (direction === "down" || direction === "right") {
      for (let i = 0; i < this.board.grid.length; i++) {
        this.board.moveDown(this.board.grid[i], i);  
      }
    }

    if (direction === "right" || direction === "left") {
      this.board.grid = this.board.rotate();
    }

    // for (let i = 0; i < this.board.grid.length; i++) {
    //   const row = this.board.grid[i];
      
    //   this.board.merge(row, i);
    // }
    this.board.redraw();
  }
}