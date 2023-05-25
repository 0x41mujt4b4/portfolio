import Typewriter from "typewriter-effect";
import Image from "next/image"
import heroImg from "public/hero.png"
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center mx-32"
      id="home"
    >
      <div className="flex w-full flex-col space-y-4 justify-around">
        <p className="flex text-gray-300  ">
          Hi, my name is
        </p>
        <h1 className="font-semibold md:text-4xl text-3xl text-gray-300">Almujtaba Abdalla</h1>
        <h1 className="flex md:text-4xl text-2xl font-semibold text-red-500 ">
          <Typewriter
            options={{
              strings: ["Fullstack Web Develooper!", "Python Developer", "React Developer"],
              autoStart: true,
              delay: 75,
              loop: true,
            }}
          />
        </h1>
        <p className="text-gray-300">
        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences!.
        </p>
        <p className="text-gray-300">
        Based in Sudan.
        </p>
      </div>
      <div className="w-full items-center my-auto">
      <Player
        src='https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json'
        className="player"
        loop
        autoplay
        />
      </div>
    </div>
  );
}
