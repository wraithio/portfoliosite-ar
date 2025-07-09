// import React from "react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Reveal2 } from "./Reveal2";
import { Reveal4 } from "./Reveal4";
import { Reveal3 } from "./Reveal3";
import { RevealFull } from "./RevealFull";

const ExpComponent = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <div
      className="flex xl:flex-row xl:gap-4 gap-8 flex-col justify-center md:py-14 mx-5"
      id="about"
    >
      <div className="xl:w-[50%]">
        <div className="flex flex-col gap-4">
          <RevealFull>
            <div className="relative flex flex-col gap-3 z-30">
              <h3 className="text-lg sm:block hidden">Languages</h3>
              <h3 className="text-2xl sm:hidden block">Tech Stack</h3>
              <section
                className="animate-loop-scroll"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="group">
                  <i className="custom-hover-effect devicon-typescript-plain colored cursor-pointer relative">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Typescript
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-javascript-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Javascript
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-csharp-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            CSharp
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-azuresqldatabase-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            SQL Server
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-html5-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            HTML
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-css3-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Cascading Style Sheets
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                </div>
                <div aria-hidden className="group">
                  <i className="custom-hover-effect devicon-typescript-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Typescript
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-javascript-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Javascript
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-csharp-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            CSharp
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-azuresqldatabase-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            SQL Server
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-html5-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            HTML
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-css3-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Cascading Style Sheets
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                </div>
              </section>
            </div>
          </RevealFull>
          <RevealFull>
            <div className="relative flex flex-col gap-3 z-30">
              <h3 className="text-base sm:block hidden">
                Frameworks/Libraries/Services
              </h3>

              <section
                className="animate-loop-scroll"
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
              >
                <div className="group-reverse">
                  <i className="custom-hover-effect devicon-nextjs-original-wordmark cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            next.js
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-react-original colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            React
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-tailwindcss-original colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Tailwind CSS
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-framermotion-original cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Framer
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-bootstrap-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Bootstrap
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-amazonwebservices-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Amazon AWS
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-azure-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Microsoft Azure
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                  <div className="w-[100px]">
                  <img src="/sendgrid.png" alt="send grid logo" className="w-[100px] custom-hover-effect cursor-pointer" />
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            SendGrid
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </div>
                </div>

                <div aria-hidden className="group-reverse">
                  <i className="custom-hover-effect devicon-nextjs-original-wordmark cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            next.js
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-react-original colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            React
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-tailwindcss-original colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Tailwind CSS
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-framermotion-original cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Framer
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-bootstrap-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Bootstrap
                          </p>
                        </Reveal>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-amazonwebservices-plain-wordmark colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal2>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Amazon AWS
                          </p>
                        </Reveal2>
                      )}
                    </div>
                  </i>
                  <i className="custom-hover-effect devicon-azure-plain colored cursor-pointer">
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal3>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            Microsoft Azure
                          </p>
                        </Reveal3>
                      )}
                    </div>
                  </i>
                    <div className="w-[100px]">
                  <img src="/sendgrid.png" alt="send grid logo" className="w-[100px] h-24 custom-hover-effect cursor-pointer" />
                    <div className="h-10 flex justify-center mt-1">
                      {hover2 && (
                        <Reveal4>
                          <p
                            className={`text-gray-300 text-center text-sm font-[Raleway]`}
                          >
                            SendGrid
                          </p>
                        </Reveal4>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </RevealFull>
        </div>
      </div>
      <div className="xl:w-[50%]">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h3 className="md:text-lg text-2xl">Education</h3>
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
