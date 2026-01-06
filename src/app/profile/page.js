"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/auth";

export default function ProfilePage() {
  const { user, isLoggedIn, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  // Render a loading state or null while the redirect is happening
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="py-20 px-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">My Profile</h2>
            <p className="mt-2 text-gray-600">
              Here are your account details.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <p className="text-gray-800 p-3 bg-gray-100 rounded-md">
                {user?.name}
              </p>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <p className="text-gray-800 p-3 bg-gray-100 rounded-md">
                {user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-primary text-white w-full py-3 mt-8 rounded-md font-semibold hover:bg-primary/90 transition-all text-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
