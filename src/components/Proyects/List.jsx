import { Badge, Card } from "flowbite-react";
import React from "react";
import proyects from "./proyects-data";
import github_logo from "../../img/github-mark.png";

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

const list = () => {
  return (
    <div className="container text-sgl-gray mt-24 mb-24">
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4 container">
        {proyects.map(({ title, description, skills, image, link }, key) => (
          <div className="max-w-sm" key={key}>
            <Card
              className="[&>img]:h-[200px] [&>img]:object-cover"
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
                <a title="Ver demo" className="hover:opacity-70" href={link} target="_blank" rel="noreferrer">
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
                <a title="Ver código" href={link} target="_blank" rel="noreferrer" className="w-[27px] hover:opacity-70">
                  <img src={github_logo} alt="github logo" />
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default list;
