import Typewriter from "typewriter-effect";
import Image from "next/image";
import heroImg from "public/hero.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-row items-center justify-around mx-auto p-10 sm:p-20"
      id="home"
    >
      <div className="space-y-8">
        <p className="inline-flex p-2 text-blue-100 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-l ">
          <span className="wave text-lg">👋</span> Hi There! I'm Almujtaba
        </p>
        <div className="sm:text-4xl md:text-5xl text-3xl text-blue-500 font-bold">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer!",
                "Python Developer",
                "React Developer",
              ],
              autoStart: true,
              delay: 75,
              loop: true,
            }}
          />
        </div>
        <p className="text-lg sm:w-3/4 text-blue-100">
          I'm a software engineer with more than 4 years of experience. specializing in building (and occasionally
          designing) exceptional digital experiences.
        </p>
        <div className="flex space-x-4 justify-center sm:justify-start">
          <a
            href="https://github.com/0x41mujt4b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/almujtaba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#0e76a8" />
          </a>
          <a
            href="https://twitter.com/0x41mujt4b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} color="#1DA1F2" />
          </a>
        </div>
      </div>
      <div className="sm:flex hidden">
        <Player
          src="https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json"
          className="mx-auto"
          loop
          autoplay
        />
      </div>
    </section>
  );
}
