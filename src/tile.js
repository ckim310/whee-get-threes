export default class Tile {
  constructor(value, x, y, isNew = true, isMerged = false){
    this.value = value;
    this.x = x;
    this.y = y;
    this.isNew = isNew;
    this.isMerged = isMerged;

    this.previousPos = null;
    this.mergedFrom = null;
  }

  savePosition() {
    this.previousPos = {x: this.x, y: this.y};
  }

  updatePosition(pos) {
    this.x = pos.x;
    this.y = pos.y;
  }
}