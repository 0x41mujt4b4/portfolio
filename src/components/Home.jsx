import React from "react";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className="container p-8 mt-1 md:p-24 md:mt-32 space-y-6 ">
      <h1 className="text-gray-300 md:text-6xl text-4xl ">Hi, I'm Almujtaba</h1>
      <Typed className="flex md:text-6xl text-4xl text-red-500 " 
            strings={["Python Developer", "React Developer"]} 
            typeSpeed={60}
            loop
             />
      <h1 className="text-gray-300 md:text-6xl text-4xl ">Based in Sudan.</h1>
    </div>
  );
}
