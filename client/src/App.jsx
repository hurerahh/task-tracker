
import { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Clock3,
  Settings,
  Plus,
  Search,
  Bell,
  Menu,
  X,
  MoreHorizontal,
  ArrowUpRight,
  CircleCheck,
  Circle,
  ListTodo,
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Complete React fundamentals",
    project: "Personal Development",
    priority: "High",
    status: "In Progress",
    date: "Today",
  },
  {
    id: 2,
    title: "Design dashboard interface",
    project: "Task Tracker",
    priority: "High",
    status: "Completed",
    date: "Today",
  },
  {
    id: 3,
    title: "Practice JavaScript functions",
    project: "Learning",
    priority: "Medium",
    status: "To Do",
    date: "Tomorrow",
  },
  {
    id: 4,
    title: "Review Tailwind CSS concepts",
    project: "Learning",
    priority: "Low",
    status: "To Do",
    date: "Oct 14",
  },
];

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Tasks", icon: CheckSquare },
  { label: "Calendar", icon: CalendarDays },
  { label: "Upcoming", icon: Clock3 },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const stats = [
    {
      title: "Total Tasks",
      value: "24",
      note: "Across all projects",
      icon: ListTodo,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Completed",
      value: "12",
      note: "50% of all tasks",
      icon: CircleCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "In Progress",
      value: "7",
      note: "Keep up the work",
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Overdue",
      value: "5",
      note: "Needs your attention",
      icon: Circle,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <CheckSquare size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              TaskFlow
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActivePage(label);
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  activePage === label
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={19} />
                {label}
                {label === "My Tasks" && (
                  <span className="ml-auto rounded-md bg-slate-100 px-2 py-0.5 text-xs">
                    24
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 px-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Projects
          </p>

          <div className="space-y-1">
            {[
              ["Personal Development", "bg-violet-500"],
              ["Website Redesign", "bg-orange-400"],
              ["Learning", "bg-emerald-500"],
            ].map(([name, color]) => (
              <button
                key={name}
                onClick={() => setActivePage(name)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                  activePage === name
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 p-4">
          <button
            onClick={() => setActivePage("Settings")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
          >
            <Settings size={19} />
            Settings
          </button>

          <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              H
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">My Workspace</p>
              <p className="text-xs text-slate-500">Personal account</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-h-screen md:ml-64">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="text-xs text-slate-400">Workspace / Overview</p>
              <h1 className="mt-1 text-lg font-bold">{activePage}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <label className="hidden h-10 w-56 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 lg:flex">
              <Search size={17} className="text-slate-400" />
              <input
                type="search"
                placeholder="Search tasks..."
                className="w-full bg-transparent text-sm outline-none"
                aria-label="Search tasks"
              />
              <span className="text-xs text-slate-400">⌘K</span>
            </label>

            <button
              aria-label="Notifications"
              className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50"
            >
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
            </button>

            <button
              onClick={() => setActivePage("New Task")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:px-4"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">New Task</span>
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">
          <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                Sunday, October 11, 2026
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Welcome back!
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Here&apos;s what&apos;s happening with your tasks today.
              </p>
            </div>

            <button
              onClick={() => setActivePage("New Task")}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <Plus size={18} />
              Create new task
            </button>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ title, value, note, icon: Icon, color }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    {title}
                  </span>
                  <span className={`rounded-xl p-2.5 ${color}`}>
                    <Icon size={20} />
                  </span>
                </div>

                <p className="mt-5 text-3xl font-bold">{value}</p>
                <p className="mt-2 text-xs text-slate-400">{note}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 xl:col-span-2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">Recent Tasks</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    A quick overview of your work.
                  </p>
                </div>

                <button
                  onClick={() => setActivePage("My Tasks")}
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View all <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50 sm:flex-row sm:items-center"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <Circle
                        size={20}
                        className="mt-0.5 shrink-0 text-slate-300"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          {task.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {task.project} · {task.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          task.priority === "High"
                            ? "bg-rose-50 text-rose-600"
                            : task.priority === "Medium"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {task.priority}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          task.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : task.status === "In Progress"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {task.status}
                      </span>

                      <button
                        aria-label={`More options for ${task.title}`}
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200"
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-lg font-bold">Weekly Progress</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your productivity this week.
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold">75%</p>
                    <p className="mt-1 text-xs text-emerald-600">
                      Great progress!
                    </p>
                  </div>
                  <span className="text-sm text-slate-400">12 of 16 tasks</span>
                </div>

                <div
                  className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-label="Weekly task progress"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-full w-3/4 rounded-full bg-blue-600" />
                </div>
              </section>

              <section className="rounded-2xl bg-blue-600 p-6 text-white">
                <div className="flex items-center gap-2">
                  <CalendarDays size={20} />
                  <span className="text-sm font-semibold">Stay on track</span>
                </div>

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

          <footer className="pb-2 text-center text-xs text-slate-400">
            TaskFlow · Stay organized, get things done.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
