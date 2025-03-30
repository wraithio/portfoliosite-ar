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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen text-white font-[Raleway]">
      <section className="fixed w-full top-0">
        <NavbarComponent />
      </section>

      <section className="bg-black">
        <SplashComponent />
        <ExpComponent />
      </section>
      <svg className="bg-gradient-to-t from-transparent to-black w-full"></svg>
      <div className="min-h-[70vh] flex place-items-center">
        <Reveal3>
          <div className="flex justify-center text-center">
            <h1 className="text-5xl flex font-[Cormarant] my-4 w-[70%] leading-[60px]">
              Passionate and diligent fullstack developer with a proven ability
              to optimize systems and a strong drive for crafting efficient,
              scalable solutions.
            </h1>
          </div>
        </Reveal3>
      </div>

      <ShearGeniusComponent />
      <Reveal>
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
        <section className="w-[90%] justify-self-center my-3">
          <div className="flex gap-2">
            <h3 className="text-xl">view my resume</h3>
            <a
              href="https://tr.ee/C9SrLCD8f7"
              className="cursor-pointer w-fit"
              target="_blank"
            >
              <h3 className="text-xl text-emerald-200">here</h3>
            </a>
          </div>
        </section>
      </Reveal>

      <FooterComponent />
    </div>
  );
}

export default App;
