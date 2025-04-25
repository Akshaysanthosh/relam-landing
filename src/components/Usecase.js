import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Slack brand palette (light mode) */
const SLACK = {
  aubergine: "#4A154B",
  blue:      "#36C5F0",
  green:     "#2EB67D",
  yellow:    "#ECB22E",
  red:       "#E01E5A",
  sidebar:   "#350D36",
  bgDark:    "#3E1141",
};

/* ──────────────────────────────────────────────────────────── */
/*                   Realistic Slack UI Mock                   */
/* ──────────────────────────────────────────────────────────── */
function SlackMock({ messages }) {
  const channels = [
    { id: "gen", name: "general" },
    { id: "rnd", name: "random" },
    { id: "sig", name: "relam-signals", active: true },
    { id: "mkt", name: "marketing" },
    { id: "cal", name: "calendar-app", isApp: true },
  ];

  return (
    <div className="w-full max-w-[900px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white font-[Inter]">
      {/* WORKSPACE HEADER */}
      <div className="flex items-center justify-between h-10 px-4 bg-gray-100 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded-md bg-gray-300" />
          <span className="text-sm font-semibold text-gray-900">Acme Inc.</span>
        </div>
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full" style={{ background: SLACK.red }} />
          <span className="h-2 w-2 rounded-full" style={{ background: SLACK.yellow }} />
          <span className="h-2 w-2 rounded-full" style={{ background: SLACK.green }} />
        </div>
      </div>

      <div className="flex h-[520px]">
        {/* SIDEBAR */}
        <aside
          className="hidden md:flex w-60 flex-col text-sm text-white"
          style={{ background: SLACK.sidebar }}
        >
          {/* user card */}
          <div className="flex items-center space-x-3 px-4 py-3 border-b border-white/10">
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              R
            </div>
            <div>
              <p className="font-semibold leading-none">Relam Bot</p>
              <p className="flex items-center text-xs text-green-400">
                <span className="h-2 w-2 mr-1 rounded-full bg-green-400" />
                Active
              </p>
            </div>
          </div>

          {/* channels */}
          <div className="flex-1 overflow-y-auto py-3 space-y-0.5">
            {channels.map((ch) => (
              <div
                key={ch.id}
                className={`flex items-center px-4 py-1.5 cursor-default ${
                  ch.active ? "bg-[#7b3b92]/60" : "hover:bg-white/10"
                }`}
              >
                {ch.isApp ? (
                  <span className="mr-2 text-[10px]">⚡️</span>
                ) : (
                  <span className="mr-2 text-[10px]">#</span>
                )}
                <span className="truncate">{ch.name}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN PANE */}
        <div className="flex-1 flex flex-col bg-[#F8F8F8]">
          {/* toolbar */}
          <div className="flex items-center space-x-6 pl-6 h-10 border-b">
            {["Home", "Messages", "About"].map((t) => (
              <button
                key={t}
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {t}
              </button>
            ))}
          </div>

          {/* messages */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {messages.map((m, idx) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: idx * 0.12 }}
                  className="flex items-start space-x-3"
                >
                  <div className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                    R
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-sm font-semibold text-gray-900">{m.sender}</span>
                      <span className="text-xs text-gray-500">{m.time}</span>
                    </div>
                    <div className="mt-1 leading-relaxed text-[15px] text-gray-900">{m.text}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="my-8 border-t" />

            {/* typing */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
              <span className="pl-2 text-xs text-gray-500">Relam Bot is thinking…</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
/*                     Persona-specific data                    */
/* ──────────────────────────────────────────────────────────── */
const useCases = [
  {
    tab: "Sales Development",
    messages: [
      {
        id: 1,
        sender: "Relam Bot",
        time:  "10:24 AM",
        text:  (
          <>
            <strong>Smartsheet</strong> added <strong>Security &amp; Pen-Testing</strong> to
            their buying research. SDR team: perfect time to sequence! 🚀
          </>
        ),
      },
      {
        id: 2,
        sender: "Relam Bot",
        time:  "10:26 AM",
        text:  (
          <>
            Champion <strong>Maria Purcell</strong> promoted to Intl. Sales Head — send
            congrats &amp; secure intro 📈
          </>
        ),
      },
    ],
  },
  {
    tab: "Account Executive",
    messages: [
      {
        id: 1,
        sender: "Relam Bot",
        time:  "09:18 AM",
        text:  (
          <>
            <strong>Acme Corp</strong> pilot stalling. Competitor <strong>Vendor X</strong>{" "}
            discount detected. Battlecard →{" "}
            <span className="underline text-blue-600">link</span>
          </>
        ),
      },
      {
        id: 2,
        sender: "Relam Bot",
        time:  "09:21 AM",
        text:  (
          <>
            CFO joined thread. Highlight <em>cost-savings</em> slide for tomorrow’s demo 💡
          </>
        ),
      },
    ],
  },
  {
    tab: "Account Management",
    messages: [
      {
        id: 1,
        sender: "Relam Bot",
        time:  "2:03 PM",
        text:  (
          <>
            Expansion trigger: <strong>Globex</strong> opened 3 new regions. Surface upsell
            proposal 📊
          </>
        ),
      },
    ],
  },
  {
    tab: "RevOps",
    messages: [
      {
        id: 1,
        sender: "Relam Bot",
        time:  "8:00 AM",
        text:  (
          <>
            Pipeline alert: <strong>7 deals</strong> impacted by competitor under-cutting.
            Adjust forecast −3.2 %.
          </>
        ),
      },
    ],
  },
  {
    tab: "Demand Generation",
    messages: [
      {
        id: 1,
        sender: "Relam Bot",
        time:  "4:42 PM",
        text:  (
          <>
            <strong>Healthcare AI</strong> topic up +45 % WoW. Launch LinkedIn campaign
            draft now.
          </>
        ),
      },
    ],
  },
];

/* ──────────────────────────────────────────────────────────── */
/*                          Main Component                     */
/* ──────────────────────────────────────────────────────────── */
export default function Usecase() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-24 bg-gradient-to-r from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* tab bar */}
        <div className="flex overflow-x-auto gap-4 mb-16 justify-center scrollbar-hide mask-fade">
          {useCases.map((u, i) => (
            <button
              key={u.tab}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
                ${i === active
                  ? "border-2 border-blue-600 text-blue-600 bg-white/90 dark:bg-gray-800"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800/40"}`}
            >
              {u.tab}
            </button>
          ))}
        </div>

        {/* Slack mock */}
        <div className="flex justify-center">
          <SlackMock messages={useCases[active].messages} />
        </div>
      </div>
    </section>
  );
}