import React from 'react';
import './hero.css'

export default function Hero() {
  return (
    <div>
        <section className="min-h-screen flex  items-center justify-center ">
        <div className="relative   p-10 xl:p-20 2xl:p-30 m-10 lg:m-8 2xl:m-4 bg-gray-800 shadow-2xl rounded-br-full rounded-tr-3xl	rounded-tl-full rounded-bl-full text-white font-serif  hover:bg-gray-600 duration-1000">
            <div className="text-center text-white">
                <h1 className="text-lg md:text-2xl lg:6xl 2xl:text-8xl font-bold mb-4 lg:mb-8">Welcome to Hyperce</h1>
                <p className="text-base md:text-xl lg:2xl xl:text-4xl 2xl:text-6xl mb-2 lg:mb-4">Your Ecommerce Suite Partner</p>
                <div>
                <p className="text-xs lg:text-base xl:text-lg text-gray-400 mb-2 lg:mb-4">Take the opportunity to elevate your business to new heights with our futuristic ecommerce platforms and AI-powered ecommerce solutions.</p>
                <p className="text-xs lg:text-base xl:text-lg text-gray-400 mb-8 ">Customized tools and technologies required for your ecommerce business powered by modern and headless techologies.</p>
            </div>
            </div>  
            <div className="flex justify-center">                
                <a href="#contact" class=" bg-teal-600 text-xs lg:text-lg  text-white font-bold mt-2 lg:mt-5 py-2 lg:py-5 px-4 lg:px-10 rounded-full inline-block hover:bg-teal-800 drop-shadow-2xl animate-bounce duration-700">Get Started</a>
            </div> 
        </div>
        <div className="bouncingBall bouncingBall-1 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-2 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-3 shadow-2xl drop-shadow-2xl"></div>
            <div className="bouncingBall bouncingBall-4 shadow-2xl drop-shadow-2xl"></div>
    </section>
    </div>
  )
}
