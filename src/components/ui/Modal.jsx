import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-md
        p-4
        animate-[fadeIn_.25s_ease]
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          transition-all
          duration-300

          dark:border-slate-800
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
            px-6
            py-5

            dark:border-slate-800
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-slate-900

              dark:text-white
            "
          >
            Task Master
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-slate-500
              transition-all
              duration-200

              hover:bg-slate-100
              hover:text-slate-900

              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            max-h-[80vh]
            overflow-y-auto
            px-8
            py-6

            dark:text-slate-200
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;