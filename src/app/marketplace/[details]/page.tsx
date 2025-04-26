"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getMarketDetail } from "@/api/services/markets";
import { MarketDetail } from "@/type/TAPI";
import { Button } from "@/components/ui/Button";
import { FaBackward } from "react-icons/fa";
import Image from "next/image";

export default function MarketDetailPage() {
  const pathname = usePathname();
  const [market, setMarket] = useState<MarketDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = pathname.split("/").pop();

    if (id) {
      getMarketDetail(id)
        .then((data) => {
          if (data) {
            setMarket(data);
          } else {
            setError("Market not found");
          }
        })
        .catch((err) => {
          console.error("Error fetching market:", err.message);
          setError("Error loading market detail");
        });
    }
  }, [pathname]);

  if (error) return <div>{error}</div>;
  if (!market) return <div>Loading...</div>;

  return (
    <div className="min-h-screen py-42 mycontainer">
      <Button className="flex gap-2 items-center mb-8">
        <FaBackward /> Kembali
      </Button>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <Image
            alt={market.product_name}
            src={market.photo_url}
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">{market.product_name}</h1>
          <h2 className="text-xl text-gray-700">{market.store_name}</h2>
          <div className="text-3xl font-extrabold text-green-600">
            Rp {market.product_price.toLocaleString("id-ID")}
          </div>

          <p className="text-gray-600">{market.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col">
              <span className="font-semibold">Tipe Produk:</span>
              <span>{market.product_type}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Berat:</span>
              <span>
                {market.product_weight} kg ({market.product_weight_filter})
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Penggunaan:</span>
              <span>{market.product_usage}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Komposisi:</span>
              <span>{market.composition}</span>
            </div>
          </div>

          <Button className="mt-10 w-full py-4 text-lg">Beli Sekarang</Button>
        </div>
      </div>
    </div>
  );
}
