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
        <div className="flex justify-center gap-2 mt-24 mb-4">
          <img
            src="/wave.webp"
            alt="wave emoji"
            className="w-10 animate-wiggle"
          />
          <h3 className="text-3xl">Hi there.</h3>
        </div>
      <div className="flex text-center flex-col gap-2 mb-24">

        <h1 className="text-6xl">I help people's dreams become reality</h1>
        {/* <CarouselComponent/> */}
      </div>
      <div className="bg-white bg-opacity-20 justify-self-center w-[80%] animate-fade3">
        <div className="flex justify-center backdrop-blur-sm  p-2">
          Something here
        </div>
      </div>
    </div>
  );
}

export default App;
