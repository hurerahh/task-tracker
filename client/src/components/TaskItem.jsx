
import { Circle, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function TaskItem({ task, onEdit, onDelete }) {
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
    <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 hover:border-slate-200 hover:bg-slate-50 sm:flex-row sm:items-center">
      <div className="flex min-w-0 items-start gap-3">
        <Circle size={20} className="mt-0.5 shrink-0 text-slate-300" />

        <div className="min-w-0">
          <p className="break-words text-sm font-semibold">{task.title}</p>
          <p className="mt-1 text-xs text-slate-400">
            {task.project} · {task.date || "No due date"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>

        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>

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
