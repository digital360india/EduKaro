"use client";

import React from "react";
import Image from "next/image";

const HeroEduKaro = () => {
  return (
    <div className="md:relative mt-14 w-full h-full">
      <Image
        src="/mainhero.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-full object-cover hidden md:block"
      />

      <div className="md:hidden w-full h-full">
        <Image
          src="/edukaroframe23.png"
          alt="School choice"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroEduKaro;
