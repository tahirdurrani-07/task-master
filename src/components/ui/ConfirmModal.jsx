import { AlertTriangle } from "lucide-react";

import Modal from "./Modal";
import Button from "./Button";

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Task",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="text-center">

        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">

          <AlertTriangle
            size={38}
            className="text-red-600 dark:text-red-400"
          />

        </div>

        {/* Title */}

        <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">

          {title}

        </h2>

        {/* Message */}

        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">

          {message}

        </p>

        {/* Buttons */}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">

          <Button
            variant="secondary"
            onClick={onClose}
          >
            {cancelText}
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>

        </div>

      </div>
    </Modal>
  );
}

export default ConfirmModal;