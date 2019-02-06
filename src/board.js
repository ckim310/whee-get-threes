import Tile from './tile';

export default class Board {
  constructor(ctx) {
    this.grid = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ];
    this.ctx = ctx;
  }


  addNumber() {
    const empty = [];
    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        const tile = row[j];
        if (tile === 0) {
          empty.push({
            x: i,
            y: j
          });
        }
      }
    }

    if (empty.length > 0) {
      let tileIdx = empty[Math.floor(Math.random() * empty.length)];
      let r = Math.random();
      let val;
      if (r > 0.8) {
        val = 2;
      } else if ( r > 0.4 ) {
        val = 1;
      } else {
        val = 3;
      }
      this.grid[tileIdx.x][tileIdx.y] = new Tile(val, tileIdx.x, tileIdx.y);
    }
  }

  moveTile() {

  }

  draw() {
    let w = 100;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        this.ctx.rect(i * w, j * w, w, w);
        this.ctx.stroke(); 

        let tileVal = this.grid[i][j].value;
        if (this.grid[i][j] !== 0) {
          this.ctx.font = "50px Arial";
          this.ctx.textAlign = "center";
          this.ctx.fillText(tileVal, i * w + w/2, j * w + w/2 + 15);
        }
      }
    }

  
  }
}