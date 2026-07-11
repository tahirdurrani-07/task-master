import { Inbox } from "lucide-react";

function EmptyState({
  title = "Nothing here yet",
  description = "There is no data to display.",
  action = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">

      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">

        <Inbox
          size={38}
          className="text-slate-400"
        />

      </div>

      <h2 className="mt-6 text-2xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-slate-500 leading-7">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}

    </div>
  );
}

export default EmptyState;