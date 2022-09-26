import React from "react";

export default function hello({ text, displayTodo, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== displayTodo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === displayTodo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item `}>{text}</li>
      <button onClick={completeHandler} className="complete-btn ">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

//
