import TodoItem from "./TodoItem";
import styles from "./ToDoItems.module.css"

const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles['item-container']}>
        {todoItems.map((item) => (
          <TodoItem todo={item.name} date={item.dueDate} />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
