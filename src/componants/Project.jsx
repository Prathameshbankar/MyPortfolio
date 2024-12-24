import React from "react";

function Project() {
  return (
    <div className="border-b border-neutral-900 mb-24">
      <h1 className="text-4xl text-center mb-10">Projects</h1>
      <div className="flex flex-col  mx-40 mb-4 max-sm:mx-16">
        <p className="text-2xl mb-2 underline">1. Crop Rate prediction -Machine Learning</p>
        <p className="mx-8">
          Developed a system for farmers to predict the future rates of the
          particular crop base on historical past trends.
        </p>
      </div>
      <div className="flex flex-col mx-40 mb-4 max-sm:mx-16">
        <p className="text-2xl mb-2 underline">2. Ecommerce Website for funrniture Mall- Web Development</p>
        <p className="mx-8">
        Develop a website for furniture mall. providing a solution for showcasing the product and delivering the product.
        </p>
      </div>
      <div className="flex flex-col mx-40 mb-4 max-sm:mx-16 ">
        <p className="text-2xl mb-2 underline">3. ERP System for school Management system</p>
        <p className="mx-8">
        Developed a dynamic system with the help of framework of PHP(Laravel).
        </p>
      </div>
      
    </div>
  );
}

export default Project;
