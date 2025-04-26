"use client";
import React, { useEffect, useState } from "react";
import { MarketProduct } from "@/type/TAPI";
import Pagination from "@/components/Pagination";
import { getMarketProducts } from "@/api/services/markets";
import MarketCard from "./MarketsCard";
import Link from "next/link";

const ITEMS_PER_PAGE = 6;

const Markets = () => {
  const [products, setProducts] = useState<MarketProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getMarketProducts();
        const data = response.data || [];

        setProducts(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (err) {
        setError("Gagal memuat produk pasar");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, endIndex);

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

  if (!products || products.length === 0)
    return (
      <div className="min-h-[20rem] flex items-center justify-center">
        <p className="text-gray-500">Belum ada produk tersedia</p>
      </div>
    );

  return (
    <div className="container mx-auto p-4 min-h-screen pb-32">
      <h1 className="text-2xl font-bold my-6">Pasar Produk Kompos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentItems.map((product) => (
          <Link
            key={product.product_id}
            href={`/marketplace/${product.product_id}`}
          >
            <MarketCard product={product} />
          </Link>
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

export default Markets;
