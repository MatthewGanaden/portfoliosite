import video from '../assets/HomeBG.webm'
import Image from 'next/image'
import menu from '../assets/menu.svg'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-8 box-border mx-11 my-6 px-14 rounded-3xl bg-neutral-900 relative z-50 h-[calc(100vh-3rem)]">
        <div className="flex justify-between items-center pt-6">
          <Image src={`/logo.png`} width={1080} height={1080} className="h-9 sm:h-14 mr-20 w-max" alt="Flowbite React Logo"/>
            <div>
              <ul className="hidden lg:flex gap-16">
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
              </ul>
            </div>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">Download Resume</div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </div>
            </button>
                
            </div>
                <div className="flex gap-10 items-center justify-between pt-32">
                    <h1 className="font-bold text-4xl leading-none max-w-md">Full Stack Developer</h1>
                    <span className="hidden lg:block text-xl leading-tight max-w-md">I like to challenge myself through developing websites, enhancing my skills and satisfying client needs and requirements</span>
                </div>

                <div className="border-box bg-gray-200 overflow-hidden rounded-3xl relative flex justify-center h-lvh">
                    <video className="absolute z-0 top-0 left-0 size-full object-cover" autoPlay loop muted>
                        <source src={video} type="video/webm"/>
                    </video>
                    <Image src={`/MattFace.png`} alt="logo" width={1000} height={1000} className="z-10 sticky w-max h-full"/>
                </div>

                <div className="flex justify-between pb-6">
                    <div className="flex flex-col">
                        <span>Designing,</span>
                        <span>Coding</span>
                    </div>

                    <div className="gap-5 text-base lg:flex lg:items-center text-primarytext ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                    </div>

                    <div>
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">mjdganaden@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-20 justify-between items-center m-24">
                <span className="text-xl max-w-xl">I am a fresh graduate mostly involved in developing both back-end and front-end of our projects, making our designs come to life.</span>
                <a href="" className="group relative inline-flex p-5 items-center justify-center rounded-full border px-6 font-medium text-neutral-200 text-xl overflow-hidden transition-all duration-300 ease-in-out hover:text-neutral-900">
                    <span className="relative z-10">About Me</span>
                    <div className="relative z-10 ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                    </span>
                </a>
            </div>
            <div className="flex flex-col items-center m-24">
                <span className="font-semibold text-3xl text-green-500">What I do</span>
                <div className="flex flex-row flex-grow gap-5">
                    <div className="bg-neutral-900 rounded-3xl p-11">
                        <div className="pt-64 pr-14 pb-6">
                            <Image src={`/Design.svg`} alt="design" width={1000} height={1000} className="w-max"/>
                            <h2 className="text-2xl font-bold text-pink-400">Design</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                    <div className="bg-neutral-900 rounded-3xl p-11">
                        <div className="pt-64 pr-14 pb-6">
                          <Image src={`/Code.svg`} alt="code" width={1000} height={1000} className="w-max"/>
                            <h2 className="text-2xl font-bold text-green-500">Code</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                    <div className="bg-neutral-900 rounded-3xl p-11">
                        <div className="pt-64 pr-14 pb-6">
                          <Image src={`/Test.svg`} alt="test" width={1000} height={1000} className="w-max"/>
                            <h2 className="text-2xl font-bold text-sky-600">Test</h2>
                            <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pb-6">
                <span className="font-semibold text-3xl text-green-500 text-center">Techstack</span>
                <span className="text-center text-xl max-w-xl m-auto">As a Full-stack Developer, I use various technologies to meet requirements</span>
            </div>

            <div className="flex overflow-hidden space-x-6">
                <div className="flex space-x-6 animate-loop-scroll pb-6">
                    <Image src={`/tech/Figma.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/AE.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/PremierePro.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/Vue.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/HTML.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/CSS.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/Javascript.svg`} alt="design" width={427} height={221} className="w-max"/>
                    <Image src={`/tech/Wordpress.svg`} alt="design" width={427} height={221} className="w-max"/>
                </div>
                <div className="flex space-x-6 animate-loop-scroll pb-6" aria-hidden="true">
                  <Image src={`/tech/Figma.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/AE.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/PremierePro.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Vue.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/HTML.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/CSS.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Photoshop.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Wordpress.svg`} alt="design" width={427} height={221} className="w-max"/>
                </div>
            </div>

            <div className="flex overflow-hidden space-x-6">
                <div className="flex space-x-6 animate-reverse-loop-scroll pb-6">
                  <Image src={`/tech/Java.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Python.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/C.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/C++.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Git.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Selenium.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Javascript.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Arduino.svg`} alt="design" width={427} height={221} className="w-max"/>
                </div>
                <div className="flex space-x-6 animate-reverse-loop-scroll pb-6" aria-hidden="true">
                  <Image src={`/tech/Java.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Python.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/C.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/C++.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Git.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Selenium.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Javascript.svg`} alt="design" width={427} height={221} className="w-max"/>
                  <Image src={`/tech/Arduino.svg`} alt="design" width={427} height={221} className="w-max"/>
                </div>
            </div>

            <div className="flex flex-col gap-6 m-24">
                <span className="font-semibold text-3xl">Projects</span>
                <div className="flex gap-8 p-14 rounded-3xl bg-neutral-900 w-full justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-2xl text-sky-600">DDStudios</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>

                        <a href="https://ddstudiosph.com/" target="_blank" className="mt-5 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-700 px-6 font-medium w-36 transition-colors duration-300 ease-in-out hover:text-neutral-900">
                            <span className="relative z-10">Visit Site</span>
                            <div className="relative z-10 w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </a>
                                            
                    </div>
                    <div className="flex flex-col text-right">
                        <h3 className="font-bold text-xl">Development & Deployment</h3>
                        <span>Wordpress</span>
                    </div>
                </div>
                <div className="flex gap-8 p-14 rounded-3xl bg-neutral-900 w-full justify-between items-center">
                    <div className="flex flex-col">
                        <h2 className="font-bold text-2xl text-sky-600">MatthewGanaden</h2>
                        <span>Started from photo manipulation and video editing to designing web and mobile applications</span>
                        
                        <a href="" className="mt-5 group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-700 px-6 font-medium w-36 transition-colors duration-300 ease-in-out hover:text-neutral-900">
                            <span className="relative z-10">Visit Site</span>
                            <div className="relative z-10 w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                        </a>
                    </div>
                    <div className="flex flex-col text-right">
                        <h3 className="font-bold text-xl">Development & Deployment</h3>
                        <span>React, Figma, Photoshop, After Effects, Premiere Pro</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col m-24 lg:flex-row">
                <span className="font-semibold text-3xl">Awards</span>
                <div className="flex flex-col w-full pt-10 lg:pl-36">
                    <div className="grid grid-cols-[3fr_3fr_1fr] px-10 pb-4 border-b">
                        <span>Name</span>
                        <span>Agency</span>
                        <span className="justify-self-end">Date</span>
                    </div>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-neutral-900">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="flex flex-col m-24 lg:flex-row">
                <span className="font-semibold text-3xl">Certificates</span>
                <div className="flex flex-col w-full pt-10 lg:pl-36">
                    <div className="grid grid-cols-[3fr_3fr_1fr] px-10 pb-4 border-b">
                        <span>Name</span>
                        <span>Agency</span>
                        <span className="justify-self-end">Date</span>
                    </div>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                    <a href="" className="group inline-flex relative p-10 items-center justify-center overflow-hidden border-b border-white text-white transition-all duration-500 ease-in-out hover:text-gray-800">
                        <span className="absolute h-0 w-0 rounded-full bg-white transition-all duration-500 group-hover:h-56 group-hover:w-[calc(100%+5rem)]"></span>
                        <div className="relative grid grid-cols-[3fr_3fr_1fr] w-full">
                            <span>Philippine Start-up Challenge (PSC) 2021 Regional Champion</span>
                            <span>Department of Information and Communications Technology (DICT)</span>
                            <span className="justify-self-end">2021</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
  );
}
