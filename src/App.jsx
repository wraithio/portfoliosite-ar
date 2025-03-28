import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import { Carousel } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen text-white font-[Raleway]">
      <NavbarComponent />
      {/* splash */}
        <div className="flex justify-center gap-2 mt-24 animate-fade">
          <img
            src="/wave.webp"
            alt="wave emoji"
            className="w-10 animate-wiggle"
          />
          <h3 className="text-3xl">Hi there, I'm Aaron.</h3>
        </div>
      <div className="flex text-center flex-col gap-2 mb-24 animate-fade">

        <h1 className="text-6xl font-[Cormorant] my-4">I create art with my mouse and keyboard</h1>
        <h3 className="text-3xl">fullstack web developer: versed in both backend and frontend development</h3>
        {/* <CarouselComponent/> */}
      </div>
      <div className="bg-white bg-opacity-20 filter justify-self-center w-[80%]">
        <div className="flex justify-center p-2">
          <div className="flex gap-1">
            <h3 className="text-xl">
              view my resume
            </h3>
            <a href="https://tr.ee/C9SrLCD8f7" className="cursor-pointer w-fit" target="_blank">

            <h3 className="text-xl text-emerald-200">
              here
            </h3>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
