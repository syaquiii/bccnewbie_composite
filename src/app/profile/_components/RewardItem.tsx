"use client";
import React from "react";
import { RewardItem as RewardItemType } from "@/type/TAPI";
import { formatDateTime } from "@/utils/dateFormatter";

interface RewardItemProps {
  item: RewardItemType;
}

const RewardItem = ({ item }: RewardItemProps) => {
  const { date, time } = formatDateTime(item.pickup_date);

  return (
    <div className="lg:flex items-center w-full">
      <div className="lg:w-1/5 flex lg:flex-col text-normal text-xs lg:text-lg font-bold mb-2 lg:font-semibold">
        <span>{date}</span>
        <span>{time}</span>
      </div>

      <div className="lg:w-5/5 w-full flex items-center bg-light p-4 rounded-xl min-h-[5rem]">
        <ul>
          <li>
            Nilai Reward :
            <span
              className={item.reward > 0 ? "text-green-600 font-bold ms-2" : ""}
            >
              Rp {item.reward.toLocaleString("id-ID")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RewardItem;
