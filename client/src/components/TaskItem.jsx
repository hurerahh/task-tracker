
import { Circle, CircleCheck, Pencil, Trash2 } from "lucide-react";

export default function TaskItem({
  task,
  onEdit,
  onDelete,
  onStatusChange,
  onPriorityChange,
}) {
  const priorityColors = {
    High: "bg-rose-50 text-rose-600",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  const statusColors = {
    Completed: "bg-emerald-50 text-emerald-700",
    "In Progress": "bg-blue-50 text-blue-700",
    "To Do": "bg-slate-100 text-slate-600",
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-100 p-4 hover:border-slate-200 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <button
          type="button"
          onClick={() =>
            onStatusChange(
              task.id,
              task.status === "Completed" ? "To Do" : "Completed"
            )
          }
          aria-label={
            task.status === "Completed"
              ? "Mark task incomplete"
              : "Mark task complete"
          }
          title="Toggle completion"
          className="mt-0.5 shrink-0 text-emerald-600"
        >
          {task.status === "Completed" ? (
            <CircleCheck size={21} />
          ) : (
            <Circle size={21} className="text-slate-300" />
          )}
        </button>

        <div className="min-w-0">
          <p
            className={`break-words text-sm font-semibold ${
              task.status === "Completed"
                ? "text-slate-400 line-through"
                : "text-slate-800"
            }`}
          >
            {task.title}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {task.project} · {task.date || "No due date"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <select
          aria-label={`Status for ${task.title}`}
          value={task.status}
          onChange={(event) =>
            onStatusChange(task.id, event.target.value)
          }
          className={`max-w-full rounded-full px-2.5 py-1.5 text-xs font-medium outline-none ${statusColors[task.status]}`}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          aria-label={`Priority for ${task.title}`}
          value={task.priority}
          onChange={(event) =>
            onPriorityChange(task.id, event.target.value)
          }
          className={`rounded-full px-2.5 py-1.5 text-xs font-medium outline-none ${priorityColors[task.priority]}`}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          type="button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
          className="rounded-lg p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-600"
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          className="rounded-lg p-2 text-slate-500 hover:bg-rose-50 hover:text-rose-600"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
