import { useState } from "react";

export default function TaskForm({ initial, onSubmit, onCancel }) {
  // 🔌 FIX 1: Automatically convert any old hyphenated database status to a space on load
  const [form, setForm] = useState(() => {
    if (initial) {
      return {
        ...initial,
        status: initial.status === "in-progress" ? "in progress" : initial.status
      };
    }
    return { title: "", description: "", status: "pending", priority: "medium" };
  });
  
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.title.trim())           e.title = "Title is required";
    else if (form.title.length > 100) e.title = "Max 100 characters";
    if (form.description.length > 500) e.description = "Max 500 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onSubmit(form);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 ${errors.title ? "border-red-400" : "border-gray-200"}`}
          value={form.title}
          onChange={e => set("title", e.target.value)}
          placeholder="Enter task title"
        />
        {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          className={`w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300 resize-none h-20 ${errors.description ? "border-red-400" : "border-gray-200"}`}
          value={form.description}
          onChange={e => set("description", e.target.value)}
          placeholder="Optional description"
        />
        {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
            value={form.status}
            onChange={e => set("status", e.target.value)}
          >
            <option value="pending">Pending</option>
            {/* 🔌 FIX 2: Changed value from "in-progress" to "in progress" to match backend */}
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-300"
            value={form.priority}
            onChange={e => set("priority", e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {initial ? "Save Changes" : "Create Task"}
        </button>
      </div>
    </div>
  );
}