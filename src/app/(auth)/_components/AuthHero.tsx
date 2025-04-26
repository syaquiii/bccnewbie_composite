import Image from "next/image";
import React from "react";
import AuthHeroImg from "@/assets/img/authhero.png";

const AuthHero = () => {
  return (
    <div className="bg-light hidden lg:flex flex-col  px-20 justify-center items-center">
      <Image src={AuthHeroImg} alt="logo" width={300} height={300} />
      <p className="mt-4">
        Setor limbah. Belanja kompos. Tanam harapan. Composite, karena bumi
        butuh kita semua.
      </p>
    </div>
  );
};

export default AuthHero;
