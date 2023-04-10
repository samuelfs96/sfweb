import { useEffect } from "react";
import About from "../components/Home/About"
import Intro from "../components/Home/Intro"

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