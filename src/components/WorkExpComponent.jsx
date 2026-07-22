import React from 'react'
import { Reveal4 } from './Reveal4'
import { RevealFull } from './RevealFull'

const WorkExpComponent = () => {
  return (
    <div className="relative md:min-h-[30vh] min-h-[15vh] text-end">
        <div className="w-80 opacity-30 absolute left-28 bottom-0 z-0">
            <Reveal4>
                <img src="/codestacklogo.png" alt="Codestack Logo"/>
            </Reveal4>
        </div>
        <div className="md:mx-24 mx-5 relative z-10">
            <RevealFull>
                <h1 className="md:text-5xl text-2xl text-end">
                    Currently:
                    <span className="md:text-3xl text-xl"> Web Developer - Codestack </span>
                    <i className="text-xl">San Joaquin County Office of Education</i>
                </h1>
            </RevealFull>
            <RevealFull>
                <ul className="p-4 md:text-2xl text-lg">
                    <li className="list-item list-disc list-inside">Engineer and maintain responsive web applications for a diverse portfolio of clients nationwide using a modern full-stack transition.</li>
                    <li className="list-item list-disc list-inside">Improved site performance and SEO by optimizing front-end components and streamlining back-end database queries.</li>
                </ul>
            </RevealFull>
            <a href="https://codestack.org/" target="_blank" className="text-gray-400 w-24" title="Visit Codestack">
                learn more about Codestack
            </a>
        </div>
    </div>
  )
}

export default WorkExpComponent