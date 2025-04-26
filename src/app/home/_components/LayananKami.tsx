import { layanankami } from "@/data/layanankami";
import React from "react";
import LayananKamiCard from "./LayananKamiCard";

const LayananKami = () => {
  return (
    <div className="aboutus min-h-[20rem] pb-20 ">
      <h1 className="text-center mb-20 lg:text-3xl text-4xl font-bold">
        Layanan Kami
      </h1>
      <div className="mycontainer gap-10 grid lg:grid-cols-2">
        {layanankami.map((item) => (
          <LayananKamiCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LayananKami;
