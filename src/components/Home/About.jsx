import React from "react";
import hcj from "../../img/hcj.png";
import react from "../../img/react.png";
import nextjs from "../../img/nextjs.png";
import tailwind from "../../img/tailwind.png";
import mui from "../../img/mui.png";

const About = () => {
  return (
    <div className="flex mt-24 mb-24 max-md:flex-col">
      <div className="w-[70%] container">
        <h1 className=" text-4xl font-bold m-2 uppercase">
          Acerca de mi
        </h1>
        <p className="text-sgl-gray m-2 mt-6 mb-24 font-lato">
          Soy Samuel Figueroa, como desarrollador frontend me esfuerzo por
          combinar mi experiencia y pasión para crear soluciones tecnológicas
          atractivas que sean fácilmente accesibles para el usuario a través de
          interfaces eficaces y de alta calidad. Algunas de las tecnologías que
          manejo mas destacadas son: html, css, javascript, reactjs, nextjs,
          tailwind, materialui, entre otras... Siempre estoy en constante
          aprendizaje.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap max-md:flex-col">
        <img src={hcj} alt="hcj" className="h-[120px]" />
        <img src={react} alt="react" className="h-[120px]" />
        <img src={nextjs} alt="nextjs" className="h-[120px]" />
        <img src={tailwind} alt="tailwind" className="h-[120px]" />
        <img src={mui} alt="mui" className="h-[120px]" />
      </div>
    </div>
  );
};

export default About;
