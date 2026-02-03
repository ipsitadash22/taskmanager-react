import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-title">No tasks yet</p>
        <p className="empty-text">
          Add your first task and watch your momentum build. This space will
          fill with focused work.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={`${task.title}-${index}`}
          task={task}
          index={index}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
