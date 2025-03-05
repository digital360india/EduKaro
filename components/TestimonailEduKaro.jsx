"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Parul Rawat",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
    description:
      "Edu Karo helped us find the perfect boarding school for our son. The platform made it so easy to compare schools based on our needs, and we couldn't be happier with our decision. Highly recommend it!",
  },
  {
    name: "Priyangini",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    description:
      "Navigating through the many boarding schools was overwhelming, but Edu Karo made it a breeze. The information provided was detailed and up-to-date, which gave us peace of mind when making our choice.",
  },
  {
    name: "Priya Danu",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    description:
      "Thanks to Edu Karo, I found a school that matches both my academic and personal interests. The platform's user-friendly interface made it easy for me to explore different options and find my perfect match!",
  },
  {
    name: "Shivam Panwar",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    description:
      "I was unsure about which boarding school to choose, but Edu Karo made the decision much clearer. The platform's detailed insights helped me feel confident in my choice, and I'm excited to start this new chapter!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/leftbutton.svg"
        alt="left arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/rightbutton.svg"
        alt="right arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const TestimonailEduKaro = () => {
  return (
    <div className="bg-gradient-custom p-1">
      {" "}
      <div className="px-8 pt-8  md:px-14 md:pt-14">
        <h2 className="text-[#FFFFFF] text-[14px] md:text-[20px]">
          Get Inspired by stories
        </h2>
        <h2 className="text-[#FFFFFF] text-[24px] md:text-[46px]">
          Experience of Clients with Us...
        </h2>
      </div>
      <div className="md:pt-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-[400px] md:h-[440px] flex justify-center items-center"
            >
              <div
                className="bg-white w-[370px] h-[300px] md:h-[360px] mx-6 p-8 md:mx-14 rounded-lg relative "
                style={{
                  boxShadow: "0px 2px 10px 0px #00000040",
                }}
              >
                <div className="absolute -top-14 -left-8">
                  <Image
                    src="/Quote.svg"
                    width={1000}
                    height={1000}
                    alt="testimonial quote"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <p className="text-[12px] md:text-[1rem] text-[#323232] text-justify mt-[25px] md:mt-[35px]">
                  {testimonial.description}
                </p>
                <div className="flex items-center justify-between pt-6">
                  <p className="text-[#000000] text-[20px] font-semibold">
                    {testimonial.name}
                  </p>
                  <Image
                    src={testimonial.image}
                    width={1000}
                    height={1000}
                    alt={testimonial.name}
                    className="md:w-[70px] md:h-[70px] w-[60px] h-[60px] rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonailEduKaro;
