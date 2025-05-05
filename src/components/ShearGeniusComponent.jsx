import React from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
import { Reveal3 } from "./Reveal3";
import { Reveal4 } from "./Reveal4";

const ShearGeniusComponent = () => {
  return (
    <section className="bg">
      <svg className="bg-black to-transparent rounded-[50%/100%] rounded-t-none w-full sm:h-[150px] h-[75px]"></svg>
      {/* <svg className="bg-gradient-to-b from-[#181b1b] to-transparent w-full"></svg> */}

      <Reveal3>
        <img
          src="/SGsplash.png"
          alt="shear genius website"
          className="w-fit px-3"
          id="work"
        />
      </Reveal3>
      <div className="backdrop-blur-sm bg-gradient-to-b from-transparent to-black py-3">
        <div className="flex justify-center flex-col  md:mx-24 mx-5">
          <Reveal>
            <div className="flex sm:flex-row flex-col sm:gap-3">
              <div>

              <h2 className="sm:text-5xl text-3xl mb-2">ShearGenius</h2>
              </div>
              <div className="flex gap-2">

              <i className="devicon-typescript-plain sm:text-5xl text-2xl"></i>
              <i className="devicon-azure-plain sm:text-5xl text-2xl"></i>
              <i className="devicon-nextjs-original-wordmark sm:text-5xl text-2xl"></i>
              </div>
            </div>
          </Reveal>

          <div className="w-[90%] p-4">
            <div className="grid grid-rows-[repeat(2,auto)] grid-cols-2 md:text-2xl text-sm gap-2">
              <Reveal2>
                <li>
                  Created a database for login functionality, account
                  information, schedule tracking, and media posts with SQL,
                  hosted on Azure
                </li>
              </Reveal2>
              <Reveal3>
                <li>
                  Allows users to create, save, comment on posts and schedule
                  appointments with barbers in-app
                </li>
              </Reveal3>
              <Reveal1>
                <li>Leading a small team in fullstack development</li>
              </Reveal1>
              <Reveal4>
                <li>Virtual barber with Deepseek R1.</li>
              </Reveal4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShearGeniusComponent;
