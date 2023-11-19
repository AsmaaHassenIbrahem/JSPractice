
import Polygon from "./Polygon.js"

export default class Rectangle extends Polygon {
    constructor(length, width) {
      super(4);
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  
    toString() {
      return `Rectangle with length ${this.length}, width ${this.width}, and area ${this.area()}`;
    }
  }
  