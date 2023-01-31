import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const createBook = (title) => {
    // console.log("Need to add book title", title);
    setBooks((prev) => {
      return [...prev, { id: Math.round(Math.random() * 999), title: title }];
    });
  };

  const editBookById = (id, newTitle) => {
    const updateBooks = books.map((book) => {
      if ((book.id = id)) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  console.log(books);
  return (
    <div className="app">
      {/* <h1>{books.length}</h1> */}
      <h1>Reading list</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
