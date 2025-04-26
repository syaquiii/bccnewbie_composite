"use client";

import React, { useEffect, useState } from "react";
import { getDepositHistory } from "@/api/services/deposit";
import { DepositHistoryItem } from "@/type/TAPI";
import HistoryItem from "../_components/HistoryItem";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 6;

const Page = () => {
  const [history, setHistory] = useState<DepositHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error sebelum fetch
        const data = await getDepositHistory();

        if (Array.isArray(data)) {
          const sortedData = [...data].sort((a, b) => {
            return (
              new Date(b.pickup_date).getTime() -
              new Date(a.pickup_date).getTime()
            );
          });

          setHistory(sortedData);
          setTotalPages(Math.ceil(sortedData.length / ITEMS_PER_PAGE));
        } else {
          setHistory([]);
        }
      } catch (err) {
        console.error("Gagal fetch deposit history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = history.slice(startIndex, endIndex);

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
      <h1 className="text-2xl font-bold mb-6">Riwayat Setoran Saya</h1>

      {history.length === 0 ? (
        <div className="min-h-[20rem] flex items-center justify-center">
          <p className="text-gray-500 text-lg font-semibold">
            Kamu belum melakukan Transaksi ApaPun
          </p>
        </div>
      ) : (
        <>
          <button
            className="w-full text-xl my-8 flex justify-between font-bold text-green-600 hover:text-green-800"
            onClick={() => {
              const reversed = [...history].reverse();
              setHistory(reversed);
            }}
          >
            <span className="text-normal mr-4">Filter</span>
            <span>
              {history[0] &&
              new Date(history[0].pickup_date) <
                new Date(history[history.length - 1].pickup_date)
                ? "↑ Terlama"
                : "↓ Terbaru"}
            </span>
          </button>

          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <HistoryItem key={index} item={item} />
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
