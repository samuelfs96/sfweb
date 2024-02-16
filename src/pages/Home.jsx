import About from "../components/Home/About"
import Intro from "../components/Home/Intro"
import Contact from "./Contact";
import Proyects from "./Proyects";

const Home = () => {
  return (
    <main className="bg-black">
      <Intro/>
      <About/>
      <Proyects/>
      <Contact/>
    </main>
  )
}

export default Home