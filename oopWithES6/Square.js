
import Rectangle from "./Rectangle.js"

export default class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  
    toString() {
      return `Square with side ${this.length} and area ${this.area()}`;
    }
  }