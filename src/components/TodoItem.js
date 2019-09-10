import React from "react";

const TodoItem = ({ item, editItem, deleteItem }) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{item.title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <i className="fas fa-pen" onClick={() => editItem(item.id)}></i>
        </span>
        <span className="mx-2 text-danger">
          <i className="fas fa-trash" onClick={() => deleteItem(item.id)}></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
