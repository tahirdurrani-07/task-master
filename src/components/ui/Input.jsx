import { AlertCircle } from "lucide-react";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error = "",
  helperText = "",
  required = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
}) {
  return (
    <div className="w-full">

      {/* Label */}

      {label && (
        <label
          className="
            mb-2
            block
            text-sm
            font-medium
            text-slate-700

            dark:text-slate-300
          "
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}

        </label>
      )}

      {/* Input */}

      <div className="relative">

        {leftIcon && (
          <div
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400

              dark:text-slate-500
            "
          >
            {leftIcon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            h-12
            w-full
            rounded-2xl
            border
            bg-white

            text-slate-900
            placeholder:text-slate-400

            transition-all
            duration-200

            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100

            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-400

            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:placeholder:text-slate-500
            dark:focus:border-blue-500
            dark:focus:ring-blue-900/40
            dark:disabled:bg-slate-800
            dark:disabled:text-slate-500

            ${leftIcon ? "pl-12" : "pl-4"}
            ${rightIcon ? "pr-12" : "pr-4"}

            ${
              error
                ? "border-red-500 dark:border-red-500"
                : "border-slate-300"
            }

            ${className}
          `}
        />

        {rightIcon && (
          <div
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400

              dark:text-slate-500
            "
          >
            {rightIcon}
          </div>
        )}

      </div>

      {/* Helper Text */}

      {helperText && !error && (
        <p
          className="
            mt-2
            text-sm
            text-slate-500

            dark:text-slate-400
          "
        >
          {helperText}
        </p>
      )}

      {/* Error */}

      {error && (
        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-sm
            text-red-600

            dark:text-red-400
          "
        >
          <AlertCircle size={16} />

          <span>{error}</span>

        </div>
      )}

    </div>
  );
}

export default Input;