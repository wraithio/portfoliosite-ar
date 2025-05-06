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
import CardsComponent from "./components/CardsComponent";

function App() {
  return (
    <div className="min-h-screen text-white font-[Raleway] relative z-0">
      <div className="relative z-50">
        <NavbarComponent />
      </div>

      <section>
        <SplashComponent />
      </section>

      <ExpComponent />
      {/* <svg className="bg-gradient-to-t from-transparent to-black w-full"></svg> */}

      <div className="md:min-h-[60vh] min-h-[40vh] flex place-items-center relative mt-4">
        <div className="flex flex-col">
          <div className="flex justify-center relative">
            <div className="absolute top-0 md:right-[15%] right-0">
              <Reveal>
                <div className="w-[150px] h-[150px] flex place-items-center justify-center">
                  <img
                    src="/dotgrid.png"
                    alt="dot grid"
                    className="w-20 animate-[ping_3s_infinite_linear]"
                  />
                </div>
              </Reveal>
            </div>

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
                <h4 className="text-left">
                  {" "}
                  1. a software engineer who can design, build, and maintain
                  both the front-end and back-end of a web application or
                  website
                </h4>
              </Reveal2>
            </div>
          </div>
          {/* <CubeComponent/> */}
          <Reveal>
            <div className="flex justify-center">
              <h1 className="md:text-3xl text-xl flex font-[Cormarant] my-4 md:w-[70%] mx-5 md:leading-[40px]">
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
        <div className="flex gap-3 text-base">
          <a href="https://github.com/wraithio">
            <i className="devicon-github-original text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/aaron-robinson-dev/">
            <i className="devicon-linkedin-plain text-white"></i>
          </a>
          <a href="mailto:aarmon5@gmail.com">
            <i className="devicon-blazor-original"></i>
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

        <div className="flex flex-col text-3xl my-2">
          <p>Aaron Robinson</p>
          <p>aarmon5@gmail.com</p>
          <p>&#40;916&#41;895-3713</p>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

export default App;
