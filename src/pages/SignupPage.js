import React from "react";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <form className="flex flex-col space-y-4 w-64">
        <input type="text" placeholder="Name" className="border px-4 py-2 rounded-xl" />
        <input type="email" placeholder="Email" className="border px-4 py-2 rounded-xl" />
        <input type="password" placeholder="Password" className="border px-4 py-2 rounded-xl" />
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">Sign Up</button>
      </form>
    </div>
  );
}
