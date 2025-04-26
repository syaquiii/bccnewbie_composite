import React from "react";
import Image from "next/image";
import { MarketProduct } from "@/type/TAPI";

const MarketCard = ({ product }: { product: MarketProduct }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={product.photo_url}
          alt={product.product_name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.product_name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.product_type}</p>
        <p className="text-gray-700 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">
            Rp {product.product_price.toLocaleString("id-ID")}
          </span>
          <span className="text-sm text-gray-500">
            {product.product_weight} kg
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
