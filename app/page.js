

import "./globals.css";
import HeroEduKaro from "@/components/HeroEduKaro";
import FormEduKaro from "@/components/FormEduKaro";
import WhyChooseUsEduKaro from "@/components/WhyChooseUsEduKaro";
import AboutEdukaro from "@/components/AboutEdukaro";
import TestimonailEduKaro from "@/components/TestimonailEduKaro";
import MapEduKaro from "@/components/MapEduKaro";
import MobileAnimation from "@/components/MobileAnimation";

export async function generateMetadata() {
  return {
    title: "Discover Find Top Boarding Schools in Moments | Edukaro",
    description: "Easily find the best boarding schools for your needs. Explore top-rated options, compare facilities, and choose the perfect one in just seconds!",
    icons: [{ rel: "icon", url: "/edukarologo1.png" }],
    other: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "description",
        content:
          "Easily find the best boarding schools for your needs. Explore top-rated options, compare facilities, and choose the perfect one in just seconds!",
      },
      {
        name: "keywords",
        content:
          "School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School",
      },
      {
        name: "application-name",
        content: "Edukaro",
      },
    ],
    openGraph: {
      locale: "en_US",
      type: "website",
      title: "Find Top Boarding Schools in Moments | Edukaro",
      description:
        "Easily find the best boarding schools for your needs. Explore top-rated options, compare facilities, and choose the perfect one in just seconds!",
      url: "https://www.edukaro.com/",
      site_name: "Edukaro",
      images: [
        {
          url: "https://edukaro.com/categoryedukaro.svg",
          alt: "Edukaro logo",
        },
      ],
    },
  };
  
}
export default function Home() {
  return (
    <div>
      <HeroEduKaro />
      <FormEduKaro />
      <MapEduKaro />
      <WhyChooseUsEduKaro />
      <div className="xl:hidden">
        <MobileAnimation />
      </div>
      <AboutEdukaro />
      <TestimonailEduKaro />
    </div>
  );
}
