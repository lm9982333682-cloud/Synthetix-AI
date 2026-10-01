import React, { useState } from "react";
import {
    Users,
    Zap,
    Mail,
    BriefcaseBusiness,
    SlidersHorizontal,
    UserPlus,
    MoreVertical,
    MessageSquare,
    Search,
    CheckCircle2,
    Clock3,
    Plane,
} from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Elena Vance",
        role: "Lead Product Designer",
        status: "Active Now",
        statusType: "active",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Senior Backend Dev",
        status: "Away",
        statusType: "away",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "AI Specialist",
        status: "OOO",
        statusType: "offline",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Systems Architect",
        status: "Active Now",
        statusType: "active",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
];

const activities = [
    {
        id: 1,
        name: "Elena Vance",
        action: "Updated Design Tokens",
        project: "UI Framework",
        time: "2 mins ago",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: 2,
        name: "Marcus Chen",
        action: "Deployed API Beta",
        project: "Neural Core",
        time: "45 mins ago",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    {
        id: 3,
        name: "David Kim",
        action: "Completed system architecture",
        project: "Core Platform",
        time: "2 hours ago",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    },
];

const stats = [
    {
        title: "TOTAL MEMBERS",
        value: "24",
        icon: Users,
        type: "primary",
    },
    {
        title: "ACTIVE NOW",
        value: "18",
        icon: Zap,
        type: "success",
    },
    {
        title: "PENDING INVITES",
        value: "3",
        icon: Mail,
        type: "warning",
    },
    {
        title: "OPEN ROLES",
        value: "2",
        icon: BriefcaseBusiness,
        type: "purple",
    },
];

const Team = () => {
    const [search, setSearch] = useState("");

    const filteredMembers = teamMembers.filter((member) =>
        `${member.name} ${member.role}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <main className=" flex-1
        min-w-0 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
          
          
            <div className=" max-w-[1180px] px-5 py-8 lg:px-8">

                {/* ================= TOP ================= */}
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight md:text-[36px]">
                            Team Directory
                        </h1>

                        <p className="mt-2 text-sm text-[var(--text-secondary)] md:text-base">
                            Manage your workspace members and their roles across the project.
                        </p>
                    </div>

                    <button
                        className="
              flex h-12 items-center justify-center gap-2 rounded-xl
              bg-[var(--primary)]
              px-5 text-sm font-semibold text-[var(--text-on-primary)]
              shadow-[0_8px_20px_var(--primary-shadow)]
              transition-all duration-200
              hover:bg-[var(--primary-hover)]
              active:scale-[0.98]
            "
                    >
                        <UserPlus size={18} strokeWidth={2} />
                        Invite Member
                    </button>
                </div>

                {/* ================= SEARCH ================= */}
                <div className="mb-7 flex items-center gap-4">
                    <div className="relative w-full max-w-[425px]">
                        <Search
                            size={19}
                            className="
                absolute left-3.5 top-1/2 -translate-y-1/2
                text-[var(--text-muted)]
              "
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search team members..."
                            className="
                h-11 w-full rounded-xl
                border border-[var(--border)]
                bg-[var(--input-bg)]
                pl-11 pr-4
                text-sm text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-muted)]
                transition
                focus:border-[var(--primary)]
                focus:ring-2 focus:ring-[var(--primary-soft)]
              "
                        />
                    </div>

                    <button
                        className="
              hidden h-11 w-11 items-center justify-center rounded-xl
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--text-secondary)]
              transition hover:bg-[var(--surface-hover)]
              sm:flex
            "
                    >
                        <SlidersHorizontal size={18} />
                    </button>
                </div>

                {/* ================= STATS ================= */}
                <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                  rounded-xl border border-[var(--border)]
                  bg-[var(--card-bg)]
                  p-6
                  transition-all duration-200
                  hover:border-[var(--border-hover)]
                "
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.08em] text-[var(--text-secondary)]">
                                            {item.title}
                                        </p>

                                        <p className="mt-2 text-3xl font-bold">
                                            {item.value}
                                        </p>
                                    </div>

                                    <div
                                        className={`
                      flex h-10 w-10 items-center justify-center rounded-xl
                      ${item.type === "success"
                                                ? "bg-[var(--success-soft)] text-[var(--success)]"
                                                : item.type === "warning"
                                                    ? "bg-[var(--warning-soft)] text-[var(--warning)]"
                                                    : item.type === "purple"
                                                        ? "bg-[var(--purple-soft)] text-[var(--purple)]"
                                                        : "bg-[var(--primary-soft)] text-[var(--primary)]"
                                            }
                    `}
                                    >
                                        <Icon size={19} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* ================= CATEGORY ================= */}
                <div className="mb-8 flex items-center gap-2 overflow-x-auto border-b border-[var(--border)] pb-4">
                    <button
                        className="
              rounded-full bg-[var(--primary)]
              px-5 py-2 text-sm font-medium
              text-[var(--text-on-primary)]
              whitespace-nowrap
            "
                    >
                        All Members
                    </button>

                    <button
                        className="
              rounded-full px-5 py-2 text-sm
              text-[var(--text-secondary)]
              transition hover:bg-[var(--surface-hover)]
              whitespace-nowrap
            "
                    >
                        Engineering
                    </button>

                    <button
                        className="
              rounded-full px-5 py-2 text-sm
              text-[var(--text-secondary)]
              transition hover:bg-[var(--surface-hover)]
              whitespace-nowrap
            "
                    >
                        Design
                    </button>

                    <button
                        className="
              rounded-full px-5 py-2 text-sm
              text-[var(--text-secondary)]
              transition hover:bg-[var(--surface-hover)]
              whitespace-nowrap
            "
                    >
                        Product
                    </button>
                </div>

                {/* ================= MEMBERS ================= */}
                <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="
                rounded-2xl border border-[var(--border)]
                bg-[var(--card-bg)]
                p-5
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-[var(--border-hover)]
                hover:shadow-[0_12px_30px_var(--card-shadow)]
              "
                        >
                            {/* Avatar */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="
                      h-[88px] w-[88px] rounded-full object-cover
                      border-2 border-[var(--avatar-border)]
                      p-1
                    "
                                    />

                                    <span
                                        className={`
                      absolute bottom-1 right-1
                      h-3.5 w-3.5 rounded-full
                      border-2 border-[var(--card-bg)]
                      ${member.statusType === "active"
                                                ? "bg-[var(--success)]"
                                                : member.statusType === "away"
                                                    ? "bg-[var(--warning)]"
                                                    : "bg-[var(--danger)]"
                                            }
                    `}
                                    />
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="mt-5 text-center">
                                <h3 className="text-lg font-semibold">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--accent-text)]">
                                    {member.role}
                                </p>

                                <div
                                    className="
                    mx-auto mt-4 flex w-fit items-center gap-2
                    rounded-full border border-[var(--border)]
                    bg-[var(--status-bg)]
                    px-3 py-1.5
                    text-xs text-[var(--text-secondary)]
                  "
                                >
                                    {member.statusType === "active" && (
                                        <Zap size={13} />
                                    )}

                                    {member.statusType === "away" && (
                                        <Clock3 size={13} />
                                    )}

                                    {member.statusType === "offline" && (
                                        <Plane size={13} />
                                    )}

                                    {member.status}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-5 flex gap-2">
                                <button
                                    className="
                    flex h-10 flex-1 items-center justify-center
                    rounded-lg
                    bg-[var(--button-secondary-bg)]
                    text-sm font-medium
                    text-[var(--button-secondary-text)]
                    transition hover:bg-[var(--button-secondary-hover)]
                  "
                                >
                                    Message
                                </button>

                                <button
                                    className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-[var(--button-secondary-bg)]
                    text-[var(--text-secondary)]
                    transition hover:bg-[var(--button-secondary-hover)]
                  "
                                >
                                    <MoreVertical size={17} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Invite Card */}
                    <button
                        className="
              min-h-[300px]
              rounded-2xl border border-dashed
              border-[var(--border-dashed)]
              bg-[var(--invite-card-bg)]
              p-6
              text-center
              transition
              hover:border-[var(--primary)]
              hover:bg-[var(--surface-hover)]
            "
                    >
                        <div
                            className="
                mx-auto flex h-16 w-16 items-center justify-center
                rounded-full
                bg-[var(--invite-icon-bg)]
                text-[var(--text-secondary)]
              "
                        >
                            <UserPlus size={25} />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold">
                            Invite Team Member
                        </h3>

                        <p className="mx-auto mt-2 max-w-[230px] text-sm leading-6 text-[var(--text-secondary)]">
                            Scale your team and accelerate your AI deployment.
                        </p>
                    </button>
                </section>

                {/* ================= RECENT ACTIVITY ================= */}
                <section className="mt-12">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            Recent Team Activity
                        </h2>

                        <button
                            className="
                text-sm font-medium
                text-[var(--primary)]
                transition hover:text-[var(--primary-hover)]
              "
                        >
                            View All Activity
                        </button>
                    </div>

                    <div
                        className="
              overflow-hidden rounded-xl
              border border-[var(--border)]
              bg-[var(--card-bg)]
            "
                    >
                        {/* Desktop Table */}
                        <div className="hidden md:block">
                            <div
                                className="
                  grid grid-cols-[1.1fr_1.6fr_1fr_0.7fr]
                  border-b border-[var(--border)]
                  bg-[var(--table-head-bg)]
                  px-5 py-4
                  text-xs font-semibold uppercase
                  tracking-wide text-[var(--text-secondary)]
                "
                            >
                                <span>Member</span>
                                <span>Action</span>
                                <span>Project</span>
                                <span>Time</span>
                            </div>

                            {activities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="
                    grid grid-cols-[1.1fr_1.6fr_1fr_0.7fr]
                    items-center
                    border-b border-[var(--border)]
                    px-5 py-4
                    last:border-b-0
                    hover:bg-[var(--surface-hover)]
                  "
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={activity.image}
                                            alt={activity.name}
                                            className="h-9 w-9 rounded-full object-cover"
                                        />

                                        <span className="text-sm font-semibold">
                                            {activity.name}
                                        </span>
                                    </div>

                                    <span className="text-sm text-[var(--text-secondary)]">
                                        {activity.action}
                                    </span>

                                    <span
                                        className="
                      w-fit rounded-md
                      bg-[var(--project-bg)]
                      px-2.5 py-1
                      text-xs font-medium
                      text-[var(--project-text)]
                    "
                                    >
                                        {activity.project}
                                    </span>

                                    <span className="text-sm text-[var(--text-secondary)]">
                                        {activity.time}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="md:hidden">
                            {activities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="
                    border-b border-[var(--border)]
                    p-4 last:border-b-0
                  "
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={activity.image}
                                            alt={activity.name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold">
                                                {activity.name}
                                            </p>

                                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                                                {activity.action}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between">
                                        <span
                                            className="
                        rounded-md bg-[var(--project-bg)]
                        px-2.5 py-1 text-xs
                        text-[var(--project-text)]
                      "
                                        >
                                            {activity.project}
                                        </span>

                                        <span className="text-xs text-[var(--text-secondary)]">
                                            {activity.time}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Floating AI Assistant */}
            <button
                className="
          fixed bottom-6 right-6
          hidden items-center gap-3
          rounded-full
          border border-[var(--border)]
          bg-[var(--assistant-bg)]
          px-5 py-3
          text-sm font-medium
          text-[var(--text-primary)]
          shadow-[0_10px_30px_var(--card-shadow)]
          transition hover:bg-[var(--surface-hover)]
          lg:flex
        "
            >
                <MessageSquare
                    size={18}
                    className="text-[var(--primary)]"
                />

                <span>AI Team Assistant</span>

                <span
                    className="
            rounded-md
            bg-[var(--shortcut-bg)]
            px-2 py-1
            text-[10px]
            text-[var(--text-secondary)]
          "
                >
                    Cmd + K
                </span>
            </button>
        </main>
    );
};

export default Team;