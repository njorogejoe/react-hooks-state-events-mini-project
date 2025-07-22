import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            onDelete={() => onDeleteTask(task.text)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
