// app/login/page.tsx
"use client"; // We use client for form interactivity

import { useFormStatus } from "react-dom";
import { authenticate } from "../lib/actions"; // We will create this next
import { useActionState } from "react";

export default function Page() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="flex flex-col gap-4 p-4 max-w-sm mx-auto"
    >
      <h1 className="text-2xl font-bold">Please Log In</h1>

      <input name="email" placeholder="Email" className="border p-2" required />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2"
        required
      />

      <LoginButton />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
