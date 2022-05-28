import React from "react";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className="container p-8 mt-1 md:p-24 md:mt-32 space-y-6 ">
      {/* <h1 className="text-gray-300 md:text-6xl text-4xl ">Hi, I'm Almujtaba</h1> */}
      <Typed className="flex md:text-6xl text-4xl text-red-500 " 
            strings={["Hey Leena 👋", "I know that..", "you having a hard times", "But remeber It's temporary", "and It will be better soon..", "Trust yourself", "you will be just fine!", "You got this!", "May allah help you", "Good luck Leena 😊💕"]} 
            typeSpeed={70}
            // loop
             />
      
      {/* <h1 className="text-gray-300 md:text-6xl text-4xl ">Based in Sudan.</h1> */}
    </div>
  );
}
