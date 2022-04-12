import React from "react";

export default function ToDo() {
  const [toDoArray, setToDoArray] = React.useState([]);

  const [toDoItem, setToDoItem] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (toDoItem !== "") {
      setToDoArray((prevArray) => [
        ...prevArray,
        { id: toDoArray.length + 1, text: toDoItem, checked: false },
      ]);
      setToDoItem("");
    }
  }

  function handleChange(event) {
    setToDoItem(event.target.value);
  }

  function completedToDo(id) {
    const item = toDoArray.map((todoitem) => {
      if (todoitem.id === id) {
        return { ...todoitem, checked: !todoitem.checked, text: todoitem.text };
      }
      return todoitem;
    });
    setToDoArray(item);
  }

  function deleteToDo(id) {
    const item = toDoArray.filter((todoitem) => todoitem.id !== id);
    setToDoArray(item);
  }

  const arrayElements = toDoArray.map((thing) => (
    <div key={thing.id} className="toDo--item">
      <input
        type="checkbox"
        checked={thing.checked}
        onChange={() => completedToDo(thing.id)}
      />
      {thing.checked ? <del>{thing.text}</del> : thing.text}
      <button onClick={() => deleteToDo(thing.id)} className="delete--button">
        Delete
      </button>
      <br />
    </div>
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
