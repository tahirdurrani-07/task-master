import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import AddTaskModal from "./AddTaskModal";
import { useTasks } from "../../context/TaskContext";

function AddTaskButton() {
  const [open, setOpen] = useState(false);

  const { editingTask, setEditingTask } = useTasks();

  useEffect(() => {
    if (editingTask) {
      setOpen(true);
    }
  }, [editingTask]);

  function closeModal() {
    setOpen(false);
    setEditingTask(null);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          items-center
          gap-3
          rounded-full
          bg-blue-600
          px-5
          py-3
          text-white
          shadow-lg
          transition-all
          duration-200
          hover:-translate-y-1
          hover:bg-blue-700
          hover:shadow-xl
          active:scale-95
        "
        aria-label="Add New Task"
      >
        <Plus
          size={20}
          strokeWidth={2.5}
        />

        <span className="hidden sm:inline text-sm font-medium">
          New Task
        </span>
      </button>

      <AddTaskModal
        isOpen={open}
        onClose={closeModal}
      />
    </>
  );
}

export default AddTaskButton;