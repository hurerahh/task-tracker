
import { ArrowUpRight } from "lucide-react";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onViewAll,
  onEdit,
  onDelete,
  onStatusChange,
  onPriorityChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
  projects,
  projectFilter,
  onProjectFilterChange,
  sortBy,
  onSortChange,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 xl:col-span-2">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-bold">Recent Tasks</h3>
          <p className="mt-1 text-sm text-slate-500">
            Manage your tasks and track progress.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="flex items-center gap-1 text-sm font-semibold text-blue-600"
        >
          View all <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <select
          aria-label="Filter tasks by status"
          value={statusFilter}
          onChange={(event) => onStatusFilterChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
        >
          <option value="All">All statuses</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          aria-label="Filter tasks by priority"
          value={priorityFilter}
          onChange={(event) => onPriorityFilterChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
        >
          <option value="All">All priorities</option>
          <option value="High">High priority</option>
          <option value="Medium">Medium priority</option>
          <option value="Low">Low priority</option>
        </select>

        <select
          value={projectFilter}
          onChange={(event) => onProjectFilterChange(event.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
        >
          <option value="All">All Projects</option>
          {projects.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
        >
          <option value="Default">Default Order</option>
          <option value="Title A-Z">Title A-Z</option>
          <option value="Due Date">Due Date</option>
          <option value="Priority">Priority</option>
        </select>
      </div>

      <div className="mt-5 space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
              onPriorityChange={onPriorityChange}
            />
          ))
        ) : (
          <p className="py-8 text-center text-sm text-slate-500">
            No matching tasks found.
          </p>
        )}
      </div>
    </section>
  );
}
