import TaskRow from "./TaskRow";

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-sm">No tasks found. Create one to get started.</p>
      </div>
    );
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Title</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Status</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Priority</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Created</th>
          <th className="px-4 py-3" />
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskRow key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}