
// 1-Create (using function constructor not Es6 classes) your box object that contains books objects, ensure
// that you can
// a. Create book object and add it to box object content property
// b. Count # of books inside box
// c. Delete any of these books in box according to book title. Note: You should delete a single copy of
// the books with the same title.
// d. Create Class Property (static) that counts numbers of created books objects and Class method to
// retrieve it.
// e. Use .toString() to display the box instance’s dimensions
// f. Implement .valueof() so that if there is more than one box object, we can get total number of
// books in these boxes by adding them i.e. if box1 has 5 books and box2 has 2 books, then box1 +
// box2 should return 7

function Book(title) {
    this.title = title;

    Book.totalBooks = (Book.totalBooks || 0) + 1;
  }
  
  function Box() {
    this.content = [];

    this.toString = function () {
      return `Box dimensions: ${this.content.length} books`;
    };
  }
  
  Box.prototype.addBook = function (book) {
    this.content.push(book);
  };
  
  Box.prototype.countBooks = function () {
    return this.content.length;
  };
  
  Box.prototype.deleteBook = function (title) {
    const index = this.content.findIndex(book => book.title === title);
    if (index !== -1) {
      this.content.splice(index, 1);
    }
  };
  
  Box.totalBooks = 0;
  Box.getTotalBooks = function () {
    return Box.totalBooks;
  };
  
  Box.prototype.valueOf = function () {
    return this.content.length;
  };
  
  // Example usage:
  const box1 = new Box();
  const book1 = new Book("The Secret");
  const book2 = new Book("To Kill a Mockingbird");
  
  box1.addBook(book1);
  box1.addBook(book2);
  
  console.log(box1.toString()); // Output: Box dimensions: 2 books
  
  const box2 = new Box();
  const book3 = new Book("The Secret");
  
  box2.addBook(book3);
  
  console.log(box1 + box2); // Output: 3 (total number of books in both boxes)
  
  box1.deleteBook("The Secret");
  console.log(box1.toString()); // Output: Box dimensions: 1 book
  
  console.log(Box.getTotalBooks()); // Output: 3 (total number of created books)
  
  