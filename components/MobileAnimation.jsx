import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Personalized Education Solutions",
      description:
        "At Edu Karo, we believe every child is unique. Our tailored recommendations ensure you find a school that aligns perfectly with your child's strengths and aspirations.",
    },
    {
      title: "Dedicated Educational Experts",
      description:
        "Edu Karo's experienced advisors provide step-by-step guidance, helping you navigate the school selection process with confidence and clarity.",
    },
    {
      title: "Strategic Skill Assessments",
      description:
        "Our customized assessments and mock tests are designed to identify your child's potential, enabling a precise school match that fosters growth and success.",
    },
    {
      title: "Thorough School Evaluations",
      description:
        "Edu Karo offers comprehensive insights into schools, including their academic standards, extracurricular activities, and facilities, empowering you to make informed decisions with ease.",
    },
    {
      title: "Honest and Transparent Approach",
      description:
        "We are committed to integrity and trust. By working directly with parents rather than schools, Edu Karo ensures that our guidance is unbiased and centered on what's best for your child.",
    },
    {
      title: "Complete Admission Support",
      description:
        "From your initial consultation to the final admission process, Edu Karo provides all-encompassing support, making your journey stress-free and highly rewarding.",
    },
  ];

  return (
    <div className=" bg-white m-6">
      <h2 className="text-2xl text-[#323232] font-bold pb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <Image
                src="/pointer.svg"
                width={1000}
                height={1000}
                className="w-[20px] h-[20px]"
                alt="Pointer"
              />

              {/* {index < reasons.length - 1 && ( */}
              <div className="w-[2px] h-24 bg-background-dark mt-2"></div>
              {/* )} */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#323232] text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-[#898989] text-[12px]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAnimation;
