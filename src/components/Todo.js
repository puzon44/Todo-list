import React from "react";

export default function hello({ text, displayTodo, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== displayTodo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn ">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

//
