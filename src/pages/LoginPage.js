import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>
      <form className="flex flex-col space-y-4 w-64">
        <input type="email" placeholder="Email" className="border px-4 py-2 rounded-xl" />
        <input type="password" placeholder="Password" className="border px-4 py-2 rounded-xl" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Login</button>
      </form>
    </div>
  );
}
