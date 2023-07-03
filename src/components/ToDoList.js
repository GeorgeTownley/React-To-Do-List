import React from "react";
import SubmissionForm from "./SubmissionForm.js";
import { useState } from "react";
import ToDoItem from "./ToDoItem.js";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  //i dont really get this line of text either... maybe it's because i dont understand the structure of the array? why is it [...todos]???
  // i also dont undestand what the .filter function is doing in this line of code.
  //
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <SubmissionForm onSubmit={addTodo} />
      {/* please explain why i have to declare todos=todos + settodos=settodos? ...etc  */}
      <ToDoItem todos={todos} setTodos={setTodos} removeTodo={removeTodo} />
    </div>
  );
}

export default ToDoList;
