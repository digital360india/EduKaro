import Image from "next/image";
import React from "react";

const WhyChooseUsSchool123 = () => {
  return (
    <>
      <div className="bg-[#FFFFF] hidden md:block ">
        <h1 className="text-center text-[#323232] text-[2.25rem] mt-10">
          Why Choose Us?
        </h1>

        <div className="flex justify-center items-center">
          <div className="space-y-12 w-[200px] h-[410px]">
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
                Personalized Education Solutions
              </h1>
              <p className="text-[#898989] text-[12px]">
                At Edu Karo, we believe every child is unique. Our tailored
                recommendations ensure you find a school that aligns perfectly
                with your child&apos;s strengths and aspirations.
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
                Dedicated Educational Experts
              </h1>
              <p className="text-[#898989] text-[12px]">
                Edu Karo&apos;s experienced advisors provide step-by-step guidance,
                helping you navigate the school selection process with
                confidence and clarity.
              </p>
            </div>
            <div className="w-[300px] h-[115px]">
              <h1 className="text-[#323232] text-[1rem]">
                Strategic Skill Assessments
              </h1>
              <p className="text-[#898989] text-[12px]">
                Our customized assessments and mock tests are designed to
                identify your child&apos;s potential, enabling a precise school match
                that fosters growth and success.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/leftframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="">
            <Image
              src="/whychoosus1.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[440px] h-[550px]"
            />
          </div>

          <div>
            <Image
              src="/rightframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="space-y-14 w-[200px] h-[410px]">
            <div className="w-[280px] h-[138px] pt-1">
              <h1 className="text-[#323232] text-[1rem]">
                Thorough School Evaluations
              </h1>
              <p className="text-[#898989] text-[12px]">
                Edu Karo offers comprehensive insights into schools, including
                their academic standards, extracurricular activities, and
                facilities, empowering you to make informed decisions with ease.
              </p>
            </div>
            <div className="w-[280px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">
                Honest and Transparent Approach
              </h1>
              <p className="text-[#898989] text-[12px]">
                We are committed to integrity and trust. By working directly
                with parents rather than schools, Edu Karo ensures that our
                guidance is unbiased and centered on what&apos;s best for your child.
              </p>
            </div>
            <div className="w-[300px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">
                Complete Admission Support
              </h1>
              <p className="text-[#898989] text-[12px]">
                From your initial consultation to the final admission process,
                Edu Karo provides all-encompassing support, making your journey
                stress-free and highly rewarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSchool123;
