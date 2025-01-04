import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Edu Karo&apos;s Terms and Conditions{" "}
          </p>
          <p>
            At Edu Karo, our mission is to make school discovery and admission
            processes simpler and more efficient. These terms help guide your
            interaction with our platform to ensure a positive and productive
            experience.
          </p>
          {/* Please read these terms carefully. */}
          <p>
           
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                Explore Education Your Way{" "}
              </p>
              Edu Karo is your partner in exploring schools and educational
              opportunities. We encourage you to use our platform to discover,
              learn, and decide responsibly.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Journey, Your Control
              </p>
              When you create an account with Edu Karo, you take charge of your
              educational exploration. Protect your credentials and ensure your
              information is accurate for a seamless experience.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Committed to Accuracy
              </p>
              We strive to provide reliable, up-to-date information about
              schools and admissions. While we make every effort to ensure
              accuracy, we recommend double-checking specific details with
              respective institutions.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">Feedback Matters</p>
              Your insights and suggestions shape the future of Edu Karo. We
              value your input and continuously work to improve our platform
              based on user feedback.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Privacy and Security First
              </p>
              We respect your privacy and handle your data responsibly. For more
              details on how we use your information, refer to our Privacy
              Policy.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Service Continuity
              </p>
              While we aim to provide uninterrupted services, occasional
              maintenance or technical issues may arise. We appreciate your
              patience as we work to resolve them promptly.
            </p>{" "}
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Adapting for Excellence
              </p>
              As the educational landscape evolves, so will Edu Karo. We may
              update these terms to reflect new features or enhancements and
              will ensure you&apos;re informed about significant changes.
            </p>
           
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">
              Need Assistance? We&apos;re Here for You
            </p>

            <br />
            <p>Email: info@edukaro.in</p>
            <p>
              Contact Number: 01353530324, 9557695360
              <p className="pt-4">
                Thank you for choosing Edu Karo. Together, let&apos;s make education
                simple, accessible, and empowering.
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
