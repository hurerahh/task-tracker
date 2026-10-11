
import { useState } from "react";
import {
  ListTodo,
  CircleCheck,
  Clock3,
  Circle,
  CalendarDays,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";

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

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

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
          onNewTask={() => setActivePage("New Task")}
        />

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
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              + Create new task
            </button>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <TaskList
              tasks={tasks}
              onViewAll={() => setActivePage("My Tasks")}
            />

            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-lg font-bold">Weekly Progress</h3>

                <p className="mt-1 text-sm text-slate-500">
                  Your productivity this week.
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <p className="text-3xl font-bold">75%</p>
                  <span className="text-sm text-slate-400">
                    12 of 16 tasks
                  </span>
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

          <footer className="pb-2 text-center text-xs text-slate-400">
            TaskFlow · Stay organized, get things done.
          </footer>
        </main>
      </div>
    </div>
  );
}
