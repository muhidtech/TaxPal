import React from 'react';
import './Pricing.css';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Pricing() {
    const data = [
        {
            price: "$9",
            type: "Starter",
            text: "Good for anyone who is self-employed and just getting started.",
            features: [
                "Send 10 quotes and invoices",
                "Connect up to 2 bank accounts",
                "Track up to 15 expenses per month",
                "Manual payroll support",
                "Export up to 3 reports",
            ],
            css: "",
        },

        {
            price: "$15",
            type: "Small business",
            text: "Perfect for small / medium-sized businesses.",
            features: [
                "Send 25 quotes and invoices",
                "Connect up to 5 bank accounts",
                "Track up to 50 expenses per month",
                "Automated payroll support",
                "Export up to 12 reports",
                "Bulk reconcile transactions",
                "Track in multiple currencies",
            ],
            css: {
                btn: "bg-white text-black",
                body: "bg-blue-500 rounded-2xl"
            }
        },

        {
            price: "$39",
            type: "Enterprise",
            text: "For even the biggest enterprise companies.",
            features: [
                "Send unlimited quotes and invoices",
                "Connect up to 15 bank accounts",
                "Track up to 200 expenses per month",
                "Automated payroll support",
                "Export up to 25 reports, including TPS"
            ],
            css: ""
        }
    ];

    return (
        <div id='pricing'
        className='bg-slate-900 py-20 sm:py-32'>
            <div className="w-full text-center">
                <h1 className="text-4xl text-white font-medium">Simple pricing, for everyone.</h1>
                <p className='text-lg text-gray-500 p-5'>
                    It doesn’t matter what size your business is, our software won’t work well for you.
                </p>
            </div>

            <div className='w-full justify-center grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 sm:px-20 lg:px-40'>
                {data.map((item, key) => (
                    <div
                        key={key}
                        className={`flex flex-col p-10 gap-10 rounded-2xl ${item.price === "$15" ? "bg-blue-500 order-first lg:order-none" : ""}`}
                    >
                        <h1 className='text-5xl font-mono font-medium text-start text-white'>{item.price}</h1>
                        <p className='text-white text-xl'>{item.type}</p>
                        <p className={`text-start text-lg ${item.price === "$15" ? "text-white" : "text-gray-500"}`}>{item.text}</p>

                        <button className={`outline-0 border border-gray-500 py-2 rounded-3xl ${item.price === "$15" ? "bg-white text-black" : "text-white"}`}>
                            Get started
                        </button>

                        <div className='flex flex-col gap-5'>
                            {item.features.map((feature, index) => (
                                <div key={index} className='flex gap-2'>
                                    <CheckCircleIcon className="h-6 w-6 text-gray-500 mr-5" />
                                    <span className='text-white'>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
