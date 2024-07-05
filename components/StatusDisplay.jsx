export default function StatusDisplay({ status }) {
  const getStatusText = (statuss) => {
    switch (statuss) {
      case "bg-not-started":
        return "not started";
      case "bg-in-progress":
        return "doing";
      case "bg-done":
        return "done";
    }
  };

  return (
    <div>
      <span
        className={`inline-block rounded-full px-2 py-1 text-xs text-black font-semibold ${status}`}
      >
        {getStatusText(status)}
      </span>
    </div>
  );
}
