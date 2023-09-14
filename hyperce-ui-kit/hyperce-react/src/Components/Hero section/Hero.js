import React from 'react';
import './hero.css'
import Ecommerce from '../Hero section/images/ecommerce.jpg'

export default function Hero() {
  return (
    <>
     <section className="xl:mx-20 min-h-screen flex items-center justify-center">
    <div className="relative top-10 lg:top-20 p-10 md:p-10 xl:p-20 2xl:p-30 m-10 lg:m-8 2xl:m-4 bg-gray-800 shadow-2xl rounded-br-full rounded-tr-3xl rounded-tl-full rounded-bl-full text-white font-serif hover:bg-gray-600 duration-1000">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">

        <div className="xl:w-1/2 p-4 flex items-center justify-center">
        <div className="rounded-full overflow-hidden h-48 md:h-64 lg:h-72">
        <img src={Ecommerce} alt="Ecommerce" className="object-cover h-full w-full" />
        </div>
    </div>


            <div className="lg:w-1/2 text-center text-white md:m-2">
                <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold mb-4 lg:mb-8">Welcome to<br /> <span className='text-teal-600'>Hyperce</span></h1>
                <p className="text-base md:text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">Your <span className="italic text-orange-500">Ecommerce Suite Partner</span></p>
                <div>
                    <p className="text-xs lg:text-base xl:text-lg text-gray-400 mb-2 lg:mb-4">Take the opportunity to <span className="font-bold text-blue-500">elevate</span> your business to new heights with our futuristic ecommerce platforms and AI-powered ecommerce solutions.</p>
                    <p className="text-xs lg:text-base xl:text-lg text-gray-400 mb-8">Customized tools and technologies required for your ecommerce business powered by <span className="underline text-green-500">modern</span> and headless technologies.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <a href="#contact" className="bg-teal-600 text-xs lg:text-lg text-white font-bold mt-2 lg:mt-5 py-2 lg:py-5 px-4 lg:px-10 rounded-full inline-block hover:bg-teal-800 drop-shadow-2xl animate-bounce duration-700">Get Started</a>
        </div>
    </div>
    </section>
            <div className="bouncingBall bouncingBall-1 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-2 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-3 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-4 shadow-2xl drop-shadow-2xl"></div>
    </>

  )
}
