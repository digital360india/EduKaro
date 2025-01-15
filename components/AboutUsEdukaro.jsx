"use client";
import React from "react";
import MascotAnimation from "./MascotAnimation";
import Image from "next/image";

const AboutUsEdukaro = () => {
  return (
    <>
     

      <div className="bg-background-dark">
        <h1  
          className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20"
          style={{ fontFamily: "League Gothic" }}
        >
          About Us
        </h1>

       
        <div className="flex justify-center items-center mb-20">
          <div className="bg-white rounded-full p-4">
            <Image
              src="/edukarologo1.png"
              alt="about"
              width={1000}
              height={1000}
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] "
            />
          </div>
        </div>
        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left hidden md:block">
                Who We Are
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
                Edu Karo is an online platform that helps families connect with
                the best boarding schools in India. We provide all the
                information you need to make finding the right school easy and
                stress-free.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Who We Are
              </p>
              <img
                src="/edukarologo1.png"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./ourpassion.png"
                className="w-[120px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold md:hidden">
                Why We Care About Education
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Why We Care About Education
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                At Edu Karo, we believe in the power of quality education to
                transform lives. Our team works hard to showcase the best
                boarding schools across India, giving families plenty of options
                to suit their needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center pb-4 md:text-left hidden md:block">
                Our Honest Approach
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We value honesty and transparency. Edu Karo provides up-to-date
                and accurate details about each boarding school, ensuring
                parents and students get a clear picture to make informed
                decisions.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Our Honest Approach
              </p>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                What We Aim to Do
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                What We Aim to Do
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Our goal is to make it simple for families to find the perfect
                boarding school. We want to be India&apos;s go-to resource for
                boarding school education, saving time and effort for parents
                and students while helping schools reach a wider audience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left pb-4 hidden md:block">
                Bringing Schools and Families Together
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Edu Karo connects families with the top boarding schools in
                India. Parents and students can explore a curated list of
                schools that meet high standards, while schools get the
                opportunity to showcase their unique features.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Bringing Schools and Families Together
              </p>
              <img
                src="/joinus.png"
                className="w-[120px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Join us logo"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                How We Support You
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                How We Support You
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We also provide expert consultation to help families choose the
                right school. Our team is always ready to answer your questions
                and guide you every step of the way, ensuring you make the best
                choice for your child&apos;s future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsEdukaro;
