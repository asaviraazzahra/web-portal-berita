import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
    </div>
  );
}
