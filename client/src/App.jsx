import { useState } from "react";
import {
  ListTodo,
  CircleCheck,
  Clock3,
  Circle,
  CalendarDays,
  X,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const initialTasks = [
  {
    id: "task-1",
    title: "Complete React fundamentals",
    project: "Personal Development",
    priority: "High",
    status: "In Progress",
    date: "",
  },
  {
    id: "task-2",
    title: "Design dashboard interface",
    project: "Website Redesign",
    priority: "High",
    status: "Completed",
    date: "",
  },
  {
    id: "task-3",
    title: "Practice JavaScript functions",
    project: "Learning",
    priority: "Medium",
    status: "To Do",
    date: "",
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [formOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  function handleNewTask() {
    setEditingTask(null);
    setFormOpen(true);
  }

  function handleEditTask(task) {
    setEditingTask(task);
    setFormOpen(true);
  }

  function handleSaveTask(task) {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((item) => (item.id === task.id ? task : item)),
      );
    } else {
      setTasks((currentTasks) => [task, ...currentTasks]);
    }

    setFormOpen(false);
    setEditingTask(null);
  }

  function handleDeleteTask(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) return;

    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleStatusChange(id, status) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }

  function handlePriorityChange(id, priority) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, priority } : task,
      ),
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  const completed = tasks.filter((task) => task.status === "Completed").length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const overdue = tasks.filter(
    (task) => task.date && task.date < today && task.status !== "Completed",
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      note: "Across all projects",
      icon: ListTodo,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      note: "Tasks finished",
      icon: CircleCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "In Progress",
      value: inProgress,
      note: "Currently working on",
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Overdue",
      value: overdue,
      note: "Past due date",
      icon: Circle,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  const visibleTasks =
    activePage === "Dashboard"
      ? tasks.slice(0, 4)
      : activePage === "My Tasks"
        ? tasks
        : activePage === "Upcoming"
          ? tasks.filter((task) => task.date && task.date >= today)
          : activePage === "Calendar"
            ? tasks.filter((task) => task.date)
            : tasks.filter((task) => task.project === activePage);

  const filteredTasks = visibleTasks.filter((task) => {
    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <div className="min-h-screen md:ml-64">
        <Header
          activePage={activePage}
          onOpenSidebar={() => setSidebarOpen(true)}
          onNewTask={handleNewTask}
        />

        <main className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">
          <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {activePage === "Dashboard" ? "Welcome back!" : activePage}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Manage your work and keep track of your progress.
              </p>
            </div>

            <button
              onClick={handleNewTask}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              + Create new task
            </button>
          </section>

          {activePage === "Dashboard" && (
            <>
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <StatCard key={stat.title} {...stat} />
                ))}
              </section>

              <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
                <TaskList
                  tasks={filteredTasks}
                  onViewAll={() => setActivePage("My Tasks")}
                  onEdit={handleEditTask}
                  onDelete={handleDeleteTask}
                  onStatusChange={handleStatusChange}
                  onPriorityChange={handlePriorityChange}
                  statusFilter={statusFilter}
                  onStatusFilterChange={setStatusFilter}
                  priorityFilter={priorityFilter}
                  onPriorityFilterChange={setPriorityFilter}
                />

                <div className="space-y-6">
                  <section className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="text-lg font-bold">Task Progress</h3>

                    <div className="mt-5 flex items-end justify-between">
                      <p className="text-3xl font-bold">
                        {tasks.length
                          ? Math.round((completed / tasks.length) * 100)
                          : 0}
                        %
                      </p>
                      <span className="text-sm text-slate-400">
                        {completed} of {tasks.length} tasks
                      </span>
                    </div>

                    <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all"
                        style={{
                          width: `${
                            tasks.length ? (completed / tasks.length) * 100 : 0
                          }%`,
                        }}
                      />
                    </div>
                  </section>

                  <section className="rounded-2xl bg-blue-600 p-6 text-white">
                    <CalendarDays size={22} />

                    <h3 className="mt-4 text-xl font-bold">
                      Small steps, big results.
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      Keep your tasks organized and make progress every day.
                    </p>

                    <button
                      onClick={() => setActivePage("Upcoming")}
                      className="mt-5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                    >
                      View upcoming tasks
                    </button>
                  </section>
                </div>
              </section>
            </>
          )}

          {activePage !== "Dashboard" && (
            <TaskList
              tasks={visibleTasks}
              onViewAll={() => setActivePage("My Tasks")}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
              onPriorityChange={handlePriorityChange}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
              priorityFilter={priorityFilter}
              onPriorityFilterChange={setPriorityFilter}
            />
          )}

          <footer className="pb-2 text-center text-xs text-slate-400">
            TaskFlow · Stay organized, get things done.
          </footer>
        </main>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setFormOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="task-form-title"
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 id="task-form-title" className="text-xl font-bold">
                  {editingTask ? "Edit Task" : "Create New Task"}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Add details for your task below.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setFormOpen(false)}
                aria-label="Close form"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <TaskForm
              key={editingTask?.id || "new-task"}
              initialTask={editingTask}
              onSave={handleSaveTask}
              onCancel={() => setFormOpen(false)}
            />
          </section>
        </div>
      )}
    </div>
  );
}
