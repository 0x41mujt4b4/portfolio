import Typewriter from "typewriter-effect";
import Image from "next/image"
import heroImg from "public/hero.png"
import { Player } from '@lottiefiles/react-lottie-player';
import {FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4" id="home">
      <Player
        src='https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json'
        className="w-96"
        loop
        autoplay
        />
      <h1 className="sm:text-5xl text-4xl text-blue-500 font-bold mb-4">Almujtaba Abdalla</h1>
      <p className="text-xl mb-8 text-blue-100"><Typewriter
            options={{
              strings: ["Fullstack Web Developer!", "Python Developer", "React Developer"],
              autoStart: true,
              delay: 75,
              loop: true,
            }}
          /></p>
      <p className="text-lg mb-8 text-blue-100">I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
      <div className="flex space-x-4">
        <a href="https://github.com/0x41mujt4b4" target="_blank" rel="noopener noreferrer"><FaGithub size={24} color="#fff" /></a>
        <a href="https://www.linkedin.com/in/almujtaba/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} color="#0e76a8" /></a>
        <a href="https://twitter.com/0x41mujt4b4" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} color="#1DA1F2" /></a>
      </div>
    </div>
  );
}
