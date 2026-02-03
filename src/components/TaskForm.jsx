import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="field">
        <span className="field-label">Task title</span>
        <input
          className="input"
          placeholder="Ship the new onboarding flow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label className="field">
        <span className="field-label">Task description</span>
        <textarea
          className="input textarea"
          placeholder="Add guidance, detail, and success criteria so the team moves fast."
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <button className="btn primary full">Add task</button>
    </form>
  );
}

export default TaskForm;
