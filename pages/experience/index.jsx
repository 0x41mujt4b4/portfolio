const experiences = [
  {
  name:"Software Engineer @ RaasMalArabi",
  date: 'Nov 2021 - Present',
  description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orciscelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
  },
  {
  name:"Front-End Developer @ Dot Energy",
  date: 'Sep 2020',
  description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orciscelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
  },
  {
  name:"IT Support @ TPRA (Telecommunications and Post Regulatory Authority)",
  date: 'Nov 2019',
  description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orciscelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
  },
  // {
  // name:"",
  // date: '',
  // description: ''
  // },
]

function Experience() {
  return (
    <section className="dark:text-gray-100 min-h-screen" id="experience">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-cyan-400">
              <h3 className="text-3xl font-semibold">Experiences</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                Where I've Worked
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              {
                experiences.map(experience =>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-cyan-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {experience.name}
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                      {experience.date}
                    </time>
                    <p className="mt-3">
                      {experience.description}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
