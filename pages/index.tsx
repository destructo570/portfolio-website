import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
};

export default Home;
