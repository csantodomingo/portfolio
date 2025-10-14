'use client'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
