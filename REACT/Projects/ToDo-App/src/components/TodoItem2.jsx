function TodoItem2() {
  let todo = "Go for a movie";
  let date = "05/05/2025";
  return (
    <div className="todo-container">
      <div class="row todo-row">
        <div class="col-6">{todo}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
