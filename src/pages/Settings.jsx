import React, { useState } from "react";
import {
  User,
  Palette,
  Bell,
  Monitor,
  Mail,
  Smartphone,
  Pencil,
  Sun,
  Moon,
  ShieldAlert,
  Trash2,
  UserX,
} from "lucide-react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Alex Rivera",
    email: "alex@synthetix.ai",
    bio: "Product Designer focusing on AI-driven workflows and minimalist design systems. Dedicated to creating frictionless experiences for high-productivity teams.",
  });

  const [theme, setTheme] = useState("light");

  const [notifications, setNotifications] = useState({
    desktopMessages: true,
    desktopTasks: true,
    desktopMentions: true,

    emailDaily: false,
    emailWeekly: true,
    emailProduct: true,

    mobileAll: false,
    mobilePriority: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleTheme = (value) => {
    setTheme(value);

    document.body.classList.toggle("light", value === "light");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">

      {/* Page */}
      <main className="w-full px-6 py-8 lg:px-10">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Workspace Settings
          </h1>

          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage your account preferences, appearance, and notification
            delivery.
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

          {/* PROFILE SETTINGS */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">

            {/* Header */}
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                <User size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Profile Settings
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Update your personal information and biography.
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-[130px_minmax(0,1fr)]">

              {/* Avatar */}
              <div className="relative mx-auto md:mx-0">
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--primary-soft)] text-4xl font-bold text-[var(--primary)]">
                  AR
                </div>

                <button
                  type="button"
                  className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--primary)] shadow-md transition hover:bg-[var(--primary-soft)]"
                >
                  <Pencil size={17} />
                </button>
              </div>

              {/* Form */}
              <div className="space-y-5">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          name: e.target.value,
                        })
                      }
                      className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--input)] px-4 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          email: e.target.value,
                        })
                      }
                      className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--input)] px-4 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Bio
                  </label>

                  <textarea
                    rows={4}
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        bio: e.target.value,
                      })
                    }
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--input)] px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--primary)]"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 border-t border-[var(--border)] pt-5">
                  <button
                    type="button"
                    className="rounded-xl border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--hover)]"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-text)] transition hover:opacity-90"
                  >
                    Save Changes
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* APPEARANCE */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">

            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                <Palette size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Appearance
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Choose how Synthetix AI looks on your device.
                </p>
              </div>
            </div>

            {/* Theme */}
            <div className="grid grid-cols-2 gap-3">

              {/* Light */}
              <button
                type="button"
                onClick={() => handleTheme("light")}
                className={`rounded-2xl border p-3 text-left transition ${
                  theme === "light"
                    ? "border-[var(--primary)] ring-2 ring-[var(--primary-soft)]"
                    : "border-[var(--border)]"
                }`}
              >
                <div className="flex h-28 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Sun size={30} />
                </div>

                <div className="mt-3">
                  <p className="font-semibold">Light Mode</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    High contrast for daylight
                  </p>
                </div>
              </button>

              {/* Dark */}
              <button
                type="button"
                onClick={() => handleTheme("dark")}
                className={`rounded-2xl border p-3 text-left transition ${
                  theme === "dark"
                    ? "border-[var(--primary)] ring-2 ring-[var(--primary-soft)]"
                    : "border-[var(--border)]"
                }`}
              >
                <div className="flex h-28 items-center justify-center rounded-xl bg-[#111827] text-purple-300 shadow-sm">
                  <Moon size={30} />
                </div>

                <div className="mt-3">
                  <p className="font-semibold">Dark Mode</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Comfortable for low light
                  </p>
                </div>
              </button>

            </div>

            {/* System Sync */}
            <div className="mt-5 flex items-center justify-between rounded-xl bg-[var(--primary-soft)] px-4 py-4">
              <div>
                <p className="text-sm font-semibold">
                  System Sync
                </p>

                <p className="text-xs text-[var(--text-muted)]">
                  Match device settings
                </p>
              </div>

              <div className="h-6 w-11 rounded-full bg-[var(--switch-off)] p-1">
                <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </section>
        </div>

        {/* NOTIFICATIONS */}
        <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">

          <div className="mb-7 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--warning-soft)] text-[var(--warning)]">
              <Bell size={23} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Notification Preferences
              </h2>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Control when and how you receive workspace updates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

            {/* Desktop */}
            <NotificationCard
              icon={<Monitor size={21} />}
              title="Desktop Alerts"
              items={[
                ["Direct Messages", "desktopMessages"],
                ["Task Assignments", "desktopTasks"],
                ["Team Mentions", "desktopMentions"],
              ]}
              notifications={notifications}
              toggleNotification={toggleNotification}
            />

            {/* Email */}
            <NotificationCard
              icon={<Mail size={21} />}
              title="Email Summaries"
              items={[
                ["Daily Briefing", "emailDaily"],
                ["Weekly Workspace Report", "emailWeekly"],
                ["Product Announcements", "emailProduct"],
              ]}
              notifications={notifications}
              toggleNotification={toggleNotification}
            />

            {/* Mobile */}
            <NotificationCard
              icon={<Smartphone size={21} />}
              title="Mobile Push"
              items={[
                ["All Notifications", "mobileAll"],
                ["Only Priority Mentions", "mobilePriority"],
              ]}
              notifications={notifications}
              toggleNotification={toggleNotification}
            />

          </div>
        </section>

        {/* DANGER ZONE */}
        <section className="mt-6 rounded-2xl border border-[var(--danger-border)] bg-[var(--danger-bg)] p-6">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--danger-soft)] text-[var(--danger)]">
                <ShieldAlert size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--danger)]">
                  Danger Zone
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Irreversible actions regarding your workspace account.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-[var(--danger)] px-5 py-2.5 text-sm font-semibold text-[var(--danger)] transition hover:bg-[var(--danger-soft)]"
              >
                <UserX size={17} />
                Deactivate Account
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-[var(--danger)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Trash2 size={17} />
                Delete Data
              </button>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};


/* =====================================================
   NOTIFICATION CARD
===================================================== */

const NotificationCard = ({
  icon,
  title,
  items,
  notifications,
  toggleNotification,
}) => {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">

      <div className="mb-5 flex items-center gap-3 text-[var(--primary)]">
        {icon}

        <h3 className="font-semibold text-[var(--text)]">
          {title}
        </h3>
      </div>

      <div className="space-y-4">

        {items.map(([label, key]) => (
          <div
            key={key}
            className="flex items-center justify-between gap-4"
          >
            <span className="text-sm text-[var(--text)]">
              {label}
            </span>

            <button
              type="button"
              onClick={() => toggleNotification(key)}
              className={`relative h-6 w-11 shrink-0 rounded-full p-1 transition ${
                notifications[key]
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--switch-off)]"
              }`}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                  notifications[key]
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Settings;