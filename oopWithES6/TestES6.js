  // 2-Write a script to create different shapes (rectangle, square, circle, triangle) (using Es6 classes)
  // • make all of them inherits from polygon.
  // • Display the area and each object parameter in your console by overriding toString()

  import Rectangle from "./Rectangle.js"
  import Square from "./Square.js"
  import Circle from "./Circle.js"
  import Triangle from "./Triangle.js"

  const rectangle = new Rectangle(5, 8);
  const square = new Square(4);
  const circle = new Circle(3);
  const triangle = new Triangle(6, 10);
  
  console.log(rectangle.toString());
  console.log(square.toString());
  console.log(circle.toString());
  console.log(triangle.toString());
  
  
  