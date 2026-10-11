import { Menu, Search, Bell, Plus } from "lucide-react";

export default function Header({
  activePage,
  onOpenSidebar,
  onNewTask,
  searchQuery,
  onSearchChange,
}) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          aria-label="Open menu"
          className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
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
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>

        <button
          aria-label="Notifications"
          className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        <button
          onClick={onNewTask}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 sm:px-4"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">New Task</span>
        </button>
      </div>
    </header>
  );
}
