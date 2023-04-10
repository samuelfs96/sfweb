import { useEffect } from "react";
import About from "../components/Home/about"
import Intro from "../components/Home/intro"

const Home = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <>
      <Intro/>
      <About/>
    </>
  )
}

export default Home