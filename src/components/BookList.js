import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

function BookList() {
  const { books } = useContext(BooksContext);
  console.log("books", books);

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
