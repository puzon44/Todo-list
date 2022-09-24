import React from "react";

export default function Form({ setinputText, todos, setTodos, inputText }) {
  const [active, setActive] = React.useState(false);

  const inputTextHandler = (e) => {
    setinputText(e.target.value);
    if (inputText.length !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);

    setinputText("");
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      {active && (
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      )}

      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
