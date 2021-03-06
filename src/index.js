import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 400;
  canvasEl.height = 430;

  const ctx = canvasEl.getContext("2d");

  const game = new Game(ctx);
  game.setup();
  game.play();
});