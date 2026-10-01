import React, { useEffect, useState } from "react";
import {
  Search,
  Bell,
  CircleHelp,
  Sun,
  Moon,
  Grid3X3,
} from "lucide-react";

const Header = () => {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    document.body.classList.toggle("light", isLight);

    localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
    );
  }, [isLight]);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        h-[68px]
        shrink-0
        flex
        items-center
        justify-between
        px-7
        border-b
        border-[var(--header-border)]
        bg-[var(--header-bg)]
        text-[var(--text)]
      "
    >
      {/* Search */}
      <div className="relative w-[380px]">
        <Search
          size={19}
          strokeWidth={1.8}
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-[var(--text-muted)]
          "
        />

        <input
          type="text"
          placeholder={
            isLight
              ? "Search for projects, tasks or teams..."
              : "Search workspace..."
          }
          className="
            w-full
            h-[38px]
            rounded-[10px]
            border
            border-[var(--input-border)]
            bg-[var(--input-bg)]
            pl-10
            pr-4
            text-sm
            text-[var(--text)]
            placeholder:text-[var(--input-placeholder)]
            outline-none
            transition
            focus:border-[var(--primary)]
          "
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Theme Toggle */}
        <button
          onClick={() => setIsLight((prev) => !prev)}
          title={
            isLight
              ? "Turn dark mode on"
              : "Turn light mode on"
          }
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            text-[var(--text)]
            hover:bg-[var(--hover)]
            hover:text-[var(--primary)]
            transition
          "
        >
          {isLight ? (
            <Moon size={19} strokeWidth={1.8} />
          ) : (
            <Sun size={19} strokeWidth={1.8} />
          )}
        </button>

        {/* WORK Logo */}
        <div className="flex items-center gap-4">
          <span
            className="
              text-[25px]
              font-light
              tracking-wide
              text-[var(--text)]
            "
          >
            ◇_WORK
          </span>

          <Grid3X3
            size={22}
            strokeWidth={1.7}
            className="text-[var(--text)]"
          />
        </div>

        {/* Notification */}
        <button
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            text-[var(--text)]
            hover:bg-[var(--hover)]
            hover:text-[var(--primary)]
            transition
          "
        >
          <Bell size={20} strokeWidth={1.8} />
        </button>

        {/* Help */}
        <button
          className="
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            text-[var(--text)]
            hover:bg-[var(--hover)]
            hover:text-[var(--primary)]
            transition
          "
        >
          <CircleHelp size={20} strokeWidth={1.8} />
        </button>

        {/* Profile */}
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
      </div>
    </header>
  );
};

export default Header;