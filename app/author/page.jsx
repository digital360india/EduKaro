import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />

              <div className=" text-[16px] mt-6">
                <p className=" text-[20px] font-bold">Know More</p>

                <a target="_blank" href="https://www.negivaibhav.com/">
                  <p className="text-blue-500 underline">negivaibhav.com</p>
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem] mt-14 md:mt-0 lg:mt-0">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
                Hi! I&apos;m Vaibhav Negi, an educational content specialist with
                over three years of experience in creating student-centric
                resources. My passion lies in making education accessible,
                engaging, and actionable for students and families across India.
              </p>
              <p>
                At Edu Karo, I specialize in crafting content that demystifies
                the complexities of the school search and admission process.
                From providing detailed school profiles to curating practical
                advice, my aim is to empower families to make informed decisions
                about their educational journeys.
              </p>
              <p>
                With a background in digital storytelling, I bring a creative
                and relatable approach to educational content. My work
                emphasizes clarity, trust, and a humanized voice that resonates
                with readers, ensuring Edu Karo remains a dependable resource
                for navigating the academic landscape.
              </p>
              <p>
                Beyond my professional journey, I&apos;ve explored various niches,
                including lifestyle and personal development writing, which has
                enriched my ability to connect with diverse audiences.
              </p>
              <p>
                Through Edu Karo, I&apos;m committed to supporting families as they
                explore, evaluate, and choose the best educational paths.
                Together, let&apos;s make informed choices for brighter futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
