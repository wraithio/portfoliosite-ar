import React, { useState } from "react";
import { Card } from "flowbite-react";
import { div } from "motion/react-client";

const CardsComponent = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex justify-evenly gap-12">
    
      <Card
        className="xl:max-w-sm max-w-[275px]"
        imgAlt="Vision Images"
        imgSrc={hover ? "/redesign2.png" : "redesign.png"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex gap-3">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vision Images
          </h5>
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <i className="devicon-css3-plain-wordmark colored text-4xl"></i>
          <i className="devicon-framermotion-original colored text-4xl"></i>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400 xl:text-base text-sm">
          Conceptualized, implemented, and updated an existing website into a
          visually engaging, responsive website design that showcased the
          photographer's portfolio and elevated their online presence.
        </p>
      </Card>
      
      <Card
        className="xl:max-w-sm max-w-[275px]"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={hover ? "/cookware2.png" : "/cookware.png"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cookware Website
          </h5>
          <i className="devicon-react-original-wordmark colored text-4xl"></i>
          <i className="devicon-tailwindcss-original colored text-4xl"></i>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Shop interface and gallery with detailed product overviews and user
          friendly UI. Flowbite components and TailwindCSS styling.
        </p>
      </Card>

      <Card
        className="xl:max-w-sm max-w-[275px]"
        imgAlt="Weather application"
        imgSrc={hover ? "/weatherapp2.png" : "/weatherapp.png"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex gap-2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rain Check
          </h5>
          <i className="devicon-javascript-plain colored text-4xl"></i>
          <i className="devicon-nextjs-original-wordmark colored text-4xl"></i>
        </div>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Live weather application and 5-day forecast. Built with NEXT.js and
          OpenWeather API.
        </p>
      </Card>

    </div>
  );
};

export default CardsComponent;
