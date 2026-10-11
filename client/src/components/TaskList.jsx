
import { ArrowUpRight } from "lucide-react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onViewAll }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 xl:col-span-2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">Recent Tasks</h3>
          <p className="mt-1 text-sm text-slate-500">
            A quick overview of your work.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View all <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-500">
            No tasks to display.
          </p>
        )}
      </div>
    </section>
  );
}
