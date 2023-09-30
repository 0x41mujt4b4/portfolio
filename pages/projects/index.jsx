import React from "react";
import Image from "next/image";
import service from "public/service.webp"
import service2 from "public/service2.webp"
import service3 from "public/service3.webp"

function Service() {
  return (
      <section className="container mx-auto text-gray-100" id="projects">
          <div className="text-center sm:text-center before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-cyan-400">
            <h3 className="text-3xl font-semibold">Projects</h3>
            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
              What I've Created
            </span>
          </div>
          <div className="flex flex-row space-x-8 p-12 ">
            <div className="">
              <div className="text-white bg-cyan-400 hover:bg-cyan-600 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 p-8 shadow-lg sm:p-12">
                <Image
                  src={service}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold">
                  Web development
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
            <div className="">
              <div className="text-white bg-cyan-400 hover:bg-cyan-600 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 p-8 shadow-lg sm:p-12">
                <Image
                  src={service}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold">
                  Web development
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
            <div className="">
              <div className="text-white bg-cyan-400 hover:bg-cyan-600 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 p-8 shadow-lg sm:p-12">
                <Image
                  src={service}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold">
                  Web development
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
            <div className="">
              <div className="text-white bg-cyan-400 hover:bg-cyan-600 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 p-8 shadow-lg sm:p-12">
                <Image
                  src={service}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold">
                  Web development
                </h3>
                <p className="mb-6">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
      </section>
  );
}

export default Service;