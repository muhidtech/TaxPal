import React from 'react';
import './Footer.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    const d = new Date();
  
    return (
        <div className='w-full flex items-center lg:px-30 px-20 py-10 justify-between max-md:px-5 max-md:gap-x-10'>
            <div className='text-left flex-grow'>
                <p className='text-gray-600 text-md'>
                    Copyright &copy; {d.getFullYear()} TaxPal. All rights reserved.
                </p>
            </div>
            <div className='space-x-4 max-md:space-x-0 flex'>
                <a href='#' className='text-gray-400 hover:text-gray-600'>
                    <XMarkIcon className='w-6 h-6' />
                </a>
                <a href='#' className='text-gray-400 hover:text-gray-600'>
                    <FaGithub className='w-6 h-6' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
