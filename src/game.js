import Board from './board';

export default class Game {
  constructor(ctx){
    this.board = new Board();
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

}