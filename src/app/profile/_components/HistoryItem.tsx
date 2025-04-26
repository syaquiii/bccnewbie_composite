"use client";
import React from "react";
import { DepositHistoryItem } from "@/type/TAPI";
import { formatDateTime } from "@/utils/dateFormatter";
import { Button } from "@/components/ui/Button";

interface HistoryItemProps {
  item: DepositHistoryItem;
}

const HistoryItem = ({ item }: HistoryItemProps) => {
  const { date, time } = formatDateTime(item.pickup_date);
  return (
    <div className="lg:flex items-center">
      <div className="lg:w-1/5 flex lg:flex-col text-normal text-xs  lg:text-lg font-bold mb-2 lg:font-semibold">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="flex lg:w-4/5 text-sm gap-4 items-center ">
        <div className="lg:w-5/5 flex items-center bg-light p-4 rounded-xl min-h-[5rem]">
          <ul>
            <li>Jenis Limbah : {item.waste_type}</li>
            <li>Berat Limbah : {item.waste_weight}</li>
          </ul>
        </div>
        <div className="lg:w-1/5">
          <Button className="w-full font-bold" size="small" variant="outline">
            {item.status}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
