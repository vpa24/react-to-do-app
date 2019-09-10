import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ items, editItem, deleteItem, clearList }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map(item => (
        <TodoItem
          item={item}
          key={item.id}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        Clear List
      </button>
    </ul>
  );
};

export default TodoList;
