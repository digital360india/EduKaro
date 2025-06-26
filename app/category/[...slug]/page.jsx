import { base } from "@/app/api/airtable.jsx";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CategoryPage from "@/components/CategoryPage";
import CategoryHeroEduKaro from "@/components/CategoryHeroEduKaro";
import Head from "next/head";

async function getCategoryData(slug) {
  const categorydata = await base("category 2")
    .select({
      filterByFormula: `slug= "${slug}"`,
    })
    .all()
    .then((value) => value[0]?.fields);
  return categorydata;
}

export async function generateMetadata({ params }) {
  const categorydata = await getCategoryData(params.slug);

  return {
    title: categorydata?.title,
    description: categorydata?.meta_description,
    keywords: categorydata?.keywords,
    authors: [{ name: categorydata?.author }],
    alternates: {
      canonical: `https://www.edukaro.com/category/${params.slug}`,
    },
    openGraph: {
      title: categorydata?.title,
      description: categorydata?.meta_description,
      url: `https://www.edukaro.com/${params.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: categorydata?.featuredImg }],
      siteName: "Edukaro",
      siteName: "Edukaro School Search Portal",
    },
    robots: {
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: "summary",
      title: categorydata?.title,
      description: categorydata?.meta_description,
      card: categorydata?.featuredImg,
      image: categorydata?.featuredImg,
      site: "@edukaro",
      creator: "@edukaro",
    },
  };
}

export default async function ListingPage({ params }) {
  const categorydata = await getCategoryData(params.slug);

  return (
    <>
      <Head>
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categorydata?.schema,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categorydata?.schema2,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categorydata?.schema3,
          }}
        />
      </Head>
      {/* <div className="bg-white overflow-x-hidden">
        <div className="hidden sm:block">
          <Hero
            image="https://res.cloudinary.com/eduminatti-com/image/upload/v1726733029/Edu123/Eduimages/banner_desktop_2.jpg"
            height="67vh"
          />
        </div>
        <div className="sm:hidden">
          <Hero
            need="no"
            image="https://res.cloudinary.com/eduminatti-com/image/upload/v1726733028/Edu123/Eduimages/mobile_banner.png"
            height="65vh"
          />
        </div>
        <CategoryPage categorydata={categorydata} />
        <FAQ categorydata={categorydata} />
      </div> */}


      <div className="overflow-hidden md:overflow-visible">
        <CategoryHeroEduKaro />
        <CategoryPage categorydata={categorydata} />
        <FAQ categoryData={categorydata} />
      </div>
    </>
  );
}
