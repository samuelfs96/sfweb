import React from "react";
import hcj from "../../img/hcj.png";
import php from "../../img/php.png";
// import laravel from "../../img/laravel.svg";
import wordpress from "../../img/wordpress.png";
import react from "../../img/react.png";
import nextjs from "../../img/nextjs.png";
import tailwind from "../../img/tailwind.png";
import mui from "../../img/mui.png";
// import python from "../../img/python.png";
// import django from "../../img/django.png";
import photoshop from "../../img/photoshop.png";
import figma from "../../img/figma.png";

const About = () => {
  return (
    <div className="flex max-md:flex-col py-28 bg-gradient-to-bl from-black to-[#0f172a] container gap-5">
      <div className="w-[60%] max-md:w-full">
        <div className="max-md:container">
          <h1 className="text-white text-4xl font-bold m-2 mt-20 uppercase">
            About me
          </h1>
          <hr className="border-4 border-sf-blue w-[20%] -skew-x-12" />
          <p className="text-white mt-12 mb-24 font-light text-lg">
            My name is Samuel Figueroa, and I'm a{" "}
            <span className="font-bold">Front-End Developer</span> with a focus
            on <span className="font-bold">UI/UX</span>. I'm driven by a passion
            to merge my technical skills with creative solutions, crafting
            seamless and accessible user experiences through superior
            interfaces. My proficiency extends to technologies like HTML, CSS,
            JavaScript, PHP, WordPress, ReactJS, NextJS, Tailwind, MaterialUI,
            Figma, and Photoshop.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap w-[40%] max-md:w-full">
        <img src={hcj} alt="hcj" className="h-[120px]" />
        <img src={php} alt="php" className="h-[120px]" />
        <img src={wordpress} alt="wordpress" className="h-[120px]" />
        <img src={react} alt="react" className="h-[120px]" />
        <img src={nextjs} alt="nextjs" className="h-[120px]" />
        <img src={tailwind} alt="tailwind" className="h-[120px]" />
        <img src={mui} alt="mui" className="h-[120px]" />
        <img src={photoshop} alt="photoshop" className="h-[120px]" />
        <img src={figma} alt="figma" className="h-[120px]" />
      </div>
    </div>
  );
};

export default About;
