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
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error sebelum fetch
        const data = await getRewardHistory();

        if (Array.isArray(data)) {
          const sortedData = [...data].sort((a, b) => {
            return (
              new Date(b.pickup_date).getTime() -
              new Date(a.pickup_date).getTime()
            );
          });

          setRewards(sortedData);
          setTotalPages(Math.ceil(sortedData.length / ITEMS_PER_PAGE));
        } else {
          setRewards([]); // Handle jika data bukan array
        }
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

  const totalReward = rewards.reduce((sum, item) => sum + item.reward, 0);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = rewards.slice(startIndex, endIndex);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 min-h-[20rem] flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen pb-32">
      <h1 className="text-2xl font-bold mb-6">Riwayat Reward Saya</h1>

      {rewards.length === 0 ? (
        <div className="min-h-[20rem] flex items-center justify-center">
          <p className="text-gray-500 text-lg font-semibold">
            Kamu belum mendapatkan reward
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="bg-green-50 w-full border border-green-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-green-800">
                Total Reward
              </h2>
              <p className="text-2xl font-bold text-green-600">
                Rp {totalReward.toLocaleString("id-ID")}
              </p>
            </div>
          </div>

          <button
            className="w-full text-xl my-8 flex justify-between font-bold text-green-600 hover:text-green-800"
            onClick={() => {
              const reversed = [...rewards].reverse();
              setRewards(reversed);
            }}
          >
            <span className="text-normal mr-4">Filter</span>
            <span>
              {rewards[0] &&
              new Date(rewards[0].pickup_date) <
                new Date(rewards[rewards.length - 1].pickup_date)
                ? "↑ Terlama"
                : "↓ Terbaru"}
            </span>
          </button>

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
        </>
      )}
    </div>
  );
};

export default Page;
