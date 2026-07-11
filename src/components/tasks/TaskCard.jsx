import { useState } from "react";

import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Pencil,
  Trash2,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";
import ConfirmModal from "../ui/ConfirmModal";

import { useTasks } from "../../context/TaskContext";
import { formatDueDate } from "../../utils/formatDueDate";

function TaskCard({ task }) {
  const {
    deleteTask,
    toggleTask,
    setEditingTask,
  } = useTasks();

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const isCompleted =
    task.completed ||
    task.status === "Completed";

  return (
    <>
      <Card
        hover
        className="overflow-hidden"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}

          <div className="flex min-w-0 flex-1 items-start gap-4">

            {/* Complete */}

            <button
              onClick={() =>
                toggleTask(task._id)
              }
              title={
                isCompleted
                  ? "Mark as Pending"
                  : "Mark as Completed"
              }
              className="
                mt-1
                text-blue-600
                transition-all
                duration-200
                hover:scale-110

                dark:text-blue-400
              "
            >
              {isCompleted ? (
                <CheckCircle2 size={24} />
              ) : (
                <Circle size={24} />
              )}
            </button>

            {/* Content */}

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-3">

                <h3
                  className={`text-xl font-semibold ${
                    isCompleted
                      ? "line-through text-slate-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {task.title}
                </h3>

                <Badge
                  variant={
                    task.priority === "High"
                      ? "danger"
                      : task.priority ===
                        "Medium"
                      ? "warning"
                      : "success"
                  }
                >
                  {task.priority}
                </Badge>

              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">

                {task.description ||
                  "No description provided."}

              </p>

              <div className="mt-5 flex flex-wrap items-center gap-5">

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

                  <CalendarDays size={16} />

                  <span>
                    {formatDueDate(
                      task.dueDate
                    )}
                  </span>

                </div>

                <div
                  className={`text-sm font-semibold ${
                    isCompleted
                      ? "text-green-600 dark:text-green-400"
                      : "text-orange-500 dark:text-orange-400"
                  }`}
                >
                  {isCompleted
                    ? "Completed"
                    : task.status}
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-3 self-end lg:self-start">

            <button
              onClick={() =>
                setEditingTask(task)
              }
              title="Edit Task"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-slate-100
                text-slate-600
                transition-all
                duration-200

                hover:bg-blue-100
                hover:text-blue-600
                hover:shadow-md

                dark:bg-slate-800
                dark:text-slate-300
                dark:hover:bg-blue-500/20
                dark:hover:text-blue-400
              "
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() =>
                setShowDeleteModal(true)
              }
              title="Delete Task"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-slate-100
                text-slate-600
                transition-all
                duration-200

                hover:bg-red-100
                hover:text-red-600
                hover:shadow-md

                dark:bg-slate-800
                dark:text-slate-300
                dark:hover:bg-red-500/20
                dark:hover:text-red-400
              "
            >
              <Trash2 size={18} />
            </button>

          </div>

        </div>
      </Card>

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onConfirm={() =>
          deleteTask(task._id)
        }
        title="Delete Task"
        message={`Are you sure you want to delete "${task.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
}

export default TaskCard;