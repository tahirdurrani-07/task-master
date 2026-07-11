import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      toast.error("Please enter your email.");
      return;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Invalid email address.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      toast.success("Password reset link sent.");
    }, 1000);
  }

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email address and we'll send you a password reset link."
      footerText="Remember your password?"
      footerLink="/login"
      footerLinkText="Sign In"
    >
      {sent ? (

        <div className="space-y-6">

          <div
            className="
              rounded-2xl
              border
              border-green-200
              bg-green-50
              p-5

              dark:border-green-500/20
              dark:bg-green-500/10
            "
          >

            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
              Email Sent Successfully
            </h3>

            <p className="mt-2 text-sm text-green-600 dark:text-green-300">
              We've sent a password reset link to:
            </p>

            <p className="mt-2 font-medium text-slate-900 dark:text-white">
              {email}
            </p>

          </div>

          <Link to="/login">

            <Button
              fullWidth
              size="lg"
            >
              Back to Login
            </Button>

          </Link>

        </div>

      ) : (

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);

              if (error) {
                setError("");
              }
            }}
            error={error}
          />

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            fullWidth
            size="lg"
          >
            Send Reset Link
          </Button>

          <div className="text-center">

            <Link
              to="/login"
              className="
                text-sm
                font-medium
                text-blue-600
                hover:underline

                dark:text-blue-400
              "
            >
              Back to Login
            </Link>

          </div>

        </form>

      )}

    </AuthLayout>
  );
}

export default ForgotPassword;