
import { Circle, MoreHorizontal } from "lucide-react";

export default function TaskItem({ task }) {
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
    <div className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50 sm:flex-row sm:items-center">
      <div className="flex min-w-0 items-start gap-3">
        <Circle size={20} className="mt-0.5 shrink-0 text-slate-300" />

        <div className="min-w-0">
          <p className="text-sm font-semibold">{task.title}</p>

          <p className="mt-1 text-xs text-slate-400">
            {task.project} · {task.date}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            priorityColors[task.priority] || priorityColors.Low
          }`}
        >
          {task.priority}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            statusColors[task.status] || statusColors["To Do"]
          }`}
        >
          {task.status}
        </span>

        <button
          type="button"
          aria-label={`More options for ${task.title}`}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
