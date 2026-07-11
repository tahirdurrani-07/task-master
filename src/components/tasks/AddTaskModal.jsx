import Modal from "../ui/Modal";
import TaskForm from "./TaskForm";

function AddTaskModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <TaskForm onClose={onClose} />
    </Modal>
  );
}

export default AddTaskModal;