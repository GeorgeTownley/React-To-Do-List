import { React } from "react";
import { useState } from "react";
import SubmissionForm from "./SubmissionForm";

function ToDoItem({ todos, setTodos, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // I think i fucked up and this should be in the "ToDoList" file? somehow it works here too? why?
  // p.s - doesnt work when i copy it across
  const handleCompleteTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      // i dont understand this fuckery. why is it necessary? i assume it's mapping through the "todo's array declared in ToDoList???"
      // why does it need to switch the true/false statement?
      // p.s - the code works without this so not sure of its purpose at all!!!
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return todos.map((todo, index) => (
    <>
      <div key={index} className="todo-item">
        <div key={todo.id} onClick={() => handleCompleteTodo(todo.id)} />
        <span>{todo.text}</span>
        <div className="buttons">
          <button onClick={() => removeTodo(todo.id)}>delete</button>
          <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
            edit
          </button>
        </div>
      </div>
    </>
  ));
}

export default ToDoItem;
