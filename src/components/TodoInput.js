import React, { useState, useEffect } from "react";
const TodoInput = ({ getSubmit, item }) => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getSubmit(title);
    setTitle("");
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            name="todo"
            placeholder="add todo item"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={
            item.title
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
        >
          {item.title ? "edit item" : "add item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
