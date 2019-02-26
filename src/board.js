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
    this.draw = this.draw.bind(this);
  }


  addNumber() {
    const empty = [];
    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        const tile = row[j];
        if (tile === 0 || tile.value === 0) {
          this.grid[i][j] = new Tile(0, i, j);
          empty.push({
            x: i,
            y: j
          });
        }
      }
    }
    
    if (empty.length > 0) {
      let emptyIdx = Math.floor(Math.random() * empty.length);
      let tileIdx = empty[emptyIdx];
      empty.splice(emptyIdx, 1);
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
    if (arr[0].value === 0) {
      newArr = newArr.concat(arr.slice(1));
      newArr.push(arr[0]);
    } else if (arr[1].value === 0) {
      newArr = newArr.concat(arr[0]).concat(arr.slice(2));
      newArr.push(arr[1]);
    } else if (arr[2].value === 0) {
      newArr = newArr.concat(arr[0]).concat(arr[1]).concat(arr.slice(3));
      newArr.push(arr[2]);
    } else {
      newArr = arr;
    }
    
    this.slideTile(newArr, rowIdx);
    // this.grid[rowIdx] = newArr;
    // for (let i = this.grid.length - 1; i > 0; i--) {

    //   // window.setTimeout(() => this.slideTile({x: rowIdx, y: i}, {x: rowIdx, y: i - 1}), 1000);
    //   this.grid[rowIdx][i].x = rowIdx;
    //   this.grid[rowIdx][i].y = i;
    //   this.grid[rowIdx][i - 1].x = rowIdx;
    //   this.grid[rowIdx][i - 1].y = i - 1;
    // }

  }

  slideTile(newArr, rowIdx) {
    this.grid[rowIdx] = newArr;

    for (let i = 0; i < newArr.length; i++) {
      const element = newArr[i];
      this.grid[rowIdx][i].y = element.y;
      this.grid[rowIdx][i].x = element.x;
    }

    // this.grid[toLoc.x][toLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;
    // this.grid[toLoc.x][toLoc.y].y = toLoc.y;
    // this.grid[fromLoc.x][fromLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;
    // this.grid[toLoc.x][toLoc.y].x = this.grid[fromLoc.x][fromLoc.y].x;
  }

  merge(row, rowIdx) {
    for (let i = 0; i < 3; i++) {
      if (row[i].value === row[i+1].value && (row[i].value !== 2) && (row[i].value !== 0)) {
        row[i] = new Tile(row[i].value * 2, rowIdx, i, false, true);
        row[i + 1] = new Tile(0, rowIdx, i + 1);
        break;
      } else if ((row[i].value + row[i + 1].value) === 3) {
        row[i] = new Tile(3, rowIdx, i, false, true);
        row[i + 1] = new Tile(0, rowIdx, i + 1);
        break;
      } else {
        continue;
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
    this.ctx.clearRect(0, 0, 400, 430);

    this.scoreBoard();
    let w = 100;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {

        this.ctx.rect(i * w, j * w, w, w);

        if (this.grid[i][j].value === 0) {
          this.ctx.fillStyle = "#E8EAEE";
          this.ctx.fillRect(i * w, j * w + 30, w, w);
        } else if (this.grid[i][j].value === 1) {
          this.ctx.fillStyle = "#59D2FE";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 2) {
          this.ctx.fillStyle = "#44E5E7";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 3) {
          this.ctx.fillStyle = "#2191FB";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 6) {
          this.ctx.fillStyle = "#6D72C3";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 12) {
          this.ctx.fillStyle = "#C2AFF0";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 24) {
          this.ctx.fillStyle = "#AB81CD";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 48) {
          this.ctx.fillStyle = "#59C3C3";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 96) {
          this.ctx.fillStyle = "#87BFFF";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else if (this.grid[i][j].value === 192) {
          this.ctx.fillStyle = "#99E1D9";
          this.ctx.fillRect(i * w, j * w +30, w, w);
        } else {
          this.ctx.fillStyle = "#4056F4";
          this.ctx.fillRect(i * w, j * w +30, w, w); 
        }

        let tileVal = this.grid[i][j].value || 0;
        if (this.grid[i][j].value !== 0) {
          this.ctx.font = "bold 50px Courier New";
          this.ctx.textAlign = "center";
          this.ctx.fillStyle= "white";
          this.ctx.fillText(tileVal, i * w + w/2, j * w + w/2 + 45);
        }
      }
    }
  }

  scoreBoard() {
    let score = 0;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        if (this.grid[i][j] !== 0) {
          if (this.grid[i][j].value % 3 === 0) {
            score += this.grid[i][j].value;
          }
        }
      }
    }
    this.ctx.font = "bold 16px Courier New";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score:" + score, 55, 20);
  }

}