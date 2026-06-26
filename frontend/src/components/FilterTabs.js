import React from "react";

const FILTERS = [
  { key: "all",         label: "All"         },
  { key: "pending",     label: "Pending"     },
  { key: "in progress", label: "In Progress" }, // 🔌 FIX: Changed from "in-progress" to "in progress"
  { key: "completed",   label: "Completed"   },
];

export default function FilterTabs({ filter, setFilter, tasks = [] }) {
  const safeTasks = Array.isArray(tasks) ? tasks.filter(t => t && t.status) : [];

  const counts = {
    all:           safeTasks.length,
    pending:       safeTasks.filter(t => t.status === "pending").length,
    "in progress": safeTasks.filter(t => t.status === "in progress").length, // 🔌 FIX: Match exact string key format
    completed:     safeTasks.filter(t => t.status === "completed").length,
  };

  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-full sm:w-fit overflow-x-auto flex-nowrap mb-6">
      {FILTERS.map(f => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
            filter === f.key
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {f.label}
          <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
            filter === f.key
              ? "bg-indigo-100 text-indigo-600"
              : "bg-gray-200 text-gray-500"
          }`}>
            {counts[f.key] || 0}
          </span>
        </button>
      ))}
    </div>
  );
}