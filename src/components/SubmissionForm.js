import React from "react";
import react, { useState } from "react";

function SubmissionForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      // the onSubmit function will only add inputs to the array once it's assigning a value?? why?!?!?
      // is it something to do with the [state, useState] notation?

      id: Math.random() * 100,
      text: input,
    });
  };

  {
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="submit button" placeholder="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default SubmissionForm;
