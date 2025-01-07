import AboutUsSchool123 from "@/components/AboutUsEdukaro";

export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to EduKaro - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const About = () => {
  return (
    <>
      <AboutUsSchool123 />
    </>
  );
};

export default About;
