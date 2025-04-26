"use client";
import React, { useEffect, useState } from "react";
import { getRewardHistory } from "@/api/services/deposit";
import { RewardItem } from "@/type/TAPI";
import RewardItemComponent from "../_components/RewardItem";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 6;

const Page = () => {
  const [rewards, setRewards] = useState<RewardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setLoading(true);
        const data = await getRewardHistory();
        setRewards(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (err) {
        setError("Gagal memuat riwayat reward");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRewards();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Hitung total reward
  const totalReward = rewards.reduce((sum, item) => sum + item.reward, 0);

  // Hitung item yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = rewards.slice(startIndex, endIndex);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 min-h-[20rem] flex items-center justify-center">
        {error}
      </div>
    );

  if (!rewards || rewards.length === 0)
    return (
      <div className="min-h-[20rem] flex items-center justify-center">
        <p className="text-gray-500">Belum ada riwayat reward</p>
      </div>
    );

  return (
    <div className="min-h-screen pb-32">
      <h1 className="text-2xl font-bold mb-6">Riwayat Reward Saya</h1>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-green-800">
          Total Reward Anda
        </h2>
        <p className="text-2xl font-bold text-green-600">
          Rp {totalReward.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="space-y-4">
        {currentItems.map((item, index) => (
          <RewardItemComponent key={index} item={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
