import React from 'react'

const SplashComponent = () => {
  return (
    <section className="cursor-default min-h-screen flex flex-col place-content-center">
    <div className="flex justify-center gap-2 mt-24 hover:cursor-default animate-bounce">
      <img
        src="/wave.webp"
        alt="wave emoji"
        className="w-10 animate-wiggle"
      />
      <h3 className="text-3xl">Hi there, I'm Aaron.</h3>
    </div>
    <div className="flex text-center flex-col gap-2 mb-24 animate-fade">
      <h1 className="text-6xl font-[Cormorant] my-4">
        I create <b>art</b> with my mouse and keyboard
      </h1>
      <h3 className="text-3xl">
        fullstack web developer versed in both backend and frontend
        development
      </h3>
    </div>
  </section>
  )
}

export default SplashComponent