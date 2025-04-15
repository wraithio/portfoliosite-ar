import React from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
import { Reveal4 } from "./Reveal4";
import { Reveal3 } from "./Reveal3";

const ExpComponent = () => {
  return (
    <div className="flex xl:flex-row xl:gap-0 gap-8 flex-col justify-center md:mx-24 mx-5">
      <div className="xl:w-[50%]">
        <div className="grid grid-cols-[auto_auto_auto] lg:gap-5 gap-0">
          <Reveal>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg sm:block hidden" id="about">
                Languages
              </h3>
              <div className="grid grid-cols-2 grid-rows-3 w-fit gap-3">
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-csharp-plain colored"></i>
                <i className="devicon-azuresqldatabase-plain colored"></i>
                <i className="devicon-html5-plain-wordmark colored"></i>
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
            </div>
          </Reveal>
          <Reveal2>
            <div className="flex flex-col gap-3">
              <h3 className="text-base sm:block hidden">Frameworks/Libraries</h3>
              <div className="grid grid-rows-3 grid-cols-2 w-fit gap-3">
                <i className="devicon-nextjs-original-wordmark"></i>
                <i className="devicon-react-original-wordmark colored"></i>
                <i className="devicon-tailwindcss-original colored"></i>
                <i className="devicon-framermotion-original"></i>
                <i className="devicon-bootstrap-plain colored"></i>
              </div>
            </div>
          </Reveal2>
          <Reveal3>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg sm:block hidden">Services</h3>
              <div className="grid grid-rows-2 w-fit gap-3">
                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
                <i className="devicon-azure-plain colored"></i>
              </div>
            </div>
          </Reveal3>
        </div>
      </div>
      <div className="xl:w-[50%]">
        <Reveal4>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:block hidden">Education</h3>
            <div>
              <h3 className="md:text-2xl text-base">
                <b>Cosumnes River College</b>
              </h3>
              <h3 className="md:text-xl text-sm">
                AS in Computer Science (CIS) - Spring 2025
              </h3>
            </div>
            <div>
              <h3 className="md:text-2xl text-base">
                <b>Sacramento State</b>
              </h3>
              <h3 className="md:text-xl text-sm">
                pursuing BS in Computer Science - Spring 2026
              </h3>
            </div>
            <div>
              <h3 className="md:text-2xl text-base">
                <b>Codestack Academy</b>
              </h3>
              <h3 className="md:text-xl text-sm">
                certificate in software development through San Joaquin County
                Office of Education
              </h3>
            </div>
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
          </div>
        </Reveal4>
      </div>
    </div>
  );
};

export default ExpComponent;
