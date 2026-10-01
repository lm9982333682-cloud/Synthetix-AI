import React from "react";
import {
  Search,
  Bell,
  Info,
  Phone,
  Video,
  Plus,
  UserPlus,
  Paperclip,
  Smile,
  AtSign,
  Bold,
  Italic,
  List,
  Link,
  Code,
  Send,
  FileText,
  Image as ImageIcon,
  Sparkles,
  X,
} from "lucide-react";

const channels = [
  { name: "general", active: true },
  { name: "marketing" },
  { name: "dev", unread: 3 },
];

const directMessages = [
  {
    name: "Sarah Chen",
    status: "Working on the API...",
    online: true,
    avatar: "SC",
  },
  {
    name: "Alex Rivera",
    status: "The bento grid is ready.",
    online: true,
    avatar: "AR",
  },
  {
    name: "Jordan Smith",
    status: "Sent a file.",
    online: false,
    avatar: "JS",
  },
];

const messages = [
  {
    id: 1,
    name: "Sarah Chen",
    time: "10:24 AM",
    avatar: "SC",
    text: "Hey everyone! I've just deployed the new AI-augmented dashboard component. Can someone from @dev check the integration with the Synthetix API?",
    type: "received",
  },
  {
    id: 2,
    name: "Alex Rivera",
    time: "10:30 AM",
    avatar: "AR",
    text: "Agreed! The technical elegance is really coming through in this iteration. @Sarah I noticed a small padding issue on mobile, but it's an easy fix.",
    type: "received",
  },
];

const Chat = () => {
  return (
    <div className="h-[calc(100vh-0px)] w-full overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* =====================================================
          CHAT PAGE
      ====================================================== */}

      <div className="flex h-full w-full">

        {/* =====================================================
            DARK MODE CHANNEL PANEL
            Light mode screenshot doesn't have this separate panel
        ====================================================== */}

        <aside
          className="
            hidden
            w-[275px]
            shrink-0
            border-r
            border-[var(--border)]
            bg-[var(--surface)]
            lg:flex
            lg:flex-col
            body:not(.light):flex
          "
        >
          {/* Channels */}
          <div className="flex items-center justify-between px-7 py-7">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Channels
            </h2>

            <button
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full
                text-[var(--text-secondary)]
                transition
                hover:bg-[var(--hover)]
                hover:text-[var(--text)]
              "
            >
              <Plus size={18} />
            </button>
          </div>

          <div className="px-5">
            {channels.map((channel) => (
              <button
                key={channel.name}
                className={`
                  mb-1 flex w-full items-center justify-between
                  rounded-lg px-3 py-2
                  text-left text-sm
                  transition
                  ${
                    channel.active
                      ? "bg-[var(--hover)] text-[var(--primary-light)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--hover)]"
                  }
                `}
              >
                <span>
                  <span className="mr-1">#</span>
                  {channel.name}
                </span>

                {channel.unread && (
                  <span
                    className="
                      flex h-4 w-4 items-center justify-center
                      rounded-full
                      bg-[var(--danger)]
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    {channel.unread}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Direct Messages */}
          <div className="mt-8 flex items-center justify-between px-7">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Direct Messages
            </h2>

            <button
              className="
                text-[var(--text-secondary)]
                transition
                hover:text-[var(--text)]
              "
            >
              <UserPlus size={19} />
            </button>
          </div>

          <div className="mt-3 px-5">
            {directMessages.map((user) => (
              <button
                key={user.name}
                className="
                  mb-3 flex w-full items-center gap-3
                  rounded-lg px-3 py-2
                  text-left
                  transition
                  hover:bg-[var(--hover)]
                "
              >
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-[var(--border)]
                      bg-[var(--avatar-bg)]
                      text-xs font-semibold
                      text-[var(--text)]
                    "
                  >
                    {user.avatar}
                  </div>

                  {user.online && (
                    <span
                      className="
                        absolute bottom-0 right-0
                        h-2.5 w-2.5
                        rounded-full
                        border-2
                        border-[var(--surface)]
                        bg-[var(--success)]
                      "
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[var(--text)]">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-[var(--text-muted)]">
                    {user.status}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* =====================================================
            MAIN CHAT AREA
        ====================================================== */}

        <section className="flex min-w-0 flex-1 flex-col">

          {/* ===================================================
              CHAT HEADER
          ==================================================== */}

          <header
            className="
              flex h-[98px] shrink-0
              items-center justify-between
              border-b
              border-[var(--border)]
              bg-[var(--header-bg)]
              px-7
            "
          >
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-[var(--primary)]">
                  # general
                </h1>

                <span
                  className="
                    hidden
                    rounded-full
                    bg-[var(--surface-light)]
                    px-3 py-1
                    text-xs
                    font-medium
                    text-[var(--text-secondary)]
                    sm:inline-flex
                  "
                >
                  128
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                128 members
              </p>
            </div>

            <div className="flex items-center gap-4">

              {/* Search */}
              <div
                className="
                  hidden
                  h-11
                  w-[275px]
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--input-bg)]
                  px-4
                  md:flex
                "
              >
                <Search
                  size={19}
                  className="shrink-0 text-[var(--text-muted)]"
                />

                <input
                  type="text"
                  placeholder="Search messages..."
                  className="
                    w-full
                    bg-transparent
                    text-sm
                    text-[var(--text)]
                    outline-none
                    placeholder:text-[var(--input-placeholder)]
                  "
                />
              </div>

              <button
                className="
                  hidden
                  text-[var(--text-secondary)]
                  transition
                  hover:text-[var(--text)]
                  md:block
                "
              >
                <Bell size={21} />
              </button>

              <button
                className="
                  hidden
                  text-[var(--text-secondary)]
                  transition
                  hover:text-[var(--text)]
                  md:block
                "
              >
                <Info size={21} />
              </button>

              {/* Profile */}
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border-2
                  border-[var(--border)]
                  bg-[var(--avatar-bg)]
                  text-xs
                  font-semibold
                "
              >
                LC
              </div>
            </div>
          </header>

          {/* ===================================================
              CHAT CONTENT
          ==================================================== */}

          <div className="flex min-h-0 flex-1 flex-col">

            {/* Messages */}
            <div
              className="
                flex-1
                overflow-y-auto
                px-5
                py-7
                md:px-8
              "
            >

              {/* Dark mode action icons */}
              <div
                className="
                  mb-7
                  hidden
                  items-center
                  justify-end
                  gap-5
                  body:not(.light):flex
                "
              >
                <button className="text-[var(--text-secondary)] hover:text-[var(--text)]">
                  <Phone size={19} />
                </button>

                <button className="text-[var(--text-secondary)] hover:text-[var(--text)]">
                  <Video size={19} />
                </button>

                <button className="text-[var(--text-secondary)] hover:text-[var(--text)]">
                  <Info size={19} />
                </button>
              </div>

              {/* =================================================
                  MESSAGE 1
              ================================================== */}

              <div className="mb-7 flex gap-4">
                <Avatar text="SC" />

                <div className="min-w-0 max-w-[850px]">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-[var(--text)]">
                      Sarah Chen
                    </h3>

                    <span className="text-xs text-[var(--text-muted)]">
                      10:24 AM
                    </span>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      rounded-tl-sm
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      px-5 py-4
                      text-[15px]
                      leading-7
                      text-[var(--text)]
                    "
                  >
                    Hey everyone! I've just deployed the new AI-augmented
                    dashboard component. Can someone from{" "}
                    <span className="font-semibold text-[var(--primary)]">
                      @dev
                    </span>{" "}
                    check the integration with the Synthetix API?
                  </div>
                </div>
              </div>

              {/* =================================================
                  AI INSIGHT
              ================================================== */}

              <div
                className="
                  mb-8
                  rounded-2xl
                  border
                  border-[var(--primary-light)]
                  bg-[var(--primary-soft)]
                  p-5
                "
              >
                <div className="mb-5 flex items-center gap-2">
                  <Sparkles
                    size={19}
                    className="text-[var(--primary)]"
                  />

                  <h3
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[var(--primary)]
                    "
                  >
                    Synthetix AI Insight
                  </h3>
                </div>

                <div className="grid gap-3 md:grid-cols-3">

                  <InsightBox
                    title="Sentiment Analysis"
                    value="74% Positive"
                    success
                  />

                  <InsightBox
                    title="Action Items"
                    value="3 Pending tasks identified"
                  />

                  <InsightBox
                    title="Predicted Engagement"
                    value="+12% Peak at 2:00 PM"
                  />

                </div>
              </div>

              {/* =================================================
                  MESSAGE 2
              ================================================== */}

              <div className="mb-7 flex gap-4">
                <Avatar text="AR" />

                <div className="min-w-0 max-w-[850px]">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-[var(--text)]">
                      Alex Rivera
                    </h3>

                    <span className="text-xs text-[var(--text-muted)]">
                      10:30 AM
                    </span>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      rounded-tl-sm
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      px-5 py-4
                      text-[15px]
                      leading-7
                      text-[var(--text)]
                    "
                  >
                    Agreed! The technical elegance is really coming through
                    in this iteration.{" "}
                    <span className="text-[var(--primary)]">
                      @Sarah
                    </span>{" "}
                    I noticed a small padding issue on mobile, but it's an
                    easy fix.

                    {/* File */}
                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        gap-4
                        rounded-xl
                        border
                        border-[var(--border)]
                        bg-[var(--input-bg)]
                        px-4 py-3
                      "
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-lg
                            bg-[var(--primary-soft)]
                            text-[var(--primary)]
                          "
                        >
                          <FileText size={19} />
                        </div>

                        <span className="truncate text-sm text-[var(--text)]">
                          marketing_projection_v4.pdf
                        </span>
                      </div>

                      <span className="shrink-0 text-xs text-[var(--text-muted)]">
                        2.4 MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  OWN MESSAGE
              ================================================== */}

              <div className="flex justify-end gap-3">
                <div className="max-w-[700px]">
                  <div className="mb-1 flex justify-end gap-2">
                    <span className="text-xs text-[var(--text-muted)]">
                      10:28 AM
                    </span>

                    <span className="font-semibold text-[var(--text)]">
                      You
                    </span>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      rounded-tr-sm
                      bg-[var(--primary)]
                      px-5 py-4
                      text-[15px]
                      leading-7
                      text-white
                    "
                  >
                    On it, Sarah. Initial tests look solid. I'm seeing the
                    new bento grid layout rendering correctly across all
                    breakpoints. Great work on the glassmorphism effects!
                  </div>
                </div>

                <Avatar text="LC" />
              </div>
            </div>

            {/* ===================================================
                MESSAGE COMPOSER
            ==================================================== */}

            <div
              className="
                shrink-0
                border-t
                border-[var(--border)]
                bg-[var(--bg)]
                p-5
              "
            >
              <div
                className="
                  mx-auto
                  max-w-[1000px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                "
              >
                {/* Toolbar */}
                <div
                  className="
                    flex
                    items-center
                    gap-5
                    border-b
                    border-[var(--border)]
                    px-5 py-3
                    text-[var(--text-secondary)]
                  "
                >
                  <button className="hover:text-[var(--text)]">
                    <Bold size={18} />
                  </button>

                  <button className="hover:text-[var(--text)]">
                    <Italic size={18} />
                  </button>

                  <button className="hover:text-[var(--text)]">
                    <List size={19} />
                  </button>

                  <button className="hover:text-[var(--text)]">
                    <Link size={18} />
                  </button>

                  <button className="hover:text-[var(--text)]">
                    <Code size={18} />
                  </button>
                </div>

                {/* Text area */}
                <textarea
                  rows="4"
                  placeholder="Message #general..."
                  className="
                    w-full
                    resize-none
                    bg-transparent
                    px-5 py-4
                    text-sm
                    text-[var(--text)]
                    outline-none
                    placeholder:text-[var(--text-muted)]
                  "
                />

                {/* Bottom toolbar */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    px-5 pb-4
                  "
                >
                  <div className="flex items-center gap-5">
                    <button
                      className="
                        text-[var(--text-secondary)]
                        hover:text-[var(--text)]
                      "
                    >
                      <Plus size={21} />
                    </button>

                    <button
                      className="
                        text-[var(--text-secondary)]
                        hover:text-[var(--text)]
                      "
                    >
                      <Smile size={20} />
                    </button>

                    <button
                      className="
                        text-[var(--text-secondary)]
                        hover:text-[var(--text)]
                      "
                    >
                      <AtSign size={20} />
                    </button>
                  </div>

                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-[var(--button-primary)]
                      px-6 py-3
                      text-sm
                      font-semibold
                      text-[var(--button-primary-text)]
                      transition
                      hover:bg-[var(--button-primary-hover)]
                    "
                  >
                    Send
                    <Send size={16} />
                  </button>
                </div>
              </div>

              <p className="mt-2 text-right text-xs text-[var(--text-muted)]">
                Press Enter to send, Shift + Enter for new line.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            THREAD DETAILS
            Light screenshot
        ====================================================== */}

        <aside
          className="
            hidden
            w-[310px]
            shrink-0
            border-l
            border-[var(--border)]
            bg-[var(--surface)]
            xl:flex
            xl:flex-col
          "
        >
          <div className="border-b border-[var(--border)] px-7 py-7">
            <h2 className="text-xl font-bold text-[var(--text)]">
              Thread Details
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              Ongoing discussion about Q4 projections and resource allocation.
            </p>
          </div>

          <div className="px-7 py-7">
            <h3
              className="
                text-sm
                uppercase
                tracking-[0.15em]
                text-[var(--text-secondary)]
              "
            >
              Shared Files
            </h3>

            <SharedFile
              icon={<FileText size={20} />}
              name="marketing_projection_v4.pdf"
              size="2.4 MB"
              time="10:28 AM"
            />

            <SharedFile
              icon={<ImageIcon size={20} />}
              name="hero_v2_final.png"
              size="8.1 MB"
              time="Yesterday"
            />
          </div>

          <div className="mt-auto p-7">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--primary-soft)]
                p-5
              "
            >
              <p className="text-sm font-semibold text-[var(--primary)]">
                Pro Tip
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Use @Synthetix to trigger AI summarization of the last 50
                messages.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};


/* =========================================================
   SMALL COMPONENTS
========================================================= */

const Avatar = ({ text }) => {
  return (
    <div
      className="
        flex h-11 w-11
        shrink-0
        items-center justify-center
        rounded-xl
        border
        border-[var(--avatar-border)]
        bg-[var(--avatar-bg)]
        text-xs
        font-semibold
        text-[var(--text)]
      "
    >
      {text}
    </div>
  );
};


const InsightBox = ({ title, value, success }) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-4
      "
    >
      <p className="text-xs font-medium text-[var(--text-secondary)]">
        {title}
      </p>

      <p
        className={`
          mt-2
          text-lg
          font-semibold
          ${
            success
              ? "text-[var(--success)]"
              : "text-[var(--text)]"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
};


const SharedFile = ({ icon, name, size, time }) => {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div
        className="
          flex h-11 w-11
          shrink-0
          items-center justify-center
          rounded-xl
          bg-[var(--primary-soft)]
          text-[var(--primary)]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[var(--text)]">
          {name}
        </p>

        <p className="text-xs text-[var(--text-muted)]">
          {size} • {time}
        </p>
      </div>
    </div>
  );
};

export default Chat;