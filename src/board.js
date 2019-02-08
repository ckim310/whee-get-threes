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
    this.previousBoard = null;
    this.pos = [ [] ];
    this.newTile = [];
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

  moveUp(row, rowIdx) {
    const arr = row.map(el => {
      return el;
    });
    
    let newArr = [];
    if (arr[0] === 0 || arr[0] === 0 && arr[1] === 0) {
      newArr = newArr.concat(arr.slice(1));
      newArr.push(0);
    } else if (arr[1] === 0 || arr[1] === 0 && arr[2] === 0) {
      newArr = newArr.concat(arr[0]).concat(arr.slice(2));
      newArr.push(0);
    } else if (arr[2] === 0) {
      newArr = newArr.concat(arr[0]).concat(arr[1]).concat(arr.slice(3));
      newArr.push(0);
    } else {
      newArr = arr;
    }

    this.grid[rowIdx] = newArr;
  }

  moveDown(row, rowIdx) {
    const arr = row.map(el => {
      return el;
    });
    
    let newArr = [];
    if (arr[3] === 0 || arr[3] === 0 && arr[2] === 0) {
      newArr = arr;
      newArr.pop();
      newArr.unshift(0);
    } else if (arr[2] === 0 || arr[2] === 0 && arr[1] === 0) {
      newArr = newArr.concat(arr[0]).concat(arr[1]).concat(arr[3]);
      newArr.unshift(0);
    } else if (arr[1] === 0) {
      newArr = newArr.concat(arr[0]).concat(arr[2]).concat(arr[3]);
      newArr.unshift(0);
    } else {
      newArr = arr;
    }

    this.grid[rowIdx] = newArr;
  }

  draw() {
    let w = 100;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        this.ctx.rect(i * w, j * w, w, w);
        this.ctx.stroke(); 

        let tileVal = this.grid[i][j].value || 0;
        if (this.grid[i][j] !== 0) {
          this.ctx.font = "50px Arial";
          this.ctx.textAlign = "center";
          this.ctx.fillText(tileVal, i * w + w/2, j * w + w/2 + 15);
        }
      }
    }
  }

  redraw() {
    let w = 100;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        this.ctx.rect(i * w, j * w, w, w);
        this.ctx.stroke();

        this.ctx.clearRect(i * w, j * w, w, w);
      }
    }

    this.draw();    
  }
}