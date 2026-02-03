import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function updateTask(index, updatedTask) {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  }

  const totalTasks = tasks.length;

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo">TM</div>
          <div>
            <p className="eyebrow">Momentum board</p>
            <h1>Task Manager</h1>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn ghost">New Sprint</button>
          <button className="btn primary">Focus Mode</button>
        </div>
      </header>

      <main className="main-grid">
        <div className="left-rail">
          <section className="panel create-panel">
            <div className="panel-head">
              <h2>Plan your next move</h2>
              <p className="muted">
                Capture tasks, add context, and keep momentum with a layout
                built for clarity.
              </p>
            </div>
            <TaskForm addTask={addTask} />
          </section>

          <section className="panel stats-panel">
            <div className="panel-head">
              <h2>Today's cadence</h2>
              <p className="muted">
                Keep the list lean and actionable. Fewer tasks, deeper focus.
              </p>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <p className="stat-label">Total tasks</p>
                <p className="stat-value">{totalTasks}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Suggested max</p>
                <p className="stat-value">6</p>
              </div>
            </div>
            <div className="insight">
              <p className="insight-title">Tip of the day</p>
              <p className="insight-text">
                Start with the task that unlocks other tasks. It creates a
                cascade of wins.
              </p>
            </div>
          </section>
        </div>

        <section className="panel list-panel">
          <div className="list-header">
            <div>
              <h2>Tasks</h2>
              <p className="muted">Everything you've committed to so far.</p>
            </div>
            <div className="pill">{totalTasks} total</div>
          </div>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
