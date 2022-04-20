import React from "react";

export default function ToDo() {
  const [toDoArray, setToDoArray] = React.useState([]);

  const [toDoItem, setToDoItem] = React.useState("");

  const [buttonText, setButtonText] = React.useState({
    status: "add",
    text: "Add ToDo",
  });

  const [editText, setEditText] = React.useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (toDoItem !== "") {
      if (buttonText.status === "add") {
        setToDoArray((prevArray) => [
          ...prevArray,
          { id: toDoArray.length + 1, text: toDoItem, checked: false },
        ]);
        setToDoItem("");
      } else {
        const item = toDoArray.map((todoitem) => {
          if (todoitem.id === editText) {
            console.log("Inside", toDoItem);
            return { ...todoitem, text: toDoItem };
          }
          return todoitem;
        });
        setToDoArray(item);
        setToDoItem("");
        resetForm();
      }
    }
  }

  function resetForm() {
    setButtonText({ status: "add", text: "Add ToDo" });
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

  function editToDo(thing) {
    setButtonText({ status: "edit", text: "Edit ToDo" });
    setEditText(thing.id);
    // const newValue = prompt("Edit the to do task:");
    // const item = toDoArray.map((todoitem) => {
    //   if (todoitem.id === id) {
    //     return { ...todoitem, text: newValue };
    //   }
    //   return todoitem;
    // });
    // setToDoArray(item);
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

      <button onClick={() => editToDo(thing)} className="edit--button">
        Edit
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
          {buttonText.text}
        </button>
      </form>
      <div className="toDo--list">{arrayElements}</div>
    </div>
  );
}
