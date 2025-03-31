import React from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
import { Reveal4 } from "./Reveal4";
import { Reveal3 } from "./Reveal3";

const ExpComponent = () => {
  return (
    <div className="flex justify-center mx-24">
      <div className="w-[50%]">
        <div className="grid grid-cols-3">
          <Reveal>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl italic" id="about">
                Languages
              </h3>
              <div className="grid grid-cols-2 grid-rows-3 w-fit gap-3">
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-csharp-plain"></i>
                <i className="devicon-azuresqldatabase-plain"></i>
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-css3-plain-wordmark"></i>
              </div>
            </div>
          </Reveal>
          <Reveal2>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl italic">Frameworks</h3>
              <div className="grid grid-rows-2 grid-cols-2 w-fit gap-3">
                <i className="devicon-nextjs-original-wordmark"></i>
                <i className="devicon-react-original-wordmark"></i>
                <i className="devicon-tailwindcss-original"></i>
                <i className="devicon-framermotion-original"></i>
              </div>
            </div>
          </Reveal2>
          <Reveal3>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl italic">Services</h3>
              <div className="grid grid-rows-2 w-fit gap-3">
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
                <i className="devicon-azure-plain"></i>
              </div>
            </div>
          </Reveal3>
        </div>
      </div>
      <div className="w-[50%]">
        <Reveal4 delay={4}>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl italic ">Education</h3>
            <div>
              <h3 className="text-2xl">
                <b>Cosumnes River College</b>
              </h3>
              <h3 className="itali text-xlc">
                AS in Computer Science (CIS) - Spring 2025
              </h3>
            </div>
            <div>
              <h3 className="text-2xl">
                <b>Sacramento State</b>
              </h3>
              <h3 className="italic text-xl">
                pursuing BS in Computer Science - Spring 2026
              </h3>
            </div>
            <div>
              <h3 className="text-2xl">
                <b>Codestack Academy</b>
              </h3>
              <h3 className="italic text-xl">
                certificate in software development through San Joaquin County
                Office of Education
              </h3>
            </div>
            <div>
              <h3 className="text-2xl">
                <b>AWS Foundational Cloud Practitioner Certificate</b>
              </h3>
              <h3 className="italic text-xl">
                demonstrates foundational knowledge of AWS Cloud concepts,
                including core services, security, architecture, billing, and
                support
              </h3>
            </div>
          </div>
        </Reveal4>
      </div>
    </div>
  );
};

export default ExpComponent;
