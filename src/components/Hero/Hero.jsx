import React from 'react';
import './Hero.css'
import play_icon from '../../assets/play-solid.svg'
import transistor from '../../assets/transistor.7274e6c3.svg'
import laravel from '../../assets/laravel.7deed17e.svg'
import mirage from '../../assets/mirage.18d2ec4e.svg'
import statamic from '../../assets/statamic.6da5ebfb.svg'
import tuple from '../../assets/tuple.74eb0ae0.svg'
import statickit from '../../assets/statickit.d7937794.svg'

function Hero() {
  return (
        <>
            <div className="hero">
                <h1 className="hero-h1 font-display">
                Accounting <span className="relative text-blue-600">made simple
                    <span className="absolute left-0 bottom-0 w-full h-3 bg-blue-300 opacity-50 -z-10 rounded-full transform rotate-2"></span>
                </span>
                <br /> for small businesses.
                </h1>

                {/* Balanced Paragraph */}
                <p className="mx-auto font-display text-lg max-w-2xl mt-6 tracking-tight text-slate-700 text-center balance-text">
                    Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, 
                    and hope you don’t get audited.
                </p>
            </div>
            <div className='w-full flex justify-center gap-5 '>
                <button className='bg-black text-white text-medium p-2 rounded-full px-4 cursor-pointer hover:opacity-50'>Get 6 months free</button>
                <button className="p-2 px-4 border rounded-full flex items-center gap-2 hover:outline-1 cursor-pointer">
                    <img src={play_icon} className="w-4 h-4" />
                    <span>Watch video</span>
                </button>
            </div>

            <div className='pb-25 px-27 pt-50 h-full'>
                <p className='mx-auto max-w-3xl text-xl font-medium tracking-tight text-slate-700 sm:text-md text-balance text-center mb-10'>Trusted by these six companies so far</p>
                <div className='grid grid-cols-3 gap-5 w-full md:grid-cols-6'>
                    <img className="" src={transistor} />
                    <img src={tuple} />
                    <img src={statickit} />
                    <img src={mirage} />
                    <img src={laravel} />
                    <img src={statamic} />
                </div>
            </div>
        </>
  );
}

export default Hero;
