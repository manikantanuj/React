
function AddToDo() {
  return (
    <div className="todo-container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
