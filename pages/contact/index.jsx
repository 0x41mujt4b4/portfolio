import React from "react";

function Contact() {
  return (
    <section className="container mx-auto text-gray-100" id="contact">
  <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400">
    <h3 className="text-3xl font-semibold text-cyan-400">Contact Me</h3>
    <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
      Get in Touch
    </span>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-12 sm:p-16">
    <div className="flex flex-col justify-center items-center">
      <form action="/contact" method="POST" className="shadow-xl rounded-md overflow-hidden">
        <div className="p-8">
          <input type="text" name="name" placeholder="Your name" className="mb-6 block w-full border border-gray-300 rounded-md py-3 px-4 focus:border-cyan-400" />
          <input type="email" name="email" placeholder="Your email" className="mb-6 block w-full border border-gray-300 rounded-md py-3 px-4 focus:border-cyan-400" />
          <textarea name="message" placeholder="Your message" className="mb-6 block w-full border border-gray-300 rounded-md py-3 px-4 focus:border-cyan-400"></textarea>
          <button type="submit" className="block font-medium text-primary">Send Message</button>
        </div>
      </form>
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="shadow-xl rounded-md overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p>
            <span className="font-bold">Email:</span> john.doe@example.com
          </p>
          <p>
            <span className="font-bold">Phone:</span> +1 (555) 555-5555
          </p>
          <p>
            <span className="font-bold">Address:</span> 123 Main Street, Anytown, CA 12345
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Contact;
