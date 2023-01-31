import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // Dont do this:
  //fetchBooks() it keeps  get request infinitive

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    console.log("response=>", response);
    setBooks((prev) => {
      return [...prev, response.data];
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
