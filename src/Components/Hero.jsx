import React from "react";
import photoD from "../assets/prof-photo-blueD2.webp";
import photoM from "../assets/prof-photo-blueM2.webp";
import LukeHancockCV from "../assets/Luke Hancock - CV.pdf";
import homeBg from "../assets/Sprinkle.svg";

const openCV = () => {
  window.open(LukeHancockCV, "_blank");
};

export default function Hero() {
  return (
    <div
      className="flex px-6 min-h-[calc(100vh-56px)] md:min-h-screen mx-auto  pb-5"
      id="Hero"
      style={{
        backgroundImage: `url("${homeBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-center justify-evenly max-w-screen-xl mx-auto container">
        <div className="md:w-1/2 md:text-2xl">
          <div className="whitespace-pre-line bg-white bg-opacity-70 p-4 rounded-md">
            Welcome!
            <br />
            <br />
            I’m <span className="text-2xl text-blue-800">Luke</span> a web
            developer with a strong mathematical background, combining logical
            problem-solving with a keen eye for detail to build efficient,
            high-quality solutions.
            <br />
            <br />I look forward to working with you on future projects.
          </div>
          <div className="flex w-full justify-around pt-6 px-10 md:justify-start md:gap-x-20 md:px-0">
            <button
              className=" text-white bg-blue-600 hover:bg-blue-700  outline-none outline-offset-0 py-2 px-4 md:text-3xl rounded-lg shadow-lg "
              onClick={openCV}
              aria-label="Opens Luke Hancock's CV"
            >
              View CV
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 md:flex md:justify-end">
          <picture>
            <source media="(max-width:768px)" srcSet={photoM}></source>
            <img
              src={photoD}
              className="w-60 h-60 md:w-[360px] md:h-[360px]"
              alt="Photo of Luke Hancock"
            ></img>
          </picture>
        </div>
      </div>
    </div>
  );
}
