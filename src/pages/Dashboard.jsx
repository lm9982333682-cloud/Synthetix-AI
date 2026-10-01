import React from "react";
import {
  CheckSquare,
  CheckCircle,
  Rocket,
  Users,
  ClipboardList,
  Pencil,
  Check,
  UserPlus,
  TriangleAlert,
  ArrowRight,
} from "lucide-react";


const Dashboard = () => {
  return (
    <main
      className="
        w-full
        min-w-0
        min-h-full
        overflow-y-auto
        bg-[var(--bg)]
        text-[var(--text)]
      "
    >
      <div className="px-7 py-7">

        {/* =====================================================
            GREETING
        ===================================================== */}

        <section>
          <h1
            className="
              text-[32px]
              font-bold
              leading-tight
              text-[var(--text)]
            "
          >
            Good morning, Devendra 👋
          </h1>

          <p
            className="
              mt-1
              text-[15px]
              text-[var(--text-secondary)]
            "
          >
            Here's what's happening with your projects today.
          </p>
        </section>


        {/* =====================================================
            STATS
        ===================================================== */}

        <section
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            mt-7
          "
        >

          <StatCard
            title="Total Tasks"
            value="128"
            badge="+12%"
            icon={ClipboardList}
          />

          <StatCard
            title="Completed Tasks"
            value="94"
            badge="+5%"
            icon={CheckCircle}
          />

          <StatCard
            title="Active Projects"
            value="12"
            badge="ACTIVE"
            icon={Rocket}
          />

          <StatCard
            title="Team Members"
            value="42"
            badge="8 NEW"
            icon={Users}
          />

        </section>


        {/* =====================================================
            CHART + ACTIVITY TIMELINE
        ===================================================== */}

        <section
          className="
            grid
            grid-cols-1
            xl:grid-cols-[minmax(0,1fr)_315px]
            gap-6
            mt-8
          "
        >

          {/* ================= TASK PROGRESS ================= */}

          <div
            className="
              min-h-[460px]
              rounded-[11px]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <h2
                className="
                  text-[22px]
                  font-semibold
                  text-[var(--text)]
                "
              >
                Task Progress
              </h2>

              <button
                className="
                  px-3
                  py-2
                  rounded-[8px]
                  bg-[var(--surface-light)]
                  border
                  border-[var(--border)]
                  text-xs
                  text-[var(--text-secondary)]
                  hover:bg-[var(--surface-hover)]
                  transition
                "
              >
                Last 7 Days⌄
              </button>

            </div>


            {/* Chart */}

            <div
              className="
                h-[330px]
                flex
                items-end
                justify-around
                gap-3
                pt-12
              "
            >

              {[
                30,
                48,
                42,
                68,
                34,
                25,
                22,
              ].map((height, index) => (

                <div
                  key={index}
                  className={`
                    w-[45px]
                    sm:w-[55px]
                    lg:w-[65px]
                    rounded-t-[8px]
                    transition-all
                    ${
                      index === 3
                        ? "bg-[var(--primary)]"
                        : "bg-[var(--surface-light)]"
                    }
                  `}
                  style={{
                    height: `${height * 3}px`,
                  }}
                />

              ))}

            </div>


            {/* Days */}

            <div className="grid grid-cols-7 text-center">

              {[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((day) => (

                <span
                  key={day}
                  className="
                    text-xs
                    font-medium
                    text-[var(--text-secondary)]
                  "
                >
                  {day}
                </span>

              ))}

            </div>

          </div>


          {/* ================= TIMELINE ================= */}

          <div
            className="
              min-h-[460px]
              rounded-[11px]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
              overflow-hidden
            "
          >

            <h2
              className="
                text-[22px]
                font-semibold
                text-[var(--text)]
              "
            >
              Activity Timeline
            </h2>


            <div className="mt-7 space-y-8">

              <TimelineItem
                icon={Pencil}
                title="Sarah updated"
                text="Landing Page Redesign"
                time="2 hours ago"
                type="purple"
              />

              <TimelineItem
                icon={Check}
                title="Alex completed"
                text="API Integration"
                time="5 hours ago"
                type="purple"
              />

              <TimelineItem
                icon={UserPlus}
                title="New member joined"
                text="Design Team"
                time="Yesterday"
                type="yellow"
              />

              <TimelineItem
                icon={TriangleAlert}
                title="Server alert:"
                text="High latency detected"
                time=""
                type="red"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            ACTIVE TEAM + AI SUGGESTION
        ===================================================== */}

        <section
          className="
            grid
            grid-cols-1
            xl:grid-cols-[minmax(0,1fr)_315px]
            gap-6
            mt-8
          "
        >

          {/* ================= ACTIVE TEAM ================= */}

          <div
            className="
              min-h-[245px]
              rounded-[11px]
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <h2
                className="
                  text-[22px]
                  font-semibold
                  text-[var(--text)]
                "
              >
                Active Team Members
              </h2>

              <button
                className="
                  text-sm
                  font-medium
                  text-[var(--primary)]
                  hover:opacity-80
                  transition
                "
              >
                View All
              </button>

            </div>


            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-7
              "
            >

              {[
                ["Sarah J.", "In Meeting", "avatar1.jpg"],
                ["Alex M.", "Coding", "avatar2.jpg"],
                ["Elena R.", "Design Review", "avatar3.jpg"],
                ["Marcus L.", "Out of Office", "avatar4.jpg"],
              ].map(([name, status, image]) => (

                <div
                  key={name}
                  className="
                    w-full
                    sm:w-[180px]
                    h-[65px]
                    rounded-[10px]
                    bg-[var(--surface-light)]
                    border
                    border-[var(--border)]
                    flex
                    items-center
                    gap-3
                    px-3
                  "
                >

                  <img
                    src={`/images/${image}`}
                    alt={name}
                    className="
                      w-9
                      h-9
                      rounded-full
                      object-cover
                      border
                      border-[var(--avatar-border)]
                    "
                  />

                  <div className="min-w-0">

                    <p
                      className="
                        text-sm
                        font-medium
                        text-[var(--text)]
                      "
                    >
                      {name}
                    </p>

                    <p
                      className="
                        text-xs
                        text-[var(--text-secondary)]
                        truncate
                      "
                    >
                      {status}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= AI SUGGESTION ================= */}

          <div
            className="
              min-h-[245px]
              rounded-[11px]
              border
              border-[var(--border)]
              bg-[var(--primary-soft)]
              p-6
            "
          >

            <div
              className="
                text-[var(--primary-light)]
                text-[24px]
                font-semibold
              "
            >
              ◇_WORK
            </div>

            <h2
              className="
                text-[19px]
                font-semibold
                mt-2
                text-[var(--text)]
              "
            >
              AI Suggestion
            </h2>

            <p
              className="
                text-sm
                leading-5
                text-[var(--text-secondary)]
                mt-1
              "
            >
              Based on your activity, you should review the
              "Core API" tasks today.
            </p>

            <button
              className="
                flex
                items-center
                gap-1
                mt-5
                text-sm
                font-semibold
                text-[var(--primary)]
                hover:opacity-80
                transition
              "
            >
              Take Action
              <ArrowRight size={16} />
            </button>

          </div>

        </section>


        {/* =====================================================
            RECENT ACTIVITIES
        ===================================================== */}

        <section
          className="
            mt-8
            rounded-[11px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <h2
              className="
                text-[22px]
                font-semibold
                text-[var(--text)]
              "
            >
              Recent Activities
            </h2>

            <button
              className="
                text-sm
                text-[var(--primary)]
                font-medium
              "
            >
              See all
            </button>

          </div>


          <div className="mt-6 space-y-6">

            <Activity
              color="var(--primary)"
              title="Deployment successful"
              text="by Rick White in Synthetix-Engine-v2"
              time="2 hours ago"
            />

            <Activity
              color="var(--tertiary)"
              title="New comment"
              text='on task "Optimize prompt latency"'
              time="4 hours ago"
            />

            <Activity
              color="var(--secondary)"
              title="Project created"
              text="by Jane Doe"
              time="Yesterday"
            />

          </div>

        </section>


        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}

        <section
          className="
            mt-8
            min-h-[350px]
            rounded-[13px]
            overflow-hidden
            bg-[var(--primary)]
            relative
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              h-full
            "
          >

            {/* Content */}

            <div
              className="
                px-7
                py-10
                max-w-[560px]
              "
            >

              <span
                className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  bg-[var(--primary-dark)]
                  text-xs
                  text-white
                "
              >
                Featured Project
              </span>


              <h2
                className="
                  text-[30px]
                  font-bold
                  text-white
                  mt-4
                "
              >
                Neural Synthesis v4.0
              </h2>


              <p
                className="
                  text-[16px]
                  leading-6
                  text-white/80
                  mt-2
                "
              >
                Next-generation language model training pipeline.
                Currently at 72% completion.
              </p>


              <div className="flex flex-wrap gap-3 mt-6">

                <button
                  className="
                    h-[50px]
                    px-5
                    rounded-[9px]
                    bg-white
                    text-[var(--primary-dark)]
                    font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  Go to Project
                </button>

                <button
                  className="
                    h-[50px]
                    px-5
                    rounded-[9px]
                    border
                    border-white/50
                    text-white
                    font-medium
                    hover:bg-white/10
                    transition
                  "
                >
                  View Analytics
                </button>

              </div>

            </div>


            {/* Image */}

            <img
              src="/images/project.jpg"
              alt="Neural Synthesis"
              className="
                hidden
                lg:block
                w-[360px]
                h-[285px]
                object-cover
                rounded-[10px]
                rotate-[2deg]
                mr-7
              "
            />

          </div>

        </section>

      </div>
    </main>
  );
};


/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  title,
  value,
  badge,
  icon: Icon,
}) => {
  return (
    <div
      className="
        h-[150px]
        rounded-[11px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        transition
        hover:bg-[var(--surface-hover)]
      "
    >

      <div className="flex items-start justify-between">

        <div
          className="
            w-9
            h-9
            rounded-[9px]
            bg-[var(--primary-soft)]
            text-[var(--primary)]
            flex
            items-center
            justify-center
          "
        >
          <Icon size={19} />
        </div>


        <span
          className="
            text-xs
            font-medium
            text-[var(--text-secondary)]
          "
        >
          {badge}
        </span>

      </div>


      <p
        className="
          mt-5
          text-sm
          text-[var(--text-secondary)]
        "
      >
        {title}
      </p>


      <p
        className="
          text-[27px]
          font-semibold
          leading-8
          text-[var(--text)]
        "
      >
        {value}
      </p>

    </div>
  );
};


/* =========================================================
   ACTIVITY
========================================================= */

const Activity = ({
  color,
  title,
  text,
  time,
}) => {
  return (
    <div className="flex items-start gap-4">

      <span
        className="
          mt-1.5
          w-2.5
          h-2.5
          rounded-full
          shrink-0
        "
        style={{
          backgroundColor: color,
        }}
      />

      <div>

        <p
          className="
            text-sm
            text-[var(--text)]
          "
        >

          <strong>{title}</strong>{" "}

          <span
            className="
              text-[var(--text-secondary)]
            "
          >
            {text}
          </span>

        </p>


        <p
          className="
            text-[11px]
            mt-1
            text-[var(--text-muted)]
          "
        >
          {time}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   TIMELINE ITEM
========================================================= */

const TimelineItem = ({
  icon: Icon,
  title,
  text,
  time,
  type,
}) => {

  const typeClasses = {
    purple: `
      bg-[var(--primary-soft)]
      text-[var(--primary)]
    `,

    yellow: `
      bg-[var(--warning-soft)]
      text-[var(--warning)]
    `,

    red: `
      bg-[var(--danger-soft)]
      text-[var(--danger)]
    `,
  };


  return (
    <div className="flex gap-4">

      <div
        className={`
          w-9
          h-9
          rounded-full
          flex
          items-center
          justify-center
          shrink-0
          ${typeClasses[type]}
        `}
      >
        <Icon size={17} />
      </div>


      <div>

        <p
          className="
            text-sm
            text-[var(--text)]
          "
        >

          {title}{" "}

          <span
            className="
              text-[var(--primary-light)]
            "
          >
            {text}
          </span>

        </p>


        {time && (
          <p
            className="
              text-xs
              mt-1
              text-[var(--text-secondary)]
            "
          >
            {time}
          </p>
        )}

      </div>

    </div>
  );
};


export default Dashboard;