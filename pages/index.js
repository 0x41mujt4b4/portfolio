import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="w-screen h-screen mt-0 pt-36" id="home">
      <h1 className="text-gray-300 font-semibold md:text-6xl text-3xl ">Hi, I'm Almujtaba</h1>
      <h1 className="flex md:text-6xl text-3xl font-semibold text-red-500 ">
        <Typewriter
          options={{
            strings: ["Python Developer", "React Developer"],
            autoStart: true,
            delay: 75,
            loop: true,
          }}
        />
      </h1>
      <h1 className="text-gray-300 font-semibold md:text-6xl text-3xl ">Based in Sudan.</h1>
    </div>
  );
}