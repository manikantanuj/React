function TodoItem({ todo, date }) {
  return (
    <>
      <div className="todo-container">
        <div className="row todo-row">
          <div className="col-6">{todo}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger todo-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
