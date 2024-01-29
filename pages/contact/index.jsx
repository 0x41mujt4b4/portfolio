import React from "react";
import { FaPhone, FaHouse, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const contacts = [
  {
    name: "My Location",
    value: "Khartoum, Sudan",
    icon: <FaHouse />,
  },
  {
    name: "Phone Number",
    value: <a href="tel:+249969676735">(+249) 96 967 6735</a>,
    icon: <FaPhone />,
  },
  {
    name: "Email Address",
    value: (
      <a href="mailto:almujtaba.abdu@gmail.com">almujtaba.abdu@gmail.com</a>
    ),
    icon: <FaEnvelope />,
  },
  {
    name: "WhatsApp",
    value: <a href="https://wa.me/249969676735">TextMe</a>,
    icon: <FaWhatsapp />,
  },
];

function Contact() {
  return (
    <section className="container flex flex-col mx-auto min-h-screen" id="contact">
      <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400">
        <h3 className="text-3xl font-semibold text-cyan-400">Contact Me</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          Get In Touch With Me
        </span>
        <p className="text-gray-200 mb-9 text-base leading-relaxed text-center mx-auto md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
      </div>
      <div className="flex sm:flex-row flex-col justify-center ">
        <div className="flex flex-col p-4 justify-center md:p-8 basis-1/4 text-white w-full h-full flex-wrap ">
          {contacts.map((contact) => (
            <div
              className="flex flex-row w-full mb-8 h-auto"
              key={contact.name}
            >
              <div className="p-4 bg-blue-500 text-primary mr-6 flex items-center justify-center rounded bg-opacity-5">
                {contact.icon}
              </div>
              <div className="">
                <h4 className="text-dark mb-1 text-xl font-bold">
                  {contact.name}
                </h4>
                <p className=" text-base hover:text-blue-400">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-400 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 px-8 pt-6 pb-2 mb-4 text-center sm:w-1/2">
          <form className="">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
