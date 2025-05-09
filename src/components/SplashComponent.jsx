// import React from "react";
// import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
// import { Reveal3 } from "./Reveal3";
import { Reveal4 } from "./Reveal4";
import { RevealFull } from "./RevealFull";

const SplashComponent = () => {
  return (
    <section className="cursor-default min-h-[110vh] flex flex-col place-items-center bg-[url(/blackmountain.jpg)] bg-cover justify-center">
      <Reveal2>
        <div className="flex justify-center gap-2 mt-24 cursor-none">
          <img
            src="/wave.webp"
            alt="wave emoji"
            className="w-10 animate-bounce"
          />
          <h3 className="md:text-3xl flex md:gap-2 gap-1">
            Hi there, I'm <p className="text-emerald-200 font-bold">Aaron</p>.
          </h3>
        </div>
      </Reveal2>
      <div className="flex text-center flex-col gap-2 mb-24">
        <RevealFull>
          <h1 className="md:text-6xl text-4xl font-[Cormorant] mx-2 my-4">
            I create <b>art</b> with my mouse and keyboard
          </h1>
        </RevealFull>
        <Reveal4>
          <h3 className="md:text-3xl text-lg mx-5">
            fullstack web developer versed in backend, frontend development
            and UI/UX Design
          </h3>
        </Reveal4>
      </div>
    </section>
  );
};

export default SplashComponent;
