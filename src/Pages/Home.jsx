import { Element } from "react-scroll";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import CookieBanner from "../Components/CookieBanner";
// import Raindrop from "../Components/Raindrop/Raindrop";

const Home = () => {
  return (
    <div className="h-auto">
      {/* <Raindrop /> */}
      <Element name="Hero" id="Hero">
        <Hero />
      </Element>
      <Element name="Projects" id="Projects">
        <Projects />
      </Element>
      <Element name="Contact" id="Contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
