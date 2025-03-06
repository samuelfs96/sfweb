import pro1 from "../../img/proyects/pro1.png";
import pro4 from "../../img/proyects/pro4.png";
import pro5 from "../../img/proyects/pro5.png";
import pro6 from "../../img/proyects/pro6.png";
import pro7 from "../../img/proyects/pro7.png";
import pro10 from "../../img/proyects/pro10.png";
import pro11 from "../../img/proyects/pro11.png";
import pro12 from "../../img/proyects/pro12.png";
import pro13 from "../../img/proyects/pro13.png";
//import pro15 from "../../img/proyects/pro15.png";
import pro16 from "../../img/proyects/pro16.png";
import pro17 from "../../img/proyects/pro17.png";

const proyects = [
  // {
  //   title: "Página web ComparadorTPV",
  //   description:
  //     "Página web hecha con Wordpress para un cliente con la finalidad de mostrar las mejores tiendas y softwares tpv del mercado con sus respectivas valoraciones",
  //   skills: [
  //     "html",
  //     "css",
  //     "javascript",
  //     "php",
  //     "wordpress",
  //     "elementor",
  //     "acf",
  //   ],
  //   image: `${pro15}`,
  //   link: "https://comparadortpv.es/",
  //   code_link: "https://comparadortpv.es/"
  // },
  {
    title: "Champions League Matches Generator",
    description:
      "Developed using React.js and Tailwind, this application simulates UEFA Champions League fixtures, predicting outcomes by analyzing the current performance metrics of participating teams.",
    skills: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "tailwind",
      "vite",
      "framer-motion"
    ],
    image: `${pro7}`,
    link: "https://champions-match-generator.netlify.app/",
    code_link: "https://github.com/samuelfs96/champions-match-generator"
  },
  {
    title: "Manchester City - Formation Builder",
    description:
      "Developed using React, this application serves as a demonstration of the @formkit/drag-and-drop library's capabilities. It features an interface replicating the official Premier League broadcast user interface, enabling the creation of Manchester City player formations.",
    skills: [
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "vite",
      "formkit/drag-and-drop"
    ],
    image: `${pro12}`,
    link: "https://mci-formation-builder.netlify.app/",
    code_link: "https://github.com/samuelfs96/formation-builder"
  },
  {
    title: "Grupo Vidahorro - Website",
    description:
      "Design and development of a WordPress website for a client, aimed at showcasing their services in Spain. Modern and responsive design tailored to the client's requirements and visual identity.",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "acf",
      "UI/UX",
      "photoshop",
      "web design"
    ],
    image: `${pro17}`,
    link: "https://grupovidahorro.com/",
  },
  {
    title: "dautonomos.io - Website",
    description:
      "Developed a WordPress website, including design and implementation, for a client aiming to showcase their mobile app that simplifies social security contributions for self-employed individuals in Spain. The design is modern and fully responsive.",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "acf",
      "UI/UX",
      "photoshop",
      "web design"
    ],
    image: `${pro16}`,
    link: "https://dautonomos.io/",
  },
  {
    title: "Frontend Mentor - E-commerce product page challenge",
    description:
      "This product page was created to fulfill the requirements of the Frontendmentor challenge found at https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6. It includes a responsive layout and a fully functional shopping cart",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro6}`,
    link: "https://polite-crepe-fdbcd1.netlify.app/",
    code_link: "https://github.com/samuelfs96/frontend-mentor-ec-product-page"
  },
  {
    title: "LolChampionStats - League of Legends champions data",
    description:
      `This React/Next.js web application, developed for both educational and recreational use, leverages the League of Legends public API https://developer.riotgames.com/docs/lol to provide a full champion roster, advanced search filters (tabbed and text-based), and detailed champion profiles (images, descriptions, lore, stats, skins). Implemented with server-side rendering (SSR) and adhering to best development practices, it ensures exceptionally fast loading speeds.`,
    skills: [
      "html",
      "css",
      "javascript",
      "react",
      "next",
      "ssr",
      "mui",
      "react-chartjs",
    ],
    image: `${pro5}`,
    link: "https://lolchampstats-app.vercel.app/",
    code_link: "https://github.com/samuelfs96/lolchampstats-app"
  },
  {
    title: "Cardozo Abogados - Website",
    description:
      "An informative website developed for the Cardozo Abogados law firm, which includes a news blog and a fully responsive layout.",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
    ],
    image: `${pro10}`,
    link: "https://cardozoabogados.com.ar/",
  },
  {
    title: "Technical Test (Workflow) - React Flow Library",
    description:
      "This technical assessment was performed to validate skills, including product and user listings, pagination functionality, and a workflow implementation using the React Flow library.",
    skills: [
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "react-query",
      "react-flow",
    ],
    image: `${pro4}`,
    link: "https://snazzy-kleicha-e00173.netlify.app/",
    code_link: "https://github.com/samuelfs96/cpanax-test"
  },
  {
    title: "MyTaskApp - Django REST framework + (Vite/React/TS)",
    description:
      "A task and note management application, designed with a user experience similar to Google Keep, supporting Google and Apple authentication. It's implemented with Django REST Framework for the API and React.js for the client-side interface.",
    skills: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "tailwind",
      "vite",
      "framer-motion",
      "phyton",
      "django",
      "django-rest-framework"
    ],
    image: `${pro13}`,
    link: "https://github.com/samuelfs96/MyTasksApp",
    code_link: "https://github.com/samuelfs96/MyTasksApp"
  },
  {
    title: "Pokédex Simulator",
    description:
      "A full-featured Pokédex simulator, powered by data fetched from the PokeAPI: https://pokeapi.co/. It provides a complete list, intuitive controls, and integrated soundtrack.",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro1}`,
    link: "https://magnificent-liger-2d9dfc.netlify.app/",
    code_link: "https://github.com/samuelfs96/personal-pokedex"
  },
  {
    title: "Good Practices App",
    description:
      `Developed as a learning tool, this application aims to exercise the concepts and principles of clean architecture, along with state management implementation using Redux.`,
    skills: ["html", "css", "javascript", "react", "material-ui", "redux", "style-components"],
    image: `${pro11}`,
    link: "https://euphonious-sable-a6025e.netlify.app/",
    code_link: "https://github.com/samuelfs96/good-practices-app"
  },
];

export default proyects;
