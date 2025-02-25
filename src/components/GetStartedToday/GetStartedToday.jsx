import React from 'react'
import './GetStartedToday.css'
import get_started_today from '../../assets/get-started-today.jpg'

function GetStartedToday() {
  return (
    <div className='relative overflow-hidden bg-blue-600 py-32'>
        <img src={get_started_today} 
        loading='lazy'
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2' />

        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="font-display font-medium text-3xl tracking-tight text-white sm:text-4xl">
                    Get started today
                </h2>
                <p className="mt-4 text-lg tracking-tight text-white">
                It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.
                </p>
                <a href="#" className="btn">Get 6 months free</a>
            </div>
        </div>
    </div>
  )
}

export default GetStartedToday
