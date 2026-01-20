function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li
    onClick={() => toggleTask(index)}
    className={task.completed ? "completed" : ""}
    >
    <span className="task-text">{task.text}</span>
    <button
        onClick={(e) => {
        e.stopPropagation();
        deleteTask(index);
        }}
    >
        ❌
    </button>
    </li>
  );
}

export default TaskItem;