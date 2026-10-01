import React from "react";
import {
  Rocket,
  LayoutDashboard,
  ClipboardList,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const url = location.pathname.slice(1);

  const menuItems = [
    { name: "dashboard", icon: LayoutDashboard },
    { name: "tasks", icon: ClipboardList },
    { name: "team", icon: Users },
    { name: "chat", icon: MessageSquare },
    { name: "settings", icon: Settings },
  ];

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        w-[216px]
        h-screen
        bg-[var(--sidebar-bg)]
        border-r
        border-[var(--sidebar-border)]
        flex
        flex-col
      "
    >
      {/* Logo */}
      <div className="px-4 pt-5">
        <div className="flex items-center gap-2">
          <div
            className="
              w-[34px]
              h-[34px]
              rounded-[8px]
              bg-[var(--primary)]
              flex
              items-center
              justify-center
              text-white
              shrink-0
            "
          >
            <Rocket size={19} />
          </div>

          <div>
            <h1
              className="
                text-[20px]
                leading-5
                font-bold
                text-[var(--primary)]
              "
            >
              Synthetix AI
            </h1>

            <p className="mt-1 text-[11px] text-[var(--text-muted)]">
              Workspace
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="px-4 mt-8 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.name === url;

          return (
            <button
              key={item.name}
              onClick={() => navigate(`/${item.name}`)}
              className={`
                w-full
                h-[42px]
                rounded-[8px]
                px-3
                flex
                items-center
                gap-3
                text-sm
                capitalize
                transition-all
                ${
                  isActive
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
                }
              `}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="mt-auto p-4">
        <div className="border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="
                w-9
                h-9
                rounded-full
                object-cover
                border
                border-[var(--avatar-border)]
              "
            />

            <div>
              <p className="text-sm font-medium text-[var(--text)]">
                Devendra
              </p>

              <p className="text-[11px] text-[var(--text-muted)]">
                Premium Account
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;