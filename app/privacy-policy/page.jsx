import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to EduKaro - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Edu Karo&apos;s Commitment to Your Privacy
          </p>
          <p>
            At Edu Karo, we prioritize your trust and privacy. This policy
            explains how we collect, use, and protect your data while ensuring
            transparency in our practices.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">Data We Collect</p>
            To provide tailored guidance, we collect basic information like your
            name, contact details, and preferences. This helps us offer
            personalized recommendations and updates relevant to your needs.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Enhancing Your Experience
            </p>
            We use analytical tools to understand user behavior, allowing us to
            refine our services and create features that better suit your
            requirements.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Your Data, Safeguarded
            </p>
            Edu Karo employs robust security measures to protect your data from
            unauthorized access. While no system is foolproof, we are committed
            to minimizing risks and ensuring secure data management.
          </p>
          <p>
            <p className="text-[24px] font-semibold">Controlled Sharing</p>
            Any data shared with trusted partners is strictly for improving your
            experience and is done within clearly defined parameters with your
            consent.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Evolving with Transparency
            </p>
            As Edu Karo grows, our privacy practices may adapt. Significant
            updates to this policy will always be communicated to you clearly
            and promptly.
          </p>

          <p>
            <p className="text-[24px] font-semibold">Connect with Us</p>
            For privacy-related concerns or queries, reach out anytime:
            <br />
            <p>Email: edukaroindia@gmail.com</p>
            <p>Contact Number:01353530324, 9557695360</p>
          </p>

          <p>
            Thank you for trusting Edu Karo. We&apos;re dedicated to protecting your
            privacy while helping you navigate educational opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
