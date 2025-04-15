import React, { useState } from "react";
import { Card } from "flowbite-react";
import { div } from "motion/react-client";

const CardsComponent = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <div className="flex md:flex-row flex-col justify-evenly md:justify-self-auto justify-self-center md:gap-2 gap-12">
    
      <Card
        className="border-slate-800 xl:max-w-sm md:max-w-[275px] max-w-[450px] bg-black"
        imgAlt="Vision Images"
        imgSrc={hover ? "/redesign2.png" : "redesign.png"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex gap-3">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Vision Images
          </h5>
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-4xl"></i>
          <i className="devicon-framermotion-original colored text-4xl"></i>
        </div>
        <p className="font-normal text-gray-400 xl:text-base text-sm">
          Conceptualized, implemented, and updated an existing website into a
          visually engaging, responsive website design that showcased the
          photographer's portfolio and elevated their online presence.
        </p>
      </Card>
      
      <Card
        className="border-slate-800 xl:max-w-sm md:max-w-[275px] max-w-[450px] bg-black"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={hover2 ? "/cookware2.png" : "/cookware.png"}
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <div className="flex gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Cookware Website
          </h5>
          <i className="devicon-react-original-wordmark colored text-4xl"></i>
          <i className="devicon-tailwindcss-original colored text-4xl"></i>
        </div>
        <p className="font-normal text-gray-400">
          Shop interface and gallery with detailed product overviews and user
          friendly UI. Flowbite components and TailwindCSS styling.
        </p>
      </Card>

      <Card
        className="border-slate-800 xl:max-w-sm md:max-w-[275px] max-w-[450px] bg-black"
        imgAlt="Weather application"
        imgSrc={hover3 ? "/weatherapp2.png" : "/weatherapp.png"}
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <div className="flex gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            Rain Check
          </h5>
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <i className="devicon-nextjs-original-wordmark colored text-4xl"></i>
        </div>

        <p className="font-normal text-gray-400">
          Live weather application and 5-day forecast. Built with NEXT.js and
          OpenWeather API.
        </p>
      </Card>

    </div>
  );
};

export default CardsComponent;
