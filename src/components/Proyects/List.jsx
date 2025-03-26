import { Badge, Card } from "flowbite-react";
import React, { useEffect, useMemo, useState } from "react";
import proyects from "./proyects-data";
import github_logo from "../../img/github-mark.png";
import figma_logo from "../../img/figma.png";
import Bricks from "bricks.js";
import Skeleton from "../Skeleton/Skeleton";

const badgeColors = [
  "info",
  "gray",
  "failure",
  "success",
  "warning",
  "indigo",
  "purple",
  "pink",
];

const sizes = [
  { mq: "320px", columns: 1, gutter: 10 },
  { mq: "480px", columns: 1, gutter: 10 },
  { mq: "600px", columns: 1, gutter: 10 },
  { mq: "768px", columns: 2, gutter: 10 },
  { mq: "900px", columns: 2, gutter: 10 },
  { mq: "1024px", columns: 3, gutter: 10 },
  { mq: "1280px", columns: 4, gutter: 10 },
  { mq: "1440px", columns: 4, gutter: 10 },
];

const List = () => {
  const [loading, setLoading] = useState(true);
  const handleBricksInitialization = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const web_design_projects = useMemo(
    () => proyects.filter((item) => !item.code_link),
    []
  );
  const react_projects = useMemo(
    () => proyects.filter((item) => item.code_link),
    []
  );

  useEffect(() => {
    handleBricksInitialization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loading) {
      const instance = Bricks({
        container: ".container.items",
        packed: "data-packed",
        sizes: sizes,
      });
      instance
        .resize(true) // bind resize handler
        .pack();
      const instance2 = Bricks({
        container: ".container.items2",
        packed: "data-packed",
        sizes: sizes,
      });
      instance2
        .resize(true) // bind resize handler
        .pack();
    }
  }, [loading]);

  return (
    <>
      {/* React projects */}
      <div className="flex items-center flex-col my-16">
        <div>
          <h1 className=" text-white text-4xl font-bold m-2 uppercase">
            React Projects
          </h1>
          <hr className="border-4 border-sf-blue w-[60%] -skew-x-12" />
        </div>
      </div>
      <div className="container text-sgl-gray mt-24 mb-24">
        {loading ? (
          <div className="container flex flex-wrap gap-2 justify-center">
            {react_projects.map((_item, key) => (
              <Skeleton style={{ height: "400px", width: "280px" }} key={key} />
            ))}
          </div>
        ) : (
          <div className="container items2">
            {react_projects.map(
              (
                {
                  title,
                  description,
                  skills,
                  image,
                  link,
                  code_link,
                  figma_pro,
                },
                key
              ) => (
                <div className="max-w-xs" key={key}>
                  <Card
                    className="bg-transparent border-t-0 border-b-2 border-x-0 border-sf-blue 
              [&>img]:h-[200px] [&>img]:object-cover 
              [&>img]:object-center rounded-none 
              [&>img]:rounded-none
              hover:bg-slate-900
              hover:-translate-y-2
              transition-transform
              "
                    target="_blank"
                    imgSrc={image}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-white ">
                      <a href={link} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, key) => (
                        <Badge
                          color={
                            badgeColors[Math.floor(key % badgeColors.length)]
                          }
                          key={key}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs font-normal text-white break-words">
                      {description}
                    </p>
                    <div className="flex gap-2 items-center justify-end">
                      <a
                        title="Ver demo"
                        className=" text-white"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </a>
                      {code_link && (
                        <a
                          title="Ver código"
                          href={code_link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[27px]"
                        >
                          <img
                            src={github_logo}
                            alt="github logo"
                            className="invert"
                          />
                        </a>
                      )}
                      {figma_pro && (
                        <a
                          title="Ver prototipo"
                          href={figma_pro}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[27px]"
                        >
                          <img src={figma_logo} alt="figma logo" />
                        </a>
                      )}
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {/* Web design */}
      <div className="flex items-center flex-col my-16">
        <div>
          <h1 className=" text-white text-4xl font-bold m-2 uppercase">
            Web Design
          </h1>
          <hr className="border-4 border-sf-blue w-[60%] -skew-x-12" />
        </div>
      </div>
      <div className="container text-sgl-gray mt-24 mb-24">
        {loading ? (
          <div className="container flex flex-wrap gap-2 justify-center">
            {web_design_projects.map((_item, key) => (
              <Skeleton style={{ height: "400px", width: "280px" }} key={key} />
            ))}
          </div>
        ) : (
          <div className="container items">
            {web_design_projects.map(
              ({ title, description, skills, image, link, figma_pro }, key) => (
                <div className="max-w-xs" key={key}>
                  <Card
                    className="bg-transparent border-t-0 border-b-2 border-x-0 border-sf-blue 
              [&>img]:h-[200px] [&>img]:object-cover 
              [&>img]:object-center rounded-none 
              [&>img]:rounded-none
              hover:bg-slate-900
              hover:-translate-y-2
              transition-transform
              "
                    target="_blank"
                    imgSrc={image}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-white ">
                      <a href={link} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, key) => (
                        <Badge
                          color={
                            badgeColors[Math.floor(key % badgeColors.length)]
                          }
                          key={key}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs font-normal text-white break-words">
                      {description}
                    </p>
                    <div className="flex gap-2 items-center justify-end">
                      <a
                        title="Ver demo"
                        className=" text-white"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </a>
                      {figma_pro && (
                        <a
                          title="Ver prototipo"
                          href={figma_pro}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[27px]"
                        >
                          <img src={figma_logo} alt="figma logo" />
                        </a>
                      )}
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>
        )}
      </div>
      
    </>
  );
};

export default List;
