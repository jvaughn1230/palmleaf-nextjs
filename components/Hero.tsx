import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <Image
        className="z-[-1] object-cover inset-0 absolute top-0 opacity-60"
        src="/assets/hero-bg.jpg"
        alt="palm trees"
        fill={true}
      />

      <div className="flex flex-col items-center justify-center  h-full">
        <h1 className="text-8xl mb-4 ">Palm Leaf Clothes</h1>
        <p className="text-2xl">Your One Shop Stop For A Day At The Beach</p>
      </div>
    </div>
  );
};

export default Hero;
