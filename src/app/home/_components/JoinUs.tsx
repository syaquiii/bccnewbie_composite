import { Button } from "@/components/ui/Button";
import { ArrowRightToLine, PhoneCall } from "lucide-react";
import React from "react";

const JoinUs = () => {
  return (
    <div className="min-h-[50rem] joinus">
      <div className="mycontainer py-20 lg:py-40 text-white font-bold lg:text-6xl text-4xl">
        <div className="lg:w-2/4">
          <h4>
            Transform <span className="text-[#FFDD59]"> Waste</span>,
          </h4>
          <h4 className="text-right lg:-mr-20">
            <span className="text-[#FFDD59]"> Grow </span>Worth.
          </h4>
        </div>
        <div className="bg-light w-full font-semibold gap-2 text-normal min-h-52 mt-20 rounded-4xl shadow-2xl flex-col flex items-center justify-center">
          <span className="lg:text-4xl text-2xl">Bergabung Sekarang!</span>
          <span className="text-lg font-light">
            Transform Waste, Grow Worth.
          </span>
          <div className="flex lg:flex-row flex-col text-sm font-semibold gap-4">
            <Button
              size={"small"}
              className="flex justify-center items-center gap-1"
              variant={"outline"}
            >
              <ArrowRightToLine />
              Masuk
            </Button>
            <Button
              className="flex items-center gap-2"
              size={"small"}
              value={"normal"}
            >
              <PhoneCall size={20} />
              Bergabung
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
