import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero w-full ">
      <Image
        className="z-[-1] object-cover inset-0 absolute top-0 opacity-60"
        src="/assets/hero-bg.jpg"
        alt="palm trees"
        fill={true}
      />
      <div className="flex flex-col text-center h-full p-20 ">
        <h1 className="sm:text-8xl mb-6 text-7xl font-bold">
          Palm Leaf <br />
          Clothes
        </h1>
        <p className="text-2xl font-semibold sm:text-4xl">
          Your One Shop Stop <br />
          For A Day At The Beach
        </p>
      </div>
    </div>
  );
};

export default Hero;
