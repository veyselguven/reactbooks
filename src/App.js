/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useContext } from "react";
import BooksContext from "./context/books";

function App() {
  console.log("BooksContext=>", BooksContext);
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      {/* <h1>{books.length}</h1> */}
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
