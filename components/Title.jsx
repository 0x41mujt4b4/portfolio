import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-cyan-400">
      <h3 className="text-3xl font-semibold text-cyan-400">{title}</h3>
      <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
        {subtitle}
      </span>
    </div>
  );
};

export default Title;
