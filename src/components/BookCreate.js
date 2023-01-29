import React from "react";
import { useState } from "react";

function BookCreate({ onCreate }) {
  // console.log(onCreate);

  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
