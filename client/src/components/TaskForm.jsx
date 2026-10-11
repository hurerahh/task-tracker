import { useState } from "react";
export default function TaskForm({
  initialTask,
  onSave,
  onCancel,
}) {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [project, setProject] = useState(
    initialTask?.project || "Personal Development"
  );
  const [priority, setPriority] = useState(
    initialTask?.priority || "Medium"
  );
  const [status, setStatus] = useState(
    initialTask?.status || "To Do"
  );
  const [date, setDate] = useState(initialTask?.date || "");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    onSave({
      id: initialTask?.id ?? crypto.randomUUID(),
      title: title.trim(),
      project,
      priority,
      status,
      date,
    });
  }

  const fieldClass =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="task-title" className="text-sm font-medium">
          Task title *
        </label>
        <input
          id="task-title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
          placeholder="e.g. Complete React assignment"
          className={fieldClass}
          autoFocus
        />
        {error && (
          <p className="mt-1 text-sm text-rose-600">{error}</p>
        )}
      </div>

      <div>
        <label htmlFor="task-project" className="text-sm font-medium">
          Project
        </label>
        <select
          id="task-project"
          value={project}
          onChange={(event) => setProject(event.target.value)}
          className={fieldClass}
        >
          <option>Personal Development</option>
          <option>Website Redesign</option>
          <option>Learning</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="task-priority" className="text-sm font-medium">
            Priority
          </label>
          <select
            id="task-priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            className={fieldClass}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label htmlFor="task-status" className="text-sm font-medium">
            Status
          </label>
          <select
            id="task-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className={fieldClass}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="task-date" className="text-sm font-medium">
          Due date
        </label>
        <input
          id="task-date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          {initialTask ? "Save Changes" : "Create Task"}
        </button>
      </div>
    </form>
  );
}
