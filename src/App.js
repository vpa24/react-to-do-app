import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const getSubmit = title => {
    setItems([...items, { id: uuid(), title: title, edit: false }]);
  };
  const getEditItem = id => {
    setItems(items.filter(i => i.id !== id));
    setItem(items.find(i => i.id === id));
  };
  const deleteItem = id => {
    setItems(items.filter(i => i.id !== id));
  };
  const clearList = () => setItems([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">ToDo input</h3>
          <TodoInput getSubmit={getSubmit} item={item} />
          <TodoList
            items={items}
            clearList={clearList}
            editItem={getEditItem}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
