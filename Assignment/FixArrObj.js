const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    
    addBook(book) {
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete.");
        return;
      }
      this.books.push(book);
    },
    
    
    findBookByTitle(title) {
      const book = this.books.find(book => book.title === title);
      return book !== undefined;  
    },
    
    
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`${title} removed.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
 
  library.addBook({ title: "The Hobbit", author: "Vishal", year: 2025 });
  console.log(library.findBookByTitle("The Hobbit"));
  library.removeBook("The Hobbit"); 
  console.log(library.books); 
  