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
    <section className="container px-24 mx-auto min-h-screen" id="contact">
      <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400 mb-8">
        <h3 className="text-3xl font-semibold text-cyan-400">Contact Me</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          Get In Touch With Me
        </span>
      </div>
      <div className="flex sm:flex-row flex-col justify-around">
        <div className="basis-1/4">
          <div className="mb-12 max-w-[570px] lg:mb-0 text-white">
            <p className="text-body-color mb-9 text-base leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
            <div className="flex w-full sm:flex-col flex-row flex-wrap ">
            {contacts.map((contact) => (
              <div className="flex flex-row w-full mb-8 h-auto" key={contact.name}>
                <div className="p-4 bg-blue-500 text-primary mr-6 flex items-center justify-center rounded bg-opacity-5">
                  {contact.icon}
                </div>
                <div className="">
                  <h4 className="text-dark mb-1 text-xl font-bold">
                    {contact.name}
                  </h4>
                  <p className="text-body-color text-base hover:text-blue-400">
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="bg-blue-400 rounded-lg border bg-opacity-20 backdrop-blur-xl drop-shadow-lg border-blue-900 p-8 shadow-lg sm:p-12 basis-1/2">
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                className="text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
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
