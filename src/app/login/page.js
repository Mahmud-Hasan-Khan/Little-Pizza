"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/auth";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials against a backend.
    // Here, we'll just simulate a successful login.
    const mockUser = { name: "John Doe", email };
    login(mockUser);
    router.push("/profile");
  };

  return (
    <div className="py-20 px-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="mt-2 text-gray-600">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white w-full py-3 rounded-md font-semibold hover:bg-primary/90 transition-all text-lg"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
