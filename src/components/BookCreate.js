import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  // console.log(onCreate);

  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);
  // const context = useContext(BooksContext);
  //console.log("context", context.createBook);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
