import React from "react";
import Image from "next/image";
import service from "public/service.webp";
import service2 from "public/service2.webp";
import service3 from "public/service3.webp";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "This is my personal portfolio website, built with React, Node.js, and MySQL.",
    image: service,
    link: "https://images.app.goo.gl/kr5WKjGEoEHj19re6",
  },
  {
    name: "E-Commerce Website",
    description:
      "This is an e-commerce website that I built for a client, using React, Node.js, and MySQL.",
    image: service2,
    link: "https://images.app.goo.gl/kr5WKjGEoEHj19re6",
  },
  {
    name: "Mobile App",
    description:
      "This is a mobile app that I built for a client, using React Native.",
    image: service3,
    link: "https://images.app.goo.gl/kr5WKjGEoEHj19re6",
  },
  {
    name: "Phone App",
    description:
      "This is a mobile app that I built for a client, using React Native.",
    image: service3,
    link: "https://images.app.goo.gl/kr5WKjGEoEHj19re6",
  },
];

function Projects() {
  return (
    <section
      className="text-center p-8 mx-auto text-gray-100"
      id="projects"
    >
      <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400 mb-8">
        <h3 className="text-3xl font-semibold text-cyan-400">Projects</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          What I've Built
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer bg-blue-400 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 shadow-lg"
          >
            <Image className="w-full" src={project.image} alt={project.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-gray-100 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
