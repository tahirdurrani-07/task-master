import {
  Bell,
  CheckCheck,
  Trash2,
} from "lucide-react";

import {
  useNotifications,
} from "../../context/NotificationContext";

function NotificationDropdown({ onClose }) {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    clearNotifications,
  } = useNotifications();

  return (
    <div
      className="
        absolute
        right-0
        top-14
        z-50
        w-96
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          p-5

          dark:border-slate-700
        "
      >
        <div>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Notifications
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {unreadCount} unread notification
            {unreadCount !== 1 ? "s" : ""}
          </p>

        </div>

        <Bell
          size={22}
          className="text-blue-600"
        />

      </div>

      {/* Notifications */}

      <div className="max-h-96 overflow-y-auto">

        {notifications.length === 0 ? (

          <div className="p-10 text-center">

            <Bell
              size={42}
              className="mx-auto text-slate-300 dark:text-slate-600"
            />

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              No notifications yet.
            </p>

          </div>

        ) : (

          notifications.map((notification) => (

            <button
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`
                w-full
                border-b
                border-slate-100
                p-5
                text-left
                transition

                hover:bg-slate-50

                dark:border-slate-800
                dark:hover:bg-slate-800

                ${
                  !notification.read
                    ? "bg-blue-50 dark:bg-blue-500/10"
                    : ""
                }
              `}
            >

              <div className="flex items-start gap-3">

                {!notification.read && (
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
                )}

                <div className="flex-1">

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {notification.createdAt}
                  </p>

                </div>

              </div>

            </button>

          ))

        )}

      </div>

      {/* Footer */}

      {notifications.length > 0 && (

        <div
          className="
            flex
            gap-2
            border-t
            border-slate-200
            p-4

            dark:border-slate-700
          "
        >

          <button
            onClick={markAllAsRead}
            className="
              flex-1
              rounded-xl
              bg-blue-600
              px-4
              py-2
              text-sm
              font-medium
              text-white

              hover:bg-blue-700
            "
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCheck size={16} />
              Mark All
            </div>
          </button>

          <button
            onClick={clearNotifications}
            className="
              flex-1
              rounded-xl
              border
              border-red-200
              px-4
              py-2
              text-sm
              font-medium
              text-red-600

              hover:bg-red-50

              dark:border-red-500/30
              dark:hover:bg-red-500/10
            "
          >
            <div className="flex items-center justify-center gap-2">
              <Trash2 size={16} />
              Clear
            </div>
          </button>

        </div>

      )}

    </div>
  );
}

export default NotificationDropdown;