import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../api/api";

import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export function TaskProvider({
  children,
}) {
  const { user } = useAuth();

  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Newest");

  const [
    editingTask,
    setEditingTask,
  ] = useState(null);

  // ==========================
  // Fetch Tasks
  // ==========================

  async function fetchTasks() {

    if (!user) {

      setTasks([]);

      return;

    }

    try {

      setLoading(true);

      const response =
        await API.get("/tasks");

      setTasks(
        response.data.tasks || []
      );

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load tasks."
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    fetchTasks();

  }, [user]);
  // ==========================
  // Add Task
  // ==========================

  async function addTask(taskData) {

    if (!user) {

      toast.error("Please login first.");

      return;

    }

    try {

      setLoading(true);

      const response =
        await API.post(
          "/tasks",
          {
            ...taskData,

            status:
              taskData.status ||
              "Pending",

            priority:
              taskData.priority ||
              "Medium",

            completed:
              taskData.status ===
              "Completed",
          }
        );

      const newTask =
        response.data.task;

      setTasks((prev) => [
        newTask,
        ...prev,
      ]);

      toast.success(
        response.data.message ||
          "Task created successfully."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create task."
      );

    } finally {

      setLoading(false);

    }

  }

  // ==========================
  // Refresh Tasks
  // ==========================

  async function refreshTasks() {

    await fetchTasks();

  }
  // ==========================
  // Update Task
  // ==========================

  async function updateTask(updatedTask) {

    try {

      setLoading(true);

      const response =
        await API.put(
          `/tasks/${updatedTask._id}`,
          {
            ...updatedTask,

            completed:
              updatedTask.status ===
              "Completed",
          }
        );

      const task =
        response.data.task;

      setTasks((prev) =>
        prev.map((item) =>
          item._id === task._id
            ? task
            : item
        )
      );

      setEditingTask(null);

      toast.success(
        response.data.message ||
          "Task updated successfully."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update task."
      );

    } finally {

      setLoading(false);

    }

  }

  // ==========================
  // Delete Task
  // ==========================

  async function deleteTask(id) {

    try {

      setLoading(true);

      await API.delete(
        `/tasks/${id}`
      );

      setTasks((prev) =>
        prev.filter(
          (task) =>
            task._id !== id
        )
      );

      toast.success(
        "Task deleted successfully."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete task."
      );

    } finally {

      setLoading(false);

    }

  }

  // ==========================
  // Toggle Task
  // ==========================

  async function toggleTask(id) {

    const task =
      tasks.find(
        (item) =>
          item._id === id
      );

    if (!task) return;

    const completed =
      !task.completed;

    const status =
      completed
        ? "Completed"
        : "Pending";

    await updateTask({
      ...task,
      completed,
      status,
    });

  }
  // ==========================
  // Dashboard Statistics
  // ==========================

  const totalTasks =
    tasks.length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.completed ||
        task.status === "Completed"
    ).length;

  const pendingTasks =
    tasks.filter(
      (task) =>
        !task.completed &&
        task.status !== "Completed"
    ).length;

  const highPriorityTasks =
    tasks.filter(
      (task) =>
        task.priority === "High"
    ).length;

  const productivity =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks /
            totalTasks) *
            100
        );

  return (
    <TaskContext.Provider
      value={{

        // ==========================
        // Tasks
        // ==========================

        tasks,
        loading,

        fetchTasks,
        refreshTasks,

        addTask,
        updateTask,
        deleteTask,
        toggleTask,

        // ==========================
        // Dashboard Stats
        // ==========================

        totalTasks,
        completedTasks,
        pendingTasks,
        highPriorityTasks,
        productivity,

        // ==========================
        // Search
        // ==========================

        search,
        setSearch,

        // ==========================
        // Filter
        // ==========================

        filter,
        setFilter,

        // ==========================
        // Sorting
        // ==========================

        sortBy,
        setSortBy,

        // ==========================
        // Editing
        // ==========================

        editingTask,
        setEditingTask,

      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
export function useTasks() {

  const context =
    useContext(TaskContext);

  if (!context) {

    throw new Error(
      "useTasks must be used within a TaskProvider"
    );

  }

  return context;

}