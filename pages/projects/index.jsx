import React from "react";
import Image from "next/image";
import service from "public/service.webp"
import service2 from "public/service2.webp"
import service3 from "public/service3.webp"

function Service() {
  return (
      <div className="py-16" id="projects">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="grid gap-6 lg:grid-cols-7">
            <div className="lg:col-span-3">
              <div className="space-y-4 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <Image
                  src={service}
                  alt="illustration"
                  loading="lazy"
                  width="900"
                  height="600"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Web development
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                  at cum, consectetur ullam tempora ipsa iste officia sed
                  officiis! Incidunt ea animi officiis.
                </p>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <div className="mb-6 space-y-4">
                  <Image
                    src={service2}
                    alt="illustration"
                    loading="lazy"
                    width="616"
                    height="400"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Web development mentoring.
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                </div>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
                <div className="mb-6 space-y-4">
                  <Image
                    src={service3}
                    alt="illustration"
                    loading="lazy"
                    width="675"
                    height="450"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Web development training
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro
                    at cum, consectetur ullam tempora ipsa iste officia sed
                    officiis! Incidunt ea animi officiis.
                  </p>
                </div>
                <a href="#" className="block font-medium text-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Service;