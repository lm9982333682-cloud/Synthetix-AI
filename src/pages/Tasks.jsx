import React from "react";
import {
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  CalendarDays,
  MessageSquare,
} from "lucide-react";

const Tasks = () => {
  const tasks = {
    todo: [
      {
        title: "User Interview Synthesis",
        description:
          "Analyze findings from the Q3 user experience research sessions and draft...",
        category: "RESEARCH",
        categoryClass: "bg-[var(--info-bg)] text-[var(--info)]",
        date: "Oct 12",
        avatar: "https://i.pravatar.cc/100?img=47",
      },
      {
        title: "Mobile Responsive Grid",
        description:
          "Refine the 8px linear scale implementation for small screen devices.",
        category: "DESIGN",
        categoryClass: "bg-[var(--warning-bg)] text-[var(--warning)]",
        date: "Tomorrow",
        dateClass: "text-[var(--danger)]",
        avatar: "https://i.pravatar.cc/100?img=12",
      },
    ],

    progress: [
      {
        title: "API Integration: Auth Flow",
        description:
          "Implementing OAuth2 providers and session management for the new...",
        category: "DEVELOPMENT",
        categoryClass: "bg-[var(--primary-soft)] text-[var(--primary)]",
        progress: 65,
        comments: 8,
        avatars: [
          "https://i.pravatar.cc/100?img=11",
          "https://i.pravatar.cc/100?img=32",
        ],
      },
    ],

    done: [
      {
        title: "Product Hunt Launch Kit",
        description:
          "Prepare all assets, copy, and hunter outreach sequence for next Monday.",
        category: "MARKETING",
        categoryClass: "bg-[var(--neutral-soft)] text-[var(--text-muted)]",
        completed: true,
        avatar: "https://i.pravatar.cc/100?img=5",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-8 py-5">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold text-[var(--primary)]">
            Tasks
          </h1>

          <div className="flex h-11 w-[280px] items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4">
            <Search
              size={21}
              className="text-[var(--text-muted)]"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)]"
            />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <button className="text-[var(--text)] transition hover:text-[var(--primary)]">
            <Bell size={21} />
          </button>

          <button
            className="
              flex items-center gap-2 rounded-xl
              bg-[var(--primary)]
              px-6 py-3
              text-sm font-semibold
              text-[var(--primary-foreground)]
              transition
              hover:opacity-90
            "
          >
            <Plus size={19} />
            Create Task
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-7 px-8 py-10">
        {/* TODO */}
        <TaskColumn
          title="TODO"
          count="3"
          tasks={tasks.todo}
        />

        {/* IN PROGRESS */}
        <TaskColumn
          title="IN PROGRESS"
          count="2"
          tasks={tasks.progress}
          progress
        />

        {/* DONE */}
        <TaskColumn
          title="DONE"
          count="12"
          tasks={tasks.done}
          done
        />
      </div>
    </div>
  );
};

/* ------------------------------------------
   Task Column
------------------------------------------- */

const TaskColumn = ({
  title,
  count,
  tasks,
  progress = false,
  done = false,
}) => {
  return (
    <div className="min-w-0">
      {/* Column Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold tracking-wide text-[var(--text)]">
            {title}
          </h2>

          <span
            className={`
              flex h-7 min-w-7 items-center justify-center
              rounded-full px-2
              text-xs font-semibold
              ${
                title === "IN PROGRESS"
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-[var(--surface-muted)] text-[var(--text-muted)]"
              }
            `}
          >
            {count}
          </span>
        </div>

        <button className="text-[var(--text-muted)] transition hover:text-[var(--text)]">
          <MoreHorizontal size={22} />
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            progress={progress}
            done={done}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------
   Task Card
------------------------------------------- */

const TaskCard = ({ task, progress, done }) => {
  return (
    <div
      className={`
        relative rounded-2xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-6
        shadow-[var(--shadow-sm)]
        transition
        hover:shadow-[var(--shadow-md)]
        ${progress ? "border-l-4 border-l-[var(--primary)]" : ""}
      `}
    >
      {/* Category */}
      <div className="mb-4">
        <span
          className={`
            inline-flex rounded-md
            px-3 py-1.5
            text-xs font-bold
            ${task.categoryClass}
          `}
        >
          {task.category}
        </span>
      </div>

      {/* Done Icon */}
      {done && (
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--primary)] text-[var(--primary)]">
            <span className="text-xs">✓</span>
          </div>
        </div>
      )}

      {/* Title */}
      <h3
        className={`
          text-lg font-bold leading-7
          text-[var(--text)]
          ${done ? "line-through text-[var(--text-muted)]" : ""}
        `}
      >
        {task.title}
      </h3>

      {/* Description */}
      <p
        className={`
          mt-2 text-base leading-7
          text-[var(--text-secondary)]
          ${done ? "line-through opacity-80" : ""}
        `}
      >
        {task.description}
      </p>

      {/* Progress */}
      {progress && (
        <div className="mt-6">
          <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
            <div
              className="h-full rounded-full bg-[var(--primary)]"
              style={{
                width: `${task.progress}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Bottom */}
      <div className="mt-7 flex items-center justify-between">
        {/* Avatars */}
        {task.avatars ? (
          <div className="flex -space-x-2">
            {task.avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Team member"
                className="
                  h-8 w-8 rounded-full
                  border-2 border-[var(--surface)]
                  object-cover
                "
              />
            ))}
          </div>
        ) : (
          <img
            src={task.avatar}
            alt="Team member"
            className="
              h-8 w-8 rounded-full
              border border-[var(--border)]
              object-cover
            "
          />
        )}

        {/* Date / Comments */}
        {task.comments ? (
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <MessageSquare size={17} />
            <span>{task.comments}</span>
          </div>
        ) : task.date ? (
          <div
            className={`
              flex items-center gap-2
              text-sm font-medium
              ${task.dateClass || "text-[var(--text-secondary)]"}
            `}
          >
            <CalendarDays size={17} />
            <span>{task.date}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tasks;