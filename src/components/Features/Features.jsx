import React, { useState } from "react";
import "./Features.css";
import features_bg from "../../assets/features-bg.jpg";
import expenses_img from "../../assets/expenses.webp";
import payroll_img from "../../assets/payroll.webp";
import reporting_img from "../../assets/reporting.webp";
import vat_returns_img from "../../assets/vat-returns.webp";

function Features() {
    const data = {
        payroll: {
            header: "Payroll",
            text: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
            img: payroll_img,
        },
        expenses: {
            header: "Claim expenses",
            text: "All of your receipts organized in one place, as long as you don't mind typing in the data by hand.",
            img: expenses_img,
        },
        vat_returns: {
            header: "VAT handling",
            text: "We only sell our software to companies that don't deal with VAT at all, so technically we do all the VAT stuff they need.",
            img: vat_returns_img,
        },
        reporting: {
            header: "Reporting",
            text: "Easily export your data into an Excel spreadsheet where you can do whatever you want with it.",
            img: reporting_img,
        },
    };

    const [selectedFeature, setSelectedFeature] = useState("payroll");

    return (
        <div id="features" 
        className="overflow-x-hidden relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-purple-700 text-white lg:p-40 p-10">
            <img
                src={features_bg}
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                alt="Features Background"
            />

            <div className="relative z-10 text-center max-w-5/2 mb-20">
                <h1 className="text-4xl font-semibold">Everything you need to run your books.</h1>
                <p className="text-gray-200 mt-4 text-lg">
                    Well, everything you need if you aren’t that picky about minor details like tax compliance.
                </p>
            </div>

            <div className="relative z-10 flex xl:w-3/3max-w-7xl mt-10 mr-0">
                {/* Left Side - Feature List */}
                <div className="w-1/2 pr-16 lg:flex flex-col justify-center hidden">
                    <div className="mt-8 space-y-6">
                        {Object.entries(data).map(([key, item]) => (
                            <div
                                key={key}
                                className={`p-5 rounded-lg cursor-pointer transition-all duration-300 ${selectedFeature === key ? "backdrop-blur-5xl bg-white/10" : "hover:backdrop-blur-5xl hover:bg-white/10"}`}
                                onClick={() => setSelectedFeature(key)}
                            >
                                <h2 className="text-xl font-medium">{item.header}</h2>
                                <p className="text-gray-300 mt-2">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Side Mobile - Feature List */}
                <div className="w-full flex flex-col items-center lg:hidden mx-20 backdrop-blur-5xl bg-white/10 pt-10 max-sm:px-5 max-sm:pb-10">
                    {/* Feature List in a row */}
                    <div className="flex space-x-4 overflow-x-auto max-sm:space-x-0  ">
                        {Object.entries(data).map(([key, item]) => (
                            <div
                                key={key}
                                className={`p-2 mmax-sm:p-1 max-sm:rounded-2xl cursor-pointer md:rounded-full sm:rounded-3xl text-center  mb-3 ${selectedFeature === key ?"bg-white/70" : "hover:backdrop-blur-5xl hover:bg-white/10"}`}
                                onClick={() => setSelectedFeature(key)}
                            >
                                <h2 className={`text-lg max-sm:text-sm font-medium ${selectedFeature === key ?"text-blue-600" : ""}`}>{item.header}</h2>
                            </div>
                        ))}
                    </div>

                    {/* Selected Feature Text below the list */}
                    <p className="text-white my-5 text-center max-w-xl max-sm:max-w-sm max-sm:text-sm text-lg">
                        {data[selectedFeature].text}
                    </p>

                    {/* Feature Image below the row */}
                    <div className="mt-6 ">
                        <img 
                            src={data[selectedFeature].img} 
                            className="lg:max-w-[900px] md:max-w-[800px] sm:max-w-[700px] max-w-[600px] shadow-2xl rounded-lg max-sm:max-w-[370px]" 
                            alt={data[selectedFeature].header} 
                        />
                    </div>
                </div>



                {/* Right Side - Feature Image */}
                <div className="w-1/2 absolute right-17 top-1/2 transform -translate-y-1/2 lg:block hidden">
                    <img 
                        src={data[selectedFeature].img} 
                        className="max-w-[1100px] shadow-2xl rounded-lg" 
                        alt={data[selectedFeature].header} 
                    />
                </div>

            </div>
        </div>
    );
}

export default Features;
