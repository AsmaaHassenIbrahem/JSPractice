
import Polygon from "./Polygon.js"

export default class Circle extends Polygon {
    constructor(radius) {
      super(1);
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    toString() {
      return `Circle with radius ${this.radius} and area ${this.area()}`;
    }
  }