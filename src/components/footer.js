"use client";

import CurrentTime from '@/components/time'
import Image from 'next/image'

export default function footer() {
    return (
        <div>
            <div className="relative grid grid-cols-3 gap-8 box-border mx-11 mt-6 p-14 rounded-t-3xl bg-neutral-900">
                <div className="hidden lg:flex border-box bg-gray-200 overflow-hidden rounded-3xl relative justify-center aspect-square w-auto max-w-96">
                    <video className="absolute z-0 top-0 left-0 size-full object-cover" autoPlay loop muted>
                        <source src={'/HomeBG.webm'} type="video/webm"/>
                    </video>
                    <Image src={`/MattFace.png`} alt="logo" width={1000} height={1000} className="z-10 absolute w-max h-full object-fill"/>
                </div>
                    
                <div className="col-span-2">
                    <div className="grid grid-cols-3 grid-rows-2 h-full">       
                        <nav className="flex flex-col gap-1">
                            <span className="font-bold text-xl pb-2">Menu</span>     
                            <a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">Home</a>
                            <a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">Projects</a>
                            <a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">About</a>
                        </nav>
                        <nav className="flex flex-col gap-1">
                            <span className="font-bold text-xl pb-2">Follow Me</span>
                            <a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">LinkedIn</a>
                            <a href="" className="transition-all duration-300 ease-in-out hover:text-sky-600">Github</a>
                        </nav>

                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-xl pb-2">Work With Me</span>
                            <span className="underline">mjdganaden@gmail.com</span>
                        </div>
                            
                        <div className="col-span-2 flex flex-col justify-end">
                            <span className="font-bold text-xl pb-2">Based in Baguio City, Philippines</span>
                            <span>Current Time: <CurrentTime /></span>
                        </div>
                        <div className="flex flex-col justify-end">
                            <span className="font-bold text-xl pb-2">Availability:</span>
                            <span>Current availability for full-time job</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}