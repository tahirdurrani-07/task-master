function PasswordStrength({ password = "" }) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const levels = [
    {
      label: "Very Weak",
      color: "bg-red-500",
      width: "20%",
    },
    {
      label: "Weak",
      color: "bg-orange-500",
      width: "40%",
    },
    {
      label: "Medium",
      color: "bg-yellow-500",
      width: "60%",
    },
    {
      label: "Strong",
      color: "bg-blue-500",
      width: "80%",
    },
    {
      label: "Very Strong",
      color: "bg-green-500",
      width: "100%",
    },
  ];

  const current =
    password.length === 0
      ? null
      : levels[Math.max(0, strength - 1)];

  return (
    <div className="mt-2">

      {current && (

        <>

          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

            <div
              className={`h-full transition-all duration-300 ${current.color}`}
              style={{ width: current.width }}
            ></div>

          </div>

          <p className="mt-2 text-sm text-slate-600">

            Password Strength:

            <span className="font-semibold ml-1">

              {current.label}

            </span>

          </p>

        </>

      )}

    </div>
  );
}

export default PasswordStrength;