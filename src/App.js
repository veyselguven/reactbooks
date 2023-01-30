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

  console.log(books);
  return (
    <div className="app">
      <h1>{books.length}</h1>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
