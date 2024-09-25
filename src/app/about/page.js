
import Image from 'next/image'
import Footer from '../../components/footer'
import Header from '../../components/header/header'
import Link from 'next/link'

export default function About() {
  return (
    <div>
        <div className="flex flex-col px-6 gap-8 box-border lg:mx-11 lg:my-6 lg:px-14 rounded-b-3xl lg:rounded-3xl bg-neutral-900 relative z-50 h-[calc(100vh-3rem)]">
            <div className="flex justify-between items-center pt-6">
                <Image src={`/icon.png`} width={1080} height={1080} className="h-9 sm:h-14 mr-20 w-max" alt="Logo"/>
                <div>
                    <ul className="hidden lg:flex gap-16">
                        <li><Link href="/" className="transition-all duration-300 ease-in-out hover:text-sky-600">Home</Link></li>
                        <li><a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">Projects</a></li>
                        <li><Link href="/about" className="transition-all duration-300 ease-in-out text-sky-600">About</Link></li>
                    </ul>
                </div>
                <a href="/GANADEN, Matthew Jason RESUME.pdf" download className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-700 px-6 font-medium text-neutral-200 duration-500">
                    <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">Download Resume</div>
                        <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                            <path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-2 items-center justify-between relative flex-grow h-lvh">
                <div className="flex flex-col gap-10 justify-between pt-10">
                    <h1 className="font-bold text-3xl lg:text-4xl leading-none lg:w-3/4 ">Hello! I am Matthew</h1>
                    <span className="hidden lg:block text-xl leading-tight max-w-md">I am an Information Technology fresh graduate from Baguio City, Philippines yearning to become a professional web developer.</span>
                </div>

                <div className="border-box bg-gray-200 overflow-hidden rounded-3xl relative flex justify-center h-full">
                    <video className="absolute z-0 top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                        <source src={'/HomeBG.webm'} type="video/webm"/>
                    </video>
                    <Image src={`/MattFace.png`} alt="logo" width={1000} height={1000} className="z-10 h-0"/>
                </div>
            </div>

            <div className="flex justify-between pb-6">
                <div className="flex flex-col">
                    <span>Designing,</span>
                    <span>Coding</span>
                </div>

                <div className="hidden gap-5 text-base items-center text-primarytext ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className="fill-white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                </div>

                <div>
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">mjdganaden@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  );
}
