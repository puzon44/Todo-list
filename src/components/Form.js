import React from "react";

export default function Form({ setinputText, todos, setTodos, inputText }) {
  const [active, setActive] = React.useState(false);

  const inputTextHandler = (e) => {
    setinputText(e.target.value);
  };

  React.useEffect(() => {
    if (inputText === "") {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [inputText]);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);

    setinputText("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
          value={inputText}
        />
        {!active && (
          <p style={{ position: "fixed", top: "310px", left: "35%" }}>
            The field can not be Empty
          </p>
        )}
        <button
          className="todo-button"
          type="submit"
          disabled={!active}
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
}
