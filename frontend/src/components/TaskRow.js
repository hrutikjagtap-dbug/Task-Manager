import { StatusBadge, PriorityBadge } from "./Badge";

export default function TaskRow({ task, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <p className="font-medium text-gray-900">{task.title}</p>
        {task.description && (
          <p className="text-xs text-gray-400 mt-0.5 truncate max-w-xs">{task.description}</p>
        )}
      </td>
      <td className="px-4 py-4"><StatusBadge status={task.status} /></td>
      <td className="px-4 py-4"><PriorityBadge priority={task.priority} /></td>
      <td className="px-4 py-4 text-gray-400 text-sm">
        {new Date(task.createdAt).toLocaleDateString("en-IN", {
          day: "numeric", month: "short", year: "numeric"
        })}
      </td>
      <td className="px-4 py-4">
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => onEdit(task)} // 🔌 FIX: Pass the entire task object so setEditTarget gets everything
            className="text-gray-400 hover:text-indigo-600 transition-colors p-1 rounded hover:bg-indigo-50"
            title="Edit Task"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task._id)} // Perfect! Passes the string ID to show the Confirm Dialog
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50"
            title="Delete Task"
          >
            🗑️
          </button>
        </div>
      </td>
    </tr>
  );
}
