import React from "react";

export default function ToDo() {
  const [toDoArray, setToDoArray] = React.useState([]);

  const [toDoItem, setToDoItem] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setToDoArray((prevArray) => [
      ...prevArray,
      { id: toDoArray.length + 1, text: toDoItem, checked: false },
    ]);
    setToDoItem("");
  }

  function handleChange(event) {
    setToDoItem(event.target.value);
  }

  function completedToDo() {}

  const arrayElements = toDoArray.map((thing) => (
    <label>
      <input type="checkbox" checked={thing.checked} onChange={completedToDo} />
      {thing.text}
      <br />
    </label>
  ));

  return (
    <div className="toDo--elements">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="toDoItem"
          onChange={handleChange}
          className="toDo--input"
          value={toDoItem}
        />

        <button type="submit" className="toDo--button">
          Add ToDo
        </button>
      </form>
      <div className="toDo--list">{arrayElements}</div>
    </div>
  );
}
