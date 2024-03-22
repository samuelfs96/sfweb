import React from "react";
import Logo from "../../img/SF_logo.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div id="inicio" className="h-[100vh] flex items-center justify-center">
      <div
        className="bg-bg1 bg-cover h-full w-full"
        style={{ filter: "brightness(0.2)" }}
      ></div>
      <div className="absolute w-full container">
        <h1 className=" text-white text-4xl uppercase mb-2 mt-20 max-lg:mt-40 max-lg:text-center">
          <span className="text-5xl font-bold">Samuel</span><br />
          <span className="text-9xl max-lg:text-8xl max-md:text-7xl font-bold">Figueroa</span><br />
          <span className="text-md max-md:text-sm text-center font-thin tracking-widest border-l-sf-blue border-l-4 pl-4">
            Desarrollador Full Stack
          </span>
        </h1>
        <div className="flex max-md:flex-col max-md:items-center gap-2 justify-center mt-48 max-lg:mt-16">
          <Link to="portafolio" smooth>
            <button
              style={{
                animation: "my-pulse 2s infinite",
              }}
              className="bg-sf-blue text-white px-10 py-3 uppercase rounded-full text-sm border-2 border-sf-blue"
            >
              <div>Ver Portafolio</div>
            </button>
          </Link>
          <Link to="contacto" smooth>
            <button
              style={{
                animation: "my-pulse 2s infinite",
              }}
              className=" text-white px-10 py-3 uppercase rounded-full text-sm border-2 border-sf-blue hover:bg-sf-blue transition-all"
            >
              <div>Contacto</div>
            </button>
          </Link>
        </div>
        <img
          src={Logo}
          className="absolute right-0 bottom-[-80px] w-80 max-lg:relative max-lg:bottom-[-80px] max-lg:w-40"
          alt="SF Logo"
        />
      </div>
    </div>
  );
};

export default Intro;
