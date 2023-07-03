import { Badge, Card } from "flowbite-react";
import React, { useEffect } from "react";
import proyects from "./proyects-data";
import github_logo from "../../img/github-mark.png";
import Bricks from "bricks.js";

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

const List = () => {
  useEffect(() => {
    const sizes = [
      { mq: '320px', columns: 1, gutter: 10 },
      { mq: '480px', columns: 1, gutter: 10 },
      { mq: '600px', columns: 1, gutter: 10 },
      { mq: '768px', columns: 2, gutter: 10 },
      { mq: '900px', columns: 2, gutter: 10 },
      { mq: '1024px', columns: 2, gutter: 10 },
      { mq: '1280px', columns: 3, gutter: 10 },
    ];
    const instance = Bricks({
      container: ".container.items",
      packed: "data-packed",
      sizes: sizes,
    });

    instance
      .resize(true) // bind resize handler
      .pack();
  }, []);

  return (
    <div className="container text-sgl-gray mt-24 mb-24">
      <div className="container items">
        {proyects.map(
          ({ title, description, skills, image, link, code_link }, key) => (
            <div className="max-w-xs" key={key}>
              <Card
                className="[&>img]:h-[200px] [&>img]:object-cover [&>img]:object-center"
                imgSrc={image}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, key) => (
                    <Badge color={badgeColors[key]} key={key}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400 break-words">
                  {description}
                </p>
                <div className="flex gap-2 items-center justify-end">
                  <a
                    title="Ver demo"
                    className="hover:opacity-70"
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
                  <a
                    title="Ver código"
                    href={code_link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[27px] hover:opacity-70"
                  >
                    <img src={github_logo} alt="github logo" />
                  </a>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default List;
