import { useEffect, useRef, useState } from "react";

import {
  Camera,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  MapPin,
  Save,
  Trash2,
  ShieldCheck,
  UserCircle,
} from "lucide-react";

import toast from "react-hot-toast";

import API from "../api/api";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, updateUser } = useAuth();

  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "UET Mardan",
    role: "Computer Science Student",
    location: "Pakistan",
    bio: "",
    avatar: "",
  });

  // ==========================================
  // Load Profile
  // ==========================================

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  async function fetchProfile() {
    try {
      setLoading(true);

      const response = await API.get("/users/profile");

      const profile = response.data.user || {};

      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        university: profile.university || "UET Mardan",
        role: profile.role || "Computer Science Student",
        location: profile.location || "Pakistan",
        bio:
          profile.bio ||
          "Passionate Computer Science Student interested in Full Stack Web Development, AI and Software Engineering.",
        avatar: profile.avatar || "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load profile."
      );
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // Handle Input Change
  // ==========================================

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // ==========================================
  // Upload Profile Picture
  // ==========================================

  function handleImageUpload(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        avatar: reader.result,
      }));

      toast.success("Profile photo selected.");
    };

    reader.readAsDataURL(file);
  }

  // ==========================================
  // Remove Profile Picture
  // ==========================================

  function removePhoto() {
    setFormData((prev) => ({
      ...prev,
      avatar: "",
    }));

    toast.success("Profile photo removed.");
  }

  // ==========================================
  // Save Profile
  // ==========================================

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Full Name is required.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required.");
      return;
    }

    try {
      setSaving(true);

      await updateUser(formData);

      await fetchProfile();

      toast.success("Profile updated successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  }

  // ==========================================
  // Loading Screen
  // ==========================================

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div
            className="
              mx-auto
              h-14
              w-14
              animate-spin
              rounded-full
              border-4
              border-blue-600
              border-t-transparent
            "
          />

          <h2 className="mt-6 text-2xl font-bold text-slate-800 dark:text-white">
            Loading Profile...
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Please wait while we fetch your account information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">

  {/* ==========================================
      PROFILE HEADER
  ========================================== */}

  <div
    className="
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-lg
      dark:border-slate-800
      dark:bg-slate-900
    "
  >

    {/* Cover */}

    <div
      className="
        h-40
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-cyan-500
      "
    />

    <div className="px-8 pb-8">

      <div className="flex flex-col items-center gap-8 md:flex-row">

        {/* Avatar */}

        <div className="relative -mt-20">

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />

          {formData.avatar ? (

            <img
              src={formData.avatar}
              alt="Profile"
              className="
                h-44
                w-44
                rounded-full
                border-4
                border-white
                object-cover
                shadow-2xl
              "
            />

          ) : (

            <div
              className="
                flex
                h-44
                w-44
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                text-6xl
                font-bold
                text-white
                shadow-2xl
              "
            >

              {(formData.name || "T")
                .charAt(0)
                .toUpperCase()}

            </div>

          )}

          {/* Camera */}

          <button
            type="button"
            onClick={() =>
              fileInputRef.current?.click()
            }
            className="
              absolute
              bottom-2
              right-2
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              shadow-xl
              transition-all
              hover:scale-110
              hover:bg-blue-700
            "
          >

            <Camera size={20} />

          </button>

          {/* Delete */}

          {formData.avatar && (

            <button
              type="button"
              onClick={removePhoto}
              className="
                absolute
                -right-2
                -top-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-white
                shadow-xl
                transition-all
                hover:scale-110
                hover:bg-red-600
              "
            >

              <Trash2 size={18} />

            </button>

          )}

        </div>

        {/* User Information */}

        <div className="flex-1 text-center md:text-left">

          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >

            {formData.name || "Guest User"}

          </h1>

          <p
            className="
              mt-2
              text-xl
              font-medium
              text-blue-600
              dark:text-blue-400
            "
          >

            {formData.role}

          </p>

          <p
            className="
              mt-5
              max-w-3xl
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >

            {formData.bio}

          </p>

          {/* Info Cards */}

          <div className="mt-6 flex flex-wrap gap-3">

            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-slate-100
                px-4
                py-2
                dark:bg-slate-800
              "
            >

              <Mail size={18} />

              <span>

                {formData.email}

              </span>

            </div>

            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-slate-100
                px-4
                py-2
                dark:bg-slate-800
              "
            >

              <Phone size={18} />

              <span>

                {formData.phone || "Not Added"}

              </span>

            </div>

            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-slate-100
                px-4
                py-2
                dark:bg-slate-800
              "
            >

              <GraduationCap size={18} />

              <span>

                {formData.university}

              </span>

            </div>

            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-slate-100
                px-4
                py-2
                dark:bg-slate-800
              "
            >

              <MapPin size={18} />

              <span>

                {formData.location}

              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >

              Change Photo

            </button>

            {formData.avatar && (

              <button
                type="button"
                onClick={removePhoto}
                className="
                  rounded-xl
                  bg-red-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-600
                "
              >

                Remove Photo

              </button>

            )}

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* ==========================================
      PROFILE FORM
  ========================================== */}

  <form
    onSubmit={handleSubmit}
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-lg
      dark:border-slate-800
      dark:bg-slate-900
    "
  >
    <div className="grid gap-6 md:grid-cols-2">

        {/* Full Name */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            Full Name

          </label>

          <div className="relative">

            <UserCircle
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            Email Address

          </label>

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            Phone Number

          </label>

          <div className="relative">

            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

        {/* University */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            University

          </label>

          <div className="relative">

            <GraduationCap
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

        {/* Profession */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            Profession

          </label>

          <div className="relative">

            <Briefcase
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

        {/* Location */}

        <div>

          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

            Location

          </label>

          <div className="relative">

            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-12
                pr-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />

          </div>

        </div>

      </div>
      {/* ==========================================
          About
      ========================================== */}

      <div className="mt-8">

        <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">

          About Yourself

        </label>

        <textarea
          name="bio"
          rows={6}
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write something about yourself..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            p-4
            outline-none
            transition-all
            resize-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
          "
        />

      </div>

      {/* ==========================================
          Save Button
      ========================================== */}

      <div className="mt-8 flex justify-end">

        <button
          type="submit"
          disabled={saving}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-8
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            hover:scale-105
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >

          <Save size={18} />

          {saving
            ? "Saving..."
            : "Save Changes"}

        </button>

      </div>

  </form>

  {/* ==========================================
      ACCOUNT SUMMARY
  ========================================== */}

  <div
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-lg
      dark:border-slate-800
      dark:bg-slate-900
    "
  >

    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

      Account Summary

    </h2>

    <p className="mt-2 text-slate-500 dark:text-slate-400">

      Overview of your profile information.

    </p>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Full Name

        </p>

        <h3 className="mt-2 text-lg font-semibold">

          {formData.name || "-"}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Email

        </p>

        <h3 className="mt-2 break-all text-lg font-semibold">

          {formData.email || "-"}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Phone

        </p>

        <h3 className="mt-2 text-lg font-semibold">

          {formData.phone || "Not Added"}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          University

        </p>

        <h3 className="mt-2 text-lg font-semibold">

          {formData.university}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Profession

        </p>

        <h3 className="mt-2 text-lg font-semibold">

          {formData.role}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Location

        </p>

        <h3 className="mt-2 text-lg font-semibold">

          {formData.location}

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Account Status

        </p>

        <h3 className="mt-2 font-semibold text-green-600">

          Active

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">

        <p className="text-sm text-slate-500">

          Profile Completion

        </p>

        <h3 className="mt-2 font-semibold text-blue-600">

          100%

        </h3>

      </div>

    </div>

  </div>

  {/* ==========================================
      QUICK ACTIONS
  ========================================== */}

  <div
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-lg
      dark:border-slate-800
      dark:bg-slate-900
    "
  >

    <h2 className="text-2xl font-bold">

      Quick Actions

    </h2>

    <p className="mt-2 text-slate-500 dark:text-slate-400">

      Quickly manage your profile.

    </p>

    <div className="mt-6 flex flex-wrap gap-4">

      <button
        type="button"
        onClick={() =>
          fileInputRef.current?.click()
        }
        className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
        "
      >

        Change Profile Picture

      </button>

      {formData.avatar && (

        <button
          type="button"
          onClick={removePhoto}
          className="
            rounded-xl
            bg-red-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
        >

          Remove Picture

        </button>

      )}

    </div>

  </div>
  {/* ==========================================
      SECURITY
  ========================================== */}

  <div
    className="
      rounded-3xl
      border
      border-blue-200
      bg-gradient-to-r
      from-blue-50
      to-cyan-50
      p-8
      shadow-lg
      dark:border-blue-900
      dark:from-slate-900
      dark:to-slate-800
    "
  >

    <div className="flex items-start gap-4">

      <div
        className="
          rounded-2xl
          bg-blue-600
          p-4
          text-white
        "
      >
        <ShieldCheck size={32} />
      </div>

      <div>

        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">

          Security Center

        </h2>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">

          Your account information is securely stored in MongoDB.
          Your profile picture, personal information and settings
          remain available after refreshing the page or logging in
          again.

        </p>

      </div>

    </div>

  </div>

  {/* ==========================================
      PROFILE STATISTICS
  ========================================== */}

  <div
    className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-lg
      dark:border-slate-800
      dark:bg-slate-900
    "
  >

    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

      Profile Statistics

    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* Completion */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          to-blue-700
          p-6
          text-white
        "
      >

        <p className="text-sm opacity-80">

          Profile Completion

        </p>

        <h3 className="mt-2 text-4xl font-bold">

          100%

        </h3>

      </div>

      {/* Database */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-green-500
          to-green-700
          p-6
          text-white
        "
      >

        <p className="text-sm opacity-80">

          Database

        </p>

        <h3 className="mt-2 text-3xl font-bold">

          MongoDB

        </h3>

      </div>

      {/* Account */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          to-purple-700
          p-6
          text-white
        "
      >

        <p className="text-sm opacity-80">

          Account Status

        </p>

        <h3 className="mt-2 text-3xl font-bold">

          Active

        </h3>

      </div>

      {/* Verified */}

      <div
        className="
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-red-500
          p-6
          text-white
        "
      >

        <p className="text-sm opacity-80">

          Verification

        </p>

        <h3 className="mt-2 text-3xl font-bold">

          Verified

        </h3>

      </div>

    </div>

  </div>

</div>

  );
}

export default Profile;