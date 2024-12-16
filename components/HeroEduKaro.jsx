"use client";

import React from "react";
import Image from "next/image";

const HeroEduKaro = () => {
  return (
    <div className="md:relative mt-16">
      <Image
        src="/edukaroframe1.svg"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[100vh] object-cover hidden md:block"
      />

      <div className=" pt-20 md:pt-0 lg:pt-0 absolute top-[55%] md:top-1/2 right-6 transform -translate-y-1/2 text-[#753A8A] px-4 md:px-8 lg:right-20 lg:top-1/2  lg:transform lg:-translate-y-1/2">
        <p className="text-[20px] pl-8 md:pl-0 lg:pl-0 sm:text-[30px] md:text-[35px] lg:text-[40px] font-light Merriweather text-center justify-center lg:text-right">
          Find the <span className="font-bold">Perfect School</span> for Every Child
        </p>
        <p className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-2 text-center lg:text-left Merriweather">
        eduKaro
        </p>
      </div>
      <div className="md:hidden">
      <Image
        src="/edukaroframe2.svg"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[82vh] object-cover  "
      />

      </div>
    </div>
  );
};

export default HeroEduKaro;
