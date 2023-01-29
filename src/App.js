import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    // console.log("Need to add book title", title);
    setBooks((prev) => {
      return [...prev, { id: 123, title: title }];
    });
  };
  console.log(books);
  return (
    <div>
      <h1>{books.length}</h1>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
