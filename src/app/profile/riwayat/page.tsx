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
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const data = await getDepositHistory();
        setHistory(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (err) {
        setError("Gagal memuat riwayat deposit");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  if (!history || history.length === 0)
    return (
      <div className="min-h-[20rem] flex items-center justify-center">
        <p className="text-gray-500">Belum ada riwayat setor limbah</p>
      </div>
    );

  // Hitung item yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = history.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4 min-h-screen pb-32">
      <h1 className="text-2xl font-bold mb-6">Riwayat Setoran Saya</h1>

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
    </div>
  );
};

export default Page;
