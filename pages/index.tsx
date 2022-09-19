import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <Hero />
        <AboutMe />
        <Projects />
      </Head>
    </>
  );
};

export default Home;
