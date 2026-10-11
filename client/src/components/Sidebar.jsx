
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Clock3,
  Settings,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Tasks", icon: CheckSquare },
  { label: "Calendar", icon: CalendarDays },
  { label: "Upcoming", icon: Clock3 },
];

export default function Sidebar({
  open,
  onClose,
  activePage,
  onNavigate,
}) {
  const projects = [
    ["Personal Development", "bg-violet-500"],
    ["Website Redesign", "bg-orange-400"],
    ["Learning", "bg-emerald-500"],
  ];

  return (
    <>
      {open && (
        <button
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/40 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
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
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
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
                  onNavigate(label);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                  activePage === label
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <Icon size={19} />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 px-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Projects
          </p>

          <div className="space-y-1">
            {projects.map(([name, color]) => (
              <button
                key={name}
                onClick={() => onNavigate(name)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm ${
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
            onClick={() => onNavigate("Settings")}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
          >
            <Settings size={19} />
            Settings
          </button>

          <div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
              H
            </div>

            <div>
              <p className="text-sm font-semibold">My Workspace</p>
              <p className="text-xs text-slate-500">Personal account</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
