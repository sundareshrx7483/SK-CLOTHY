import React from "react";
import { Carousel } from "flowbite-react";
import "../App.css";

const Home = () => {
  return (
    <div id="home" className="flex items-center justify-center w-full h-screen">
      <Carousel className="w-full h-full">
        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="absolute z-10 text-center text-white">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl text-lime-200">WELCOME</h1>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl lg:text-8xl text-lime-200 " >TO</h1>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl lg:text-8xl text-cyan-300">SKCLOTHY</h1>
          </div>
          <img
            src="\Home\wp6326224-mens-fashion-wallpapers.jpg"
            alt="Fashion"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\firstmine.jpeg"
            alt="Men Fashion"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\wp3646113-men-fashion-wallpapers.jpg"
            alt="Men Fashion"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\second.jpeg"
            alt="Men Fashion"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\wp5611603-men-and-women-fashion-models-wallpapers.jpg"
            alt="Men and Women Fashion"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\third.jpeg"
            alt="Men and Women Fashion"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\img1.jpg"
            alt="Fashion Image 1"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\fourth.jpeg"
            alt="Fashion Image 1"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\img2.jpg"
            alt="Fashion Image 2"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\img6.jpg"
            alt="Fashion Image 3"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\img3.jpg"
            alt="Fashion Image 4"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative flex items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="\Home\img5.jpg"
            alt="Fashion Image 5"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
