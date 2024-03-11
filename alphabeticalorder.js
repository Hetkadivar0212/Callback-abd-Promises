function logBookTitlesInAlphabeticalOrder(books, callback) {

    const titles = books.map(book => book.title);
  
    const sortedTitles = titles.sort();
  
    callback(sortedTitles);
  }
  
  // Example list of book objects
  const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
  ];
  
  function logTitles(titles) {
    console.log("Book titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
  logBookTitlesInAlphabeticalOrder(books, logTitles);  