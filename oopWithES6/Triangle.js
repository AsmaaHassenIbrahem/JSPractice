import Polygon from "./Polygon.js"

export default class Triangle extends Polygon {
    constructor(base, height) {
      super(3);
      this.base = base;
      this.height = height;
    }
  
    area() {
      return (this.base * this.height) / 2;
    }
  
    toString() {
      return `Triangle with base ${this.base}, height ${this.height}, and area ${this.area()}`;
    }
  }
  