import AppName from "./components/AppName";
import AddToDo from "./components/AddToDO";
import TodoItem1 from "./components/TodoItem1.jsx";
import TodoItem2 from "./components/TodoItem2.jsx";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <div class="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
