// import React from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
// import { Reveal4 } from "./Reveal4";
import { Reveal3 } from "./Reveal3";
import { RevealFull } from "./RevealFull";

const ExpComponent = () => {
  return (
    <div className="flex xl:flex-row xl:gap-4 gap-8 flex-col justify-center md:py-14 mx-5" id="about">
      <div className="xl:w-[50%]">
        <div className="flex flex-col gap-4">
          <RevealFull>
            <div className="relative flex flex-col gap-3 z-30">
              <h3 className="text-lg sm:block hidden">Languages</h3>
              <section className="animate-loop-scroll">
                <div className="group">
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-typescript-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-javascript-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-csharp-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-azuresqldatabase-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-html5-plain-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-css3-plain-wordmark colored cursor-pointer"></i>
                </div>
                <div aria-hidden className="group">
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-typescript-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-javascript-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-csharp-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-azuresqldatabase-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-html5-plain-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-css3-plain-wordmark colored cursor-pointer"></i>
                </div>
              </section>
            </div>
          </RevealFull>
          <RevealFull>
            <div className="relative flex flex-col gap-3 z-30">
              <h3 className="text-base sm:block hidden">
                Frameworks/Libraries/Services
              </h3>

              <section className="animate-loop-scroll">
                <div className="group-reverse">
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-nextjs-original-wordmark cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-react-original-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-tailwindcss-original colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-framermotion-original cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-bootstrap-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-amazonwebservices-plain-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-azure-plain colored cursor-pointer"></i>
                </div>

                <div aria-hidden className="group-reverse">
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-nextjs-original-wordmark cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-react-original-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-tailwindcss-original colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-framermotion-original cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-bootstrap-plain colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-amazonwebservices-plain-wordmark colored cursor-pointer"></i>
                  <i className="py-1 hover:scale-110 transition-transform duration-300 hover:[&~*_.animate-loop-scroll]:[animation-play-state:paused] devicon-azure-plain colored cursor-pointer"></i>
                </div>
              </section>

              {/* <div className="grid grid-rows-3 grid-cols-2 w-fit gap-3">
                <i className="devicon-nextjs-original-wordmark"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-tailwindcss-original colored"></i>
                <i className="devicon-framermotion-original"></i>
                <i className="devicon-bootstrap-plain colored"></i>
              </div> */}
            </div>
          </RevealFull>
          {/* <Reveal3>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg sm:block hidden">Services</h3>
              <div className="grid grid-rows-2 w-fit gap-3">
                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
                <i className="devicon-azure-plain colored"></i>
              </div>
            </div>
          </Reveal3> */}
        </div>
      </div>
      <div className="xl:w-[50%]">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:block hidden">Education</h3>
            <Reveal2>
              <div>
                <h3 className="md:text-2xl text-base">
                  <b>Cosumnes River College</b>
                </h3>
                <h3 className="md:text-xl text-sm">
                  AS in Computer Science (CIS) - Spring 2025
                </h3>
              </div>
            </Reveal2>
            <Reveal3>
              <div>
                <h3 className="md:text-2xl text-base">
                  <b>Sacramento State</b>
                </h3>
                <h3 className="md:text-xl text-sm">
                  pursuing BS in Computer Science - Spring 2026
                </h3>
              </div>
            </Reveal3>
            <Reveal2>
              <div>
                <h3 className="md:text-2xl text-base">
                  <b>Codestack Academy</b>
                </h3>
                <h3 className="md:text-xl text-sm">
                  certificate in software development through San Joaquin County
                  Office of Education
                </h3>
              </div>
            </Reveal2>
            <Reveal3>
              <div>
                <h3 className="md:text-2xl text-base">
                  <b>AWS Foundational Cloud Practitioner Certificate</b>
                </h3>
                <h3 className="md:text-xl text-sm">
                  demonstrates foundational knowledge of AWS Cloud concepts,
                  including core services, security, architecture, billing, and
                  support
                </h3>
              </div>
            </Reveal3>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ExpComponent;
