import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
