function AddToDo() {
  return (
    <div className="todo-container text-center">
      <div class="row todo-row">
        <div class="col-6">
          <input type="text" placeholder="Enter ToDo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
