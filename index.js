const books = [
    {
      author: "Lucy Foley",
      name: "List of Invitees",
      price: 70
    },
    {
      author: "Susanna Clarke",
      name: "Jonathan Strange & Mr Norrell",
    },
    {
      name: "Design. A Book for Non-Designers.",
      price: 70
    },
    {
      author: "Alan Moore",
      name: "Neonomicon",
      price: 70
    },
    {
      author: "Terry Pratchett",
      name: "Moving Pictures",
      price: 40
    },
    {
      author: "Angus Hyland",
      name: "Cats in Art",
    }
  ];

  function createBookList() {
    const rootElement = document.getElementById("root");
    const ulElement = document.createElement("ul");

    books.forEach((book) => {
      if (checkBookValidity(book)) {
        const liElement = document.createElement("li");
        liElement.textContent = `${book.author}: ${book.name} - $${book.price}`;
        ulElement.appendChild(liElement);
      }
    });

    rootElement.appendChild(ulElement);
  }

  function checkBookValidity(book) {
    if (!book.hasOwnProperty("author")) {
      console.error(`Error: Missing 'author' property in the book: ${JSON.stringify(book)}`);
      return false;
    }
    if (!book.hasOwnProperty("name")) {
      console.error(`Error: Missing 'name' property in the book: ${JSON.stringify(book)}`);
      return false;
    }
    if (!book.hasOwnProperty("price")) {
      console.error(`Error: Missing 'price' property in the book: ${JSON.stringify(book)}`);
      return false;
    }
    return true;
  }

  createBookList();