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
      "Esta es una aplicación hecha con react.js y tailwind, permite generar partidos de la UEFA Champions League con resultados basados ​​en la forma actual de cada equipo.",
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
      "Esta es una aplicación hecha con react, con el objetivo de probar la librería @formkit/drag-and-drop creando una interfaz basada en la ui de las retransmisiones oficiales de la premier league, permite crear una formación con los jugadores del machester city.",
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
    title: "Diseño de prototipo web interactivo",
    description:
      "Prototipo de página web hecho en figma, diseño desde cero tomando en cuenta los requerimientos del cliente y su identidad visual",
    skills: [
      "Figma",
      "UI/UX",
      "Web design"
    ],
    image: `${pro17}`,
    link: "https://www.figma.com/proto/gNLt4AvhJDvEShcna0xt4E/GP-VD?t=p9ffYWquRFW5pIiS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-1358",
  },
  {
    title: "Página web dautonomos.io",
    description:
      "Diseño y desarrollo de página web hecha con Wordpress para un cliente con la finalidad de dar a conocer su aplicación móvil que ayuda a pagar las cuotas de autónomos en españa. Diseño moderno y adaptable",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "acf",
    ],
    image: `${pro16}`,
    link: "https://dautonomos.io/",
  },
  {
    title: "Frontend Mentor - E-commerce product page challenge",
    description:
      "Página de producto, realizada para resolver el desafio de frontendmentor https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6 cuenta con diseño adaptable y carrito de compras",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro6}`,
    link: "https://polite-crepe-fdbcd1.netlify.app/",
    code_link: "https://github.com/samuelfs96/frontend-mentor-ec-product-page"
  },
  {
    title: "LolChampionStats - League of Legends champions data",
    description:
      `Aplicación web hecha con react/next.js con motivos educativos y recreacional, consulta a la api pública de leagueoflegends https://developer.riotgames.com/docs/lol , muestra listado completo de campeones, 
      filtros de búsqueda (tabs y search field), página individual de cada campeón (img, description, lore, stats, skins), haciendo uso del ssr y buenas practicas los tiempos de carga son bastante rápidos`,
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
    title: "Página web para Cardozo Abogados",
    description:
      "Página web informativa para el estudio jurídico Cardozo Abogados, cuenta con blog de noticias y diseño adaptable.",
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
    title: "Prueba Técnica(workflow) - Librería react-flow",
    description:
      "Prueba técnica realizada para validar conocimientos, cuenta con listado de productos, usuarios, paginación y un workflow creado con la libreria react flow.",
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
      "Esta es una aplicación para crear tareas o notas, tomando como referencia google keep, te permite iniciar sesión con google y apple. Está hecho con django rest framework y react.js.",
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
    title: "Simulador de Pokédex",
    description:
      "Simulador de Pokédex completa con datos provenientes de la pokeapi: https://pokeapi.co/, cuenta con listado, controles y banda sonora.",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro1}`,
    link: "https://magnificent-liger-2d9dfc.netlify.app/",
    code_link: "https://github.com/samuelfs96/personal-pokedex"
  },
  {
    title: "Good Practices App",
    description:
      `Esta es una aplicación para practicar los conceptos y principios de clean architecture, además del manejo de estado con redux.`,
    skills: ["html", "css", "javascript", "react", "material-ui", "redux", "style-components"],
    image: `${pro11}`,
    link: "https://euphonious-sable-a6025e.netlify.app/",
    code_link: "https://github.com/samuelfs96/good-practices-app"
  },
];

export default proyects;
