import AppName from "./components/AppName";
import AddToDo from "./components/AddToDO";
import "./App.css";
import TodoItem from "./components/TodoItem.jsx";
import ToDoItems from "./components/ToDoItems.jsx";

function App() {
  const toDoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/04/2025",
    },
    {
      name: "Go for a movie",
      dueDate: "07/04/2025",
    },
    {
      name: "Read a book",
      dueDate: "08/04/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={toDoItems} />
    </center>
  );
}

export default App;
