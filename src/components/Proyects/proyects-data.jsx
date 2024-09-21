import pro1 from "../../img/proyects/pro1.png";
import pro2 from "../../img/proyects/pro2.png";
//import pro3 from "../../img/proyects/pro3.png";
import pro4 from "../../img/proyects/pro4.png";
//import pro5 from "../../img/proyects/pro5.png";
import pro6 from "../../img/proyects/pro6.png";
import pro7 from "../../img/proyects/pro7.png";
import pro8 from "../../img/proyects/pro8.png";
//import pro9 from "../../img/proyects/pro9.png";
import pro10 from "../../img/proyects/pro10.png";
//import pro11 from "../../img/proyects/pro11.png";
import pro12 from "../../img/proyects/pro12.png";
import pro13 from "../../img/proyects/pro13.png";
import pro14 from "../../img/proyects/pro14.png";
import pro15 from "../../img/proyects/pro15.png";

const proyects = [
  {
    title: "Página web ComparadorTPV",
    description:
      "Página web hecha con Wordpress para un cliente con la finalidad de mostrar las mejores tiendas y softwares tpv del mercado con sus respectivas valoraciones",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "acf",
    ],
    image: `${pro15}`,
    link: "https://comparadortpv.es/",
    code_link: "https://comparadortpv.es/"
  },
  {
    title: "Jesús Yuste - Tienda online de collares para perros",
    description:
      "Tienda online hecha con Wordpress y WooCommerce para un cliente con el objetivo de vender collares de lujo para perros",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "wordpress",
      "elementor",
      "woocommerce",
    ],
    image: `${pro14}`,
    link: "https://jesusyuste.es/",
    code_link: "https://jesusyuste.es/"
  },
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
    title: "Página web para Rocket Fired Pizza",
    description:
      "Página web informativa para la pizzería Rocket Fired Pizza, cuenta con diseño adaptable.",
    skills: [
      "html",
      "css",
      "javascript",
    ],
    image: `${pro8}`,
    link: "https://rocketfiredpizza.com/",
    code_link: "https://rocketfiredpizza.com/"
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
    code_link: "https://cardozoabogados.com.ar/estudio/"
  },
  {
    title: "Página Web para Sandstone Global",
    description:
      "Página web informativa para la empresa SGL MX. Cuenta un diseño adaptado a todos los dispositivos, cambio de idioma, y conexión al blog.",
    skills: ["html", "css", "javascript", "react", "tailwind", "node"],
    image: `${pro2}`,
    link: "https://sgl.com.mx/",
    code_link: "https://sgl.com.mx/"
  },
  
  /*{
    title: "Página web para Nave Usados",
    description:
      "Página web para la empresa Nave Usados, compra y venta de vehiculos, cuenta con diseño adaptable.",
    skills: [
      "html",
      "css",
      "javascript",
      "php",
      "mysql"
    ],
    image: `${pro9}`,
    link: "https://www.naveusados.com.ar/",
    code_link: "https://www.naveusados.com.ar/"
  },*/
  
  /*{
    title: "Página web para CJP Telecom",
    description:
      "Página web informativa para la empresa CJP Telecom MX, diseño adaptable.",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro3}`,
    link: "https://cjp.mx/",
    code_link: "https://cjp.mx/"
  },*/
  
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
    title: "Frontend Mentor - E-commerce product page challenge",
    description:
      "Página de producto, realizada para resolver el desafio de frontendmentor https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6 cuenta con diseño adaptable y carrito de compras",
    skills: ["html", "css", "javascript", "react", "tailwind"],
    image: `${pro6}`,
    link: "https://polite-crepe-fdbcd1.netlify.app/",
    code_link: "https://github.com/samuelfs96/frontend-mentor-ec-product-page"
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
  
  // {
  //   title: "Good Practices App",
  //   description:
  //     `Esta es una aplicación para practicar los conceptos y principios de clean architecture, además del manejo de estado con redux.`,
  //   skills: ["html", "css", "javascript", "react", "material-ui", "redux", "style-components"],
  //   image: `${pro11}`,
  //   link: "https://euphonious-sable-a6025e.netlify.app/",
  //   code_link: "https://github.com/samuelfs96/good-practices-app"
  // },
  
  
];

export default proyects;
