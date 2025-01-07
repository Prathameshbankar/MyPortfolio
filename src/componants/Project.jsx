import React from "react";
import pro from "../assets/ecom.jpg";
import erp from "../assets/erp.jpg";
import crop from "../assets/crop.jpg"
import car from "../assets/car.jpg"
import uber from "../assets/uber-15.svg"
import js from "../assets/pencils.jpg"
function Project() {
  return (
    <div className="border-b border-neutral-900 mb-24">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Projects</h1>
      <div className="flex flex-wrap items-center justify-evenly gap-6 text-black">
        <div className=" text-white rounded-lg w-full border-4 border-neutral-800 sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105" >
          <div className="mb-4">
            <img
              src={pro}
              alt="Project 1"
              className="w-full h-52 rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          Ecommerce Website for funrniture Mall- Web Development
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
            Github Link
          </button>
        </div>

        <div className=" text-white rounded-lg w-full border-4 border-neutral-800 sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105">
          <div className="mb-4">
            <img
              src={erp}
              alt="Project 1"
              className="w-full h-52  rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          ERP System for school Management system
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
          Github Link
          </button>
        </div>
         <div className=" text-white border-4 border-neutral-800 rounded-lg w-full sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105">
          <div className="mb-4">
            <img
              src={crop}
              alt="Project 1"
              className="w-full h-52 rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          Crop Rates Prediction -ML Project
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
          Github Link
          </button>
        </div>
        <div className=" text-white border-4 border-neutral-800 rounded-lg w-full sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105">
          <div className="mb-4">
            <img
              src={car}
              alt="Project 1"
              className="w-full h-52 rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          Car Rental Web Application
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
          Github Link
          </button>
        </div>
        <div className=" text-white border-4 border-neutral-800 rounded-lg w-full sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105">
          <div className="mb-4">
            <img
              src={uber}
              alt="Project 1"
              className="w-full h-52 rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          Uber Front End Clone
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
          Github Link
          </button>
        </div>
        <div className=" text-white border-4 border-neutral-800 rounded-lg w-full sm:w-96 p-5 max-sm:mx-5 hover:transition duration-500 hover:scale-105">
          <div className="mb-4">
            <img
              src={js}
              alt="Project 1"
              className="w-full h-52 rounded-lg"
            />
          </div>
          <p className="mb-4 text-gray-300">
          Js Mini Projects
          </p>
          <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-400 transition">
          Github Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
