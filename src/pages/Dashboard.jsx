import { useState } from "react";

import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import DashboardGrid from "../components/dashboard/DashboardGrid";
import AddTaskModal from "../components/tasks/AddTaskModal";

import { useTasks } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const [open, setOpen] = useState(false);

  const { setEditingTask } = useTasks();
  const { user } = useAuth();

  function handleAddTask() {
    setEditingTask(null);
    setOpen(true);
  }

  function handleEditTask() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setEditingTask(null);
  }

  return (
    <>
      <div className="space-y-8">

        <WelcomeBanner
          userName={user?.name || "User"}
          onAddTask={handleAddTask}
        />

        <DashboardGrid
          onEditTask={handleEditTask}
        />

      </div>

      <AddTaskModal
        isOpen={open}
        onClose={closeModal}
      />
    </>
  );
}

export default Dashboard;