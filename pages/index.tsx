import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Home;
