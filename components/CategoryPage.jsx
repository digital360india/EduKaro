import React from "react";
import SchoolCard from "./SchoolCard";

export default function CategoryPage({ categorydata }) {
  
  return (
    <div className="flex md:flex-col flex-col-reverse">
      <div>
        
        {/* <Article categorydata={categorydata} /> */}
      </div>
      <div className="w-full  sm:w-[100vw] ">
        <SchoolCard categorydata={categorydata} />
      </div>
    </div>
  );
}
