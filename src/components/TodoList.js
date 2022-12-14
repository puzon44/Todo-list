import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((displayTodo) => (
          <Todo
            text={displayTodo.text}
            key={displayTodo.id}
            setTodos={setTodos}
            todos={todos}
            displayTodo={displayTodo}
          />
        ))}
      </ul>
    </div>
  );
}
