"use client";

import { updateProfile, getUserProfile } from "@/api/services/user";
import { useEffect, useState } from "react";
import { UserProfileResponse } from "@/type/TAPI";

export default function UpdateProfileForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    getUserProfile()
      .then((data: UserProfileResponse) => {
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
      })
      .catch((error) => {
        console.error("Failed to fetch user profile:", error.message);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
      };
      const response = await updateProfile(payload);
      setMessage(response.message);
    } catch (error: any) {
      setMessage(error.message || "Gagal update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full mycontainer py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white  rounded-lg  w-full  space-y-6"
      >
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Nama Lengkap
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full bg-gray-100 focus:outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 p-3 rounded w-full bg-gray-100 focus:outline-none"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="border border-gray-300 p-3 rounded w-full bg-gray-100 text-gray-500"
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            className="border border-gray-400 text-gray-600 py-2 px-6 rounded hover:bg-gray-100 transition"
            onClick={() => window.history.back()}
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded transition disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>

        {message && (
          <div className="text-center mt-4 text-green-600 font-medium">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
