import { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import SplashComponent from "./components/SplashComponent";
import { motion } from "motion/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen text-white font-[Raleway]">
      <NavbarComponent />
      <SplashComponent />

      <section className="bg-white bg-opacity-15 justify-self-center w-[80%] p-2">
        <h2>Experience</h2>
        <div className="flex">
          <div className="w-[65%]">
            <div className="grid grid-cols-3">
              <div className="flex-col">
                <h3>Languages</h3>
                <div className="grid grid-cols-3 grid-rows-2 w-fit gap-2">
                  <i className="devicon-typescript-plain"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-csharp-plain"></i>
                  <i className="devicon-azuresqldatabase-plain"></i>
                  <i className="devicon-html5-plain-wordmark"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                </div>
              </div>
              <div className="flex flex-col">
                <h3>Frameworks</h3>
                <div className="grid grid-rows-2 grid-cols-2 w-fit gap-2">
                  <i className="devicon-nextjs-original-wordmark"></i>
                  <i className="devicon-react-original-wordmark"></i>
                  <i className="devicon-tailwindcss-original"></i>
                  <i className="devicon-framermotion-original"></i>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="w-fit">Services</h3>
                <div className="grid grid-rows-2 w-fit gap-2">
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                  <i className="devicon-azure-plain"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="flex flex-col">
              <h3>Education</h3>
              <div className="mb-2">
                <h3>Cosumnes River College</h3>
                <h3 className="italic">AS in Computer Science (CIS)</h3>
              </div>
              <div>
                <h3>Sacramento State</h3>
                <h3 className="italic">pursuing BS in Computer Science</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1">
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

      <div className="min-h-[80vh] flex place-items-center text-center">
      <h3 className="text-3xl">Passionate and diligent fullstack developer with a proven ability to optimize systems and a strong drive for
      crafting efficient, scalable solutions.</h3>  
      </div>
  
      <section className="bg-white bg-opacity-25 justify-self-center w-[80%]"></section>
    </div>
  );
}

export default App;
