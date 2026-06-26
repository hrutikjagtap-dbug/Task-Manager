import React from "react";

export default function StatsBar({ tasks = [] }) {
  const safeTasks = Array.isArray(tasks) ? tasks.filter(t => t) : [];
  
  const total = safeTasks.length;
  const pending = safeTasks.filter(t => t.status === "pending").length;
  const inProgress = safeTasks.filter(t => t.status === "in progress").length;
  const completed = safeTasks.filter(t => t.status === "completed").length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Tasks</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{total}</p>
      </div>
      
      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Pending</p>
        <p className="text-2xl font-bold text-yellow-600 mt-1">{pending}</p>
      </div>

      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">In Progress</p>
        <p className="text-2xl font-bold text-blue-600 mt-1">{inProgress}</p>
      </div>

      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Completed</p>
        <p className="text-2xl font-bold text-green-600 mt-1">{completed}</p>
      </div>
    </div>
  );
}