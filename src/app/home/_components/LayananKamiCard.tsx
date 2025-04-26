import { Tlayanankami } from "@/type/Tlayanankami";
import React, { FC } from "react";

const LayananKamiCard: FC<Tlayanankami> = (props) => {
  return (
    <div className="bg-normal text-light gap-2 w-full h-80 rounded-2xl px-8 shadow-2xl flex flex-col items-center justify-center">
      <span className="bg-light  w-20 h-20 rounded-full text-normal flex items-center justify-center ">
        <props.icon size={40} />
      </span>
      <h3 className="lg:text-xl font-semibold">{props.title}</h3>
      <p className="text-center font-light text-xs text-sm">{props.desc}</p>
    </div>
  );
};

export default LayananKamiCard;
