import { useState } from "react";

function TaskItem({ task, index, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  function handleSave() {
    updateTask(index, { title, description });
    setIsEditing(false);
  }

  return (
    <article
      className="task-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {isEditing ? (
        <div className="task-edit">
          <label className="field">
            <span className="field-label">Title</span>
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="field">
            <span className="field-label">Description</span>
            <textarea
              className="input textarea"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="task-actions">
            <button className="btn primary" onClick={handleSave}>
              Save
            </button>
            <button className="btn ghost" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="task-head">
            <div>
              <p className="task-eyebrow">Priority focus</p>
              <h3 className="task-title">{task.title}</h3>
            </div>
            <div className="task-actions">
              <button className="btn ghost" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button
                className="btn danger"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="task-description">{task.description}</p>
        </>
      )}
    </article>
  );
}

export default TaskItem;
