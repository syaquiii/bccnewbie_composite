"use client";

import React, { useEffect, useState } from "react";
import { UserProfileResponse } from "@/type/TAPI";
import { getUserProfile } from "@/api/services/user";
import { useRouter } from "next/navigation"; // Tambahkan ini
import { Button } from "@/components/ui/Button"; // Pastikan ini sudah ada

const Profile = () => {
  const [user, setUser] = useState<UserProfileResponse | null>(null);
  const router = useRouter(); // Tambahkan ini untuk navigasi

  useEffect(() => {
    getUserProfile()
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Failed to fetch user profile:", error.message);
      });
  }, []);

  const handleUpdateProfile = () => {
    router.push("/profile/update"); // Arahkan ke halaman update profile
  };

  return (
    <div className="flex flex-col gap-6 text-4xl lg:text-5xl items-center lg:items-start">
      <div className="flex items-center gap-6">
        <div className="w-32 h-32 rounded-full bg-white"></div>
        <div className="flex flex-col gap-2">
          <span>Halo, {user ? user.first_name : "...."}!</span>
          <Button onClick={handleUpdateProfile} className="text-base">
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
