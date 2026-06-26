// Alternative Approach: Native space matching
const STATUS_CONFIG = {
  pending:         { label: "Pending",     bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-400" },
  "in progress":   { label: "In Progress", bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-400"  }, // 👈 Space key
  completed:       { label: "Completed",   bg: "bg-green-50",  text: "text-green-700",  dot: "bg-green-500" },
};

const PRIORITY_CONFIG = {
  low:    { label: "Low",    bg: "bg-gray-100",  text: "text-gray-500"   },
  medium: { label: "Medium", bg: "bg-orange-50", text: "text-orange-600" },
  high:   { label: "High",   bg: "bg-red-50",    text: "text-red-600"    },
};

export function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

export function PriorityBadge({ priority }) {
  const config = PRIORITY_CONFIG[priority] || PRIORITY_CONFIG.medium;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}