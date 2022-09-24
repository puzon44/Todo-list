import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setinputText] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>God's Todo List </header>

      <Form
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
      />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
