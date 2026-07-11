import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import PasswordInput from "../components/auth/PasswordInput";
import PasswordStrength from "../components/auth/PasswordStrength";

const API_URL = "http://localhost:5000/api";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/auth/register`,
        {
          name: fullName,
          email,
          password,
        }
      );

      toast.success(response.data.message);

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your Task Master account."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Sign In"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);

            if (errors.fullName) {
              setErrors((prev) => ({
                ...prev,
                fullName: "",
              }));
            }
          }}
          error={errors.fullName}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);

            if (errors.email) {
              setErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }
          }}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);

            if (errors.password) {
              setErrors((prev) => ({
                ...prev,
                password: "",
              }));
            }
          }}
        />

        {errors.password && (
          <p className="text-sm text-red-600">
            {errors.password}
          </p>
        )}

        <PasswordStrength password={password} />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);

            if (errors.confirmPassword) {
              setErrors((prev) => ({
                ...prev,
                confirmPassword: "",
              }));
            }
          }}
        />

        {errors.confirmPassword && (
          <p className="text-sm text-red-600">
            {errors.confirmPassword}
          </p>
        )}

        <Button
          type="submit"
          loading={loading}
          disabled={loading}
          fullWidth
          size="lg"
        >
          Create Account
        </Button>
      </form>
    </AuthLayout>
  );
}

export default Register;