import React from 'react'
import myImg from "@/public/myImg.jpg"
import Image from 'next/image';

const About = () => {
  return (
    <section className="container mx-auto text-gray-100" id="about">
      <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400">
        <h3 className="text-3xl font-semibold text-cyan-400">About Me</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          Get to Know Me
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-12 sm:p-16">
        <div className="flex flex-col justify-center items-center">
          <Image src={myImg} alt="Profile picture" className="w-48 rounded-full mx-auto" />
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p className="text-gray-400 mb-6">Software Engineer</p>
            <p>Hi! I'm a software engineer with a passion for building web applications. I have 3+ years of experience in the industry, and I'm always looking for new ways to learn and grow. I'm also a big fan of open source software, and I contribute to a number of projects in my spare time.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="shadow-xl rounded-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold">My Skills</h3>
              <ul className="list-disc mt-6">
                <li>Web development (React, Node.js, Tailwind CSS)</li>
                <li>Mobile app development (React Native)</li>
                <li>Cloud computing (AWS, Azure)</li>
                <li>Version control (Git)</li>
                <li>Unit testing (Jest)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;