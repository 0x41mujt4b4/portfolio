import React from "react";
import Image from "next/image";
import service from "public/service.webp"
import service2 from "public/service2.webp"
import service3 from "public/service3.webp"

const projects = [
  {
    name: "Portfolio Website",
    description: "This is my personal portfolio website, built with React, Node.js, and MySQL.",
    image: service,
    link: "https://example.com",
  },
  {
    name: "E-Commerce Website",
    description: "This is an e-commerce website that I built for a client, using React, Node.js, and MySQL.",
    image: service2,
    link: "https://example.com/shop",
  },
  {
    name: "Mobile App",
    description: "This is a mobile app that I built for a client, using React Native.",
    image: service3,
    link: "https://example.com/mobile-app",
  },
  {
    name: "Mobile App",
    description: "This is a mobile app that I built for a client, using React Native.",
    image: service3,
    link: "https://example.com/mobile-app",
  },
];

function Projects() {
  return (
    <section className="container mx-auto text-gray-100" id="projects">
      <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400">
        <h3 className="text-3xl font-semibold text-cyan-400">Projects</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          What I've Built
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-12 sm:p-16">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col justify-center items-center">
            <div className="shadow-xl rounded-md overflow-hidden">
              <Image src={project.image} alt={project.name} />
              <div className="p-8">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mb-6">{project.description}</p>
                <a href={project.link} className="block font-medium text-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;