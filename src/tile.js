export default class Tile {
  constructor(value, x, y, isNew = true, isMerged = false){
    this.value = value;
    this.x = x;
    this.y = y;
    this.isNew = isNew;
    this.isMerged = isMerged;
  }
}