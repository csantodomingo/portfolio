'use client'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
    </>
  );
}
