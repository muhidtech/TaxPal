import React from 'react';
import faq_bg from '../../assets/faq-bg.jpg';
import Footer from '../Footer/Footer';

function Faq() {
    const faqData = [
        [
            { q: "Does TaxPal handle VAT?", a: "Well no, but if you move your company offshore you can probably ignore it." },
            { q: "Can I pay for my subscription via purchase order?", a: "Absolutely, we are happy to take your money in all forms." },
            { q: "How do I apply for a job at TaxPal?", a: "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk." }
        ],
        [
            { q: "What was that testimonial about tax fraud all about?", a: "TaxPal is just a software application, ultimately your books are your responsibility." },
            { q: "TaxPal sounds horrible but why do I still feel compelled to purchase?", a: "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions." },
            { q: "I found other companies called TaxPal, are you sure you can use this name?", a: "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website." }
        ],
        [
            { q: "How do you generate reports?", a: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons." },
            { q: "Can we expect more inventory features?", a: "In life it’s really better to never expect anything at all." },
            { q: "I lost my password, how do I get into my account?", a: "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information." }
        ]
    ];

    return (
        <>
            <div id='faq' className='relative overflow-hidden bg-slate-50 py-20 sm:py-32'>
                <img src={faq_bg} alt="FAQ Background" className='absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-50' />
                
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-start'>
                    <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Frequently asked questions</h2>
                    <p className='mt-6 text-lg text-gray-600'>If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
                </div>
                
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {faqData.map((column, colIndex) => (
                            <div key={colIndex} className='space-y-8'>
                                {column.map((item, index) => (
                                    <div key={index}>
                                        <h3 className='text-lg font-semibold text-gray-900'>{item.q}</h3>
                                        <p className='mt-2 text-gray-600'>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Footer Section */}
                <footer className='relative mt-20 border-t border-gray-200 pt-10'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center'>
                                <span className='text-white font-bold'>O</span>
                            </div>
                            <span className='text-xl font-semibold text-gray-900'>Tax<span className='text-blue-600'>Pal</span></span>
                        </div>
                        <nav className='mt-6 flex space-x-6 text-gray-600 text-md'>
                            <a href='#features' className='hover:text-black p-2 rounded-md hover:bg-gray-300'>Features</a>
                            <a href='#testimonials' className='hover:text-black p-2 rounded-md hover:bg-gray-300'>Testimonials</a>
                            <a href='#pricing' className='hover:text-black p-2 rounded-md hover:bg-gray-300'>Pricing</a>
                        </nav>
                    </div>
                </footer>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
