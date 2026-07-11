import { useEffect, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import { useTasks } from "../../context/TaskContext";

function TaskForm({ onClose }) {
  const {
    addTask,
    updateTask,
    editingTask,
  } = useTasks();

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [status, setStatus] =
    useState("Pending");

  const [dueDate, setDueDate] =
    useState("");

  useEffect(() => {
    if (editingTask) {

      setTitle(editingTask.title);

      setDescription(
        editingTask.description || ""
      );

      setPriority(
        editingTask.priority || "Medium"
      );

      setStatus(
        editingTask.status || "Pending"
      );

      setDueDate(
        editingTask.dueDate
          ? editingTask.dueDate.slice(0, 10)
          : ""
      );

    } else {

      resetForm();

    }
  }, [editingTask]);

  function resetForm() {

    setTitle("");

    setDescription("");

    setPriority("Medium");

    setStatus("Pending");

    setDueDate("");

  }

  async function handleSubmit(e) {

    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    const taskData = {
      title,
      description,
      priority,
      status,
      dueDate,
    };

    try {

      if (editingTask) {

        await updateTask({
          ...editingTask,
          ...taskData,
        });

      } else {

        await addTask(taskData);

      }

      resetForm();

      onClose?.();

    } catch (error) {

      console.error(error);

    }

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
    >

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">

          {editingTask
            ? "Edit Task"
            : "Create New Task"}

        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">

          Organize your work with a clean and structured task.

        </p>

      </div>

      {/* Title */}

      <Input
        label="Task Title"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      {/* Description */}

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">

          Description

        </label>

        <textarea
          rows={5}
          placeholder="Write a short description..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            p-4
            resize-none

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
          "
        />

      </div>

      {/* Priority */}

      <div>

        <label className="mb-2 block text-sm font-medium">

          Priority

        </label>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-300
            px-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>

      {/* Status */}

      <div>

        <label className="mb-2 block text-sm font-medium">

          Status

        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-slate-300
            px-4

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      </div>

      {/* Due Date */}

      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      {/* Buttons */}

      <div className="flex justify-end gap-3">

        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          type="submit"
        >
          {editingTask
            ? "Update Task"
            : "Create Task"}
        </Button>

      </div>

    </form>
  );
}

export default TaskForm;