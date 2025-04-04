import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import SplashComponent from "./components/SplashComponent";
// import { motion } from "motion/react";
import { FooterComponent } from "./components/FooterComponent";
import { Reveal } from "./components/Reveal";
import ExpComponent from "./components/ExpComponent";
import { Reveal2 } from "./components/Reveal2";
import { Reveal3 } from "./components/Reveal3";
import { Reveal4 } from "./components/Reveal4";
import ShearGeniusComponent from "./components/ShearGeniusComponent";
import CubeComponent from "./components/CubeComponent";
import CardsComponent from "./components/CardsComponent";

function App() {
  return (
    <div className="min-h-screen text-white font-[Raleway] relative z-0">
      <div className="relative z-30">
        <NavbarComponent />
      </div>

      <section>
        <SplashComponent />
      </section>
      <ExpComponent />
      {/* <svg className="bg-gradient-to-t from-transparent to-black w-full"></svg> */}

      <div className="md:min-h-[100vh] min-h-[50vh] flex  place-items-end relative">
        <div className="absolute md:top-36 top-16 md:right-24 right-8">
          <Reveal>
            <div className="md:w-[200px] md:h-[200px] h-[100px] w-[100px] flex place-items-center justify-center">
              <img
                src="/dotgrid.png"
                alt="dot grid"
                className="md:w-20 w-12 animate-[ping_6s_infinite_linear]"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">

        
          <div className="grid grid-cols-[auto_auto_auto] gap-1 text-[10px]  text-center w-fit mx-5">
            <Reveal4>
              <b>full•stack de•vel•op•er</b>
            </Reveal4>
            <Reveal3>
              <div className="flex gap-1">
                <p className="italic">[ fo͝ol-stak dəˈveləpər ]</p>
                <p className="text-emerald-200">noun</p>
              </div>
            </Reveal3>
            <Reveal2>
              <h4>
                {" "}
                1. a software engineer who can design, build, and maintain both
                the front-end and back-end of a web application or website
              </h4>
            </Reveal2>
          </div>
            </div>
          {/* <CubeComponent/> */}
          <Reveal>
            <div className="flex justify-center">
              <h1 className="md:text-5xl text-xl flex font-[Cormarant] my-4 md:w-[70%] mx-5 md:leading-[60px]">
                Passionate and diligent fullstack developer with a proven
                ability to optimize systems and a strong drive for crafting
                efficient, scalable solutions.
              </h1>
            </div>
          </Reveal>
        </div>
      </div>

      <ShearGeniusComponent />

      {/* <section>
          <div>
            <iframe
              class="pdf"
              src="/resume2025SD2.pdf"
              width="800"
              height="500"
            ></iframe>
          </div>
        </section> */}

    
        <CardsComponent />
     

      <section className="mx-24 my-24">
        <Reveal>
          <h2 className="text-5xl mb-2" id="contact">
            Connect With Me
          </h2>
        </Reveal>
        <div className="flex gap-3">
          <a href="https://github.com/wraithio">
            <i className="devicon-github-original text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/aaron-robinson-dev/">
            <i className="devicon-linkedin-plain text-white"></i>
          </a>
          <a href="mailto:aarmon5@gmail.com">
            <img src="/mail.svg" alt="mail icon" className="w-16" />
          </a>
        </div>
        <div className="flex gap-1">
          <Reveal2>
            <h3 className="text-xl">view my resume</h3>
          </Reveal2>
          <a
            href="https://tr.ee/C9SrLCD8f7"
            className="cursor-pointer w-fit"
            target="_blank"
          >
            <h3 className="text-xl text-emerald-200 cursor-pointer">here</h3>
          </a>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default App;
