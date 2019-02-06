import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 400;
  canvasEl.height = 400;

  const ctx = canvasEl.getContext("2d");
  
  // const board = new Board();
  
  const game = new Game(ctx);
  game.setup();
  console.table(game.board.grid);
  // game.fillStyle = "blue";
  // new GameView(game, ctx).start();  
});