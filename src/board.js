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
      if ( r > 0.5 ) {
        val = 1;
      } else {
        val = 3;
      }
      this.grid[tileIdx.x][tileIdx.y] = new Tile(val, tileIdx.x, tileIdx.y);
    }
  }

  move(row, rowIdx) {
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

  merge(row, rowIdx) {
    for (let i = 3; i > 0; i--) {
      if (row[i] !== 0 && row[i - 1] !== 0) {
        if (row[i].value === row[i-1].value && (row[i].value !== 2)) {
          row[i - 1] = new Tile(row[i].value * 2, rowIdx, i, false, true);
          row[i] = 0;
          break;
        } else if ((row[i].value === 1 && row[i - 1].value === 2) || (row[i].value === 2 && row[i - 1].value === 1)) {
          row[i - 1] = new Tile(3, rowIdx, i, false, true);
          row[i] = 0;
          break;
        } else {
          continue;
        }
      }
    }
    this.grid[rowIdx] = row;
  }

  rotate() {
    let newGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        newGrid[i][j] = this.grid[j][i];
      }
    }

    return newGrid;
  }

  reverse() {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].reverse();
    }
  }

  draw() {
    let w = 100;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        // this.ctx.fillStyle = "";
        this.ctx.rect(i * w, j * w, w, w);
        this.ctx.stroke(); 

        if (this.grid[i][j] === 0) {
          this.ctx.fillStyle = "#E8EAEE";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 1) {
          this.ctx.fillStyle = "#59D2FE";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 2) {
          this.ctx.fillStyle = "#44E5E7";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 3) {
          this.ctx.fillStyle = "#2191FB";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 6) {
          this.ctx.fillStyle = "#6D72C3";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 12) {
          this.ctx.fillStyle = "#C2AFF0";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 24) {
          this.ctx.fillStyle = "#AB81CD";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 48) {
          this.ctx.fillStyle = "#59C3C3";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 96) {
          this.ctx.fillStyle = "#87BFFF";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else if (this.grid[i][j].value === 192) {
          this.ctx.fillStyle = "#3F8EFC";
          this.ctx.fillRect(i * w, j * w, w, w);
          this.ctx.stroke();
        } else {
          this.ctx.fillStyle = "#4056F4";
          this.ctx.fillRect(i * w, j * w, w, w); 
          this.ctx.stroke();
        }

        let tileVal = this.grid[i][j].value || 0;
        if (this.grid[i][j] !== 0) {
          this.ctx.font = "bold 50px Courier New";
          this.ctx.textAlign = "center";
          this.ctx.fillStyle= "white";
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