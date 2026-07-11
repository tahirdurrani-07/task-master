import PageHeader from "../components/ui/PageHeader";
import TaskList from "../components/tasks/TaskList";
import AddTaskButton from "../components/tasks/AddTaskButton";

function Tasks() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">

      {/* Page Header */}

      <PageHeader
        title="My Tasks"
        subtitle="Organize, prioritize, and complete your work with ease."
      />

      {/* Task List */}

      <TaskList />

      {/* Floating Add Button */}

      <AddTaskButton />

    </div>
  );
}

export default Tasks;