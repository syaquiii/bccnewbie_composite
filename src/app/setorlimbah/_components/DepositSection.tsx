"use client";
import Image from "next/image";
import Maskot from "@/assets/img/maskotlimbah.png";
import { DepositForm } from "./DepositForm";

interface DepositSectionProps {
  formData: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const DepositSection = ({
  formData,
  onChange,
  onSubmit,
}: DepositSectionProps) => (
  <div className="min-h-[40rem] mycontainer my-32 mb-44">
    <div className="bg-light w-full min-h-[30rem] p-8 flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-20 rounded-3xl shadow-lg">
      <div>
        <Image className="lg:w-[15rem]" src={Maskot} alt="maskot" />
      </div>
      <div className="w-full">
        <span className="text-lg font-semibold">Ayo setor limbah!</span>
        <p className="my-4 text-xs lg:text-lg">
          Jangan biarkan sisa-sisa organikmu berakhir sia-sia. Yuk, setor limbah
          organik ke Composite dan jadi bagian dari perubahan yang nyata! Setiap
          kulit buah, sisa sayur, dan daun kering yang kamu kumpulkan akan kami
          olah menjadi pupuk kompos yang menghidupkan kembali tanah.
        </p>
        <DepositForm
          formData={formData}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  </div>
);
