import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const SECTIONS = ["inicio", "portafolio", "contacto"];

const Index = () => {
  const [activeBlur, setActiveBlur] = useState(false);
  const [activeBg, setActiveBg] = useState(false);
  const handleActiveMenu = () => {
    const menu = document.getElementById("menu-list");
    menu.classList.toggle("hidden");
    setActiveBlur((isActive) => !isActive);
  };
  const handleScroll = () => {
    const current = Math.floor(window.scrollY);
    if (current > 450) setActiveBg(true);
    else setActiveBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed w-full top-0 z-10">
      <Navbar
        fluid={false}
        rounded={false}
        className={`${
          activeBg ? "bg-inherit bg-gradient-to-r from-black to-sf-blue" : "bg-transparent"
        } ${activeBlur ? "backdrop-blur-xl" : ""} text-white [&>*]:justify-end`}
      >
        <Navbar.Toggle
          onClick={handleActiveMenu}
          className="text-white hover:bg-transparent"
        />
        <Navbar.Collapse id="menu-list" className="py-4">
          {SECTIONS.map((section) => (
            <li
              key={section}
              className="max-lg:p-4 cursor-pointer flex items-center hover:opacity-60"
            >
              <Link to={section} smooth className="uppercase">
                {section}
              </Link>
            </li>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Index;
