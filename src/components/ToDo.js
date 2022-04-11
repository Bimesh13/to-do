import React from "react";

export default function ToDo() {
  const [toDoArray, setToDoArray] = React.useState([]);

  const [toDoItem, setToDoItem] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setToDoArray((prevArray) => [
      ...prevArray,
      { id: toDoArray.length + 1, text: toDoItem },
    ]);
    setToDoItem("");
  }

  function handleChange(event) {
    setToDoItem(event.target.value);
  }

  const arrayElements = toDoArray.map((thing) => (
    <h1 key={thing.id}>{thing.text}</h1>
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
      {arrayElements}
    </div>
  );
}
