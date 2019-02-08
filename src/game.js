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
    this.board.addNumber();
    this.board.addNumber();
    this.board.addNumber();
    this.board.addNumber();
    this.board.addNumber();
    this.board.addNumber();

    this.board.draw();
  }

  keyPressed(e) {
    const grid = this.board.grid;

    switch (e.key) {
      case "ArrowUp":
      for (let i = 0; i < grid.length; i++) {
        this.board.moveUp(grid[i], i);
      }
      this.board.redraw();
        break;
    
      case "ArrowDown":
        for (let i = 0; i < grid.length; i++) {
          this.board.moveDown(grid[i], i);
        }
        this.board.redraw();
        break;
    
      case "ArrowLeft":
        // for (let i = 0; i < grid.length; i++) {
        //   this.board.moveTile(grid[i], i);
        // }
        break;
    
      case "ArrowRight":
        // for (let i = 0; i < grid.length; i++) {
        //   this.board.moveTile(grid[i], i);
        // }
        break;
    
      default:
      // debugger
        for (let i = 0; i < grid.length; i++) {
          this.board.moveUp(grid[i], i);
        }
        break;
    }
  }
}