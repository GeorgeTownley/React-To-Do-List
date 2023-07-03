import "./App.css";
import SubmissionForm from "./components/SubmissionForm.js";
import ToDoList from "./components/ToDoList.js";

function App() {
  return (
    <div className="App">
      <h1>my to-do list</h1>
      <ToDoList />
    </div>
  );
}

export default App;
