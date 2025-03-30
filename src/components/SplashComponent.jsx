import React from "react";
import { Reveal } from "./Reveal";

const SplashComponent = () => {
  return (
    <section className="cursor-default min-h-screen flex flex-col place-content-center">
      <Reveal>
        <div className="flex justify-center gap-2 mt-24 hover:cursor-default">
          <img
            src="/wave.webp"
            alt="wave emoji"
            className="w-10 animate-bounce"
          />
          <h3 className="text-3xl">Hi there, I'm Aaron.</h3>
        </div>
        <div className="flex text-center flex-col gap-2 mb-24">
          <h1 className="text-6xl font-[Cormorant] my-4">
            I create <b>art</b> with my mouse and keyboard
          </h1>
          <h3 className="text-3xl">
            fullstack web developer versed in both backend and frontend
            development
          </h3>
        </div>
      </Reveal>
    </section>
  );
};

export default SplashComponent;
