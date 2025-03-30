import React from 'react'
import { Reveal } from './Reveal'
import { Reveal2 } from './Reveal2'
import { Reveal3 } from './Reveal3'
import { Reveal4 } from './Reveal4'

const ShearGeniusComponent = () => {
  return (
          <section className="bg relative">
            <svg className="bg-[#181b1b] to-transparent w-full absolute top-[-1px]"></svg>
            <svg className="bg-gradient-to-b from-transparent to-[#181b1b] w-full absolute bottom-[-1px]"></svg>
            <div className="justify-self-center w-[90%]">
              <Reveal>
                <h2 className="text-5xl mb-2">ShearGenius</h2>
              </Reveal>
            </div>
            <Reveal3>
              <img src="/SGsplash.png" alt="" className="w-fit" />
            </Reveal3>
            <div className="flex justify-center backdrop-blur-sm">
              <div className="w-[90%] p-4">
                <div className="grid grid-rows-[repeat(2,auto)] grid-cols-2 text-2xl gap-2">
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
                  <Reveal4>
                    <li>Leading a small team in fullstack development</li>
                  </Reveal4>
                </div>
              </div>
            </div>
          </section>
  )
}

export default ShearGeniusComponent