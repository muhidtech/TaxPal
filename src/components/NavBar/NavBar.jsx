import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import hamb_menu from "../../assets/Hamb-menu.json";
import toggle from "../../assets/toggle.json";
import { useDarkMode } from "../DarkModeContext";
import "./NavBar.css";

function NavBar() {
    const container = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    let anim = useRef(null);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        anim.current = lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: hamb_menu,
        });

        anim.current.goToAndStop(0, true); // Stop animation on first frame

        return () => anim.current.destroy();
    }, []);

    const toggleMenu = () => {
        anim.current.setDirection(isOpen ? -1 : 1);
        anim.current.play();
        setIsOpen(!isOpen);
    };

    // ✅ Toggle Button Animation
    const toggleContainer = useRef(null);
    const [isOn, setIsOn] = useState(false);
    let animToggle = useRef(null);

    useEffect(() => {
        animToggle.current = lottie.loadAnimation({
            container: toggleContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: toggle,
        });
        animToggle.current.goToAndStop(0, true);

        return () => animToggle.current.destroy();
    }, []);

    const toggleBtn = () => {
        animToggle.current.setDirection(isOn ? -1 : 1);
        animToggle.current.play();
        setIsOn(!isOn);

        // ✅ Toggle dark mode
        toggleDarkMode();
    };

    return (
        <>
            {/* Navbar */}
            <div className="pt-4 px-6 pb-5 flex items-center w-full justify-between relative z-50 dark:text-white navbar">
                <h1 className="text-start text-xl font-medium cursor-pointer text-black dark:text-slate-300">
                    Tax<span className="text-blue-600 font-semibold">Pal</span>
                </h1>

                <ul className="hidden md:flex text-[14px] text-gray-500 dark:text-gray-300 items-center gap-5 font-mono px-10">
                    <li className="list-hover"><a href="#features">Features</a></li>
                    <li className="list-hover"><a href="#testimonials">Testimonials</a></li>
                    <li className="list-hover"><a href="#pricing">Pricing</a></li>
                </ul>

                <div className="ml-auto flex items-center gap-5">
                    {/* Dark Mode Toggle Button */}
                    <div
                        onClick={toggleBtn}
                        className="h-20 w-20 cursor-pointer p-2 ml-2 md:block sm:hidden relative z-50"
                        style={{ filter: isDarkMode ? "invert(1)" : "none" }} // Invert colors in dark mode
                    >
                        <div ref={toggleContainer}></div>
                    </div>

                    <button className="hidden md:block text-gray-500 dark:text-gray-300 cursor-pointer list-hover hover:text-black dark:hover:text-white">
                        Sign in
                    </button>

                    <button className="bg-blue-600 text-white dark:bg-blue-700 px-4 py-2 rounded-3xl md:hidden cursor-pointer hover:opacity-55">
                        Get started
                    </button>

                    <button className="bg-blue-600 text-white dark:bg-blue-700 px-4 py-2 rounded-3xl hidden md:block cursor-pointer hover:opacity-55">
                        Get started today
                    </button>
                </div>

                {/* Hamburger Animation */}
                <div
                    onClick={toggleMenu}
                    className="h-12 w-12 cursor-pointer p-2 ml-2 md:hidden relative z-50"
                    style={{ filter: isDarkMode ? "invert(1)" : "none" }} // Invert colors in dark mode
                >
                    <div ref={container}></div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu-container" onClick={toggleMenu}>
                    <div
                        className="mobile-menu-list dark:bg-gray-900 dark:text-white"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                    >
                        <ul>
                            <li className="list-menu"><a className="list-text" href="#">Features</a></li>
                            <li className="list-menu"><a className="list-text" href="#">Pricing</a></li>
                            <li className="list-menu"><a className="list-text" href="#">Testimonials</a></li>
                            <li className="sign-in"><button>Sign in</button></li>
                        </ul>

                        {/* ✅ Toggle Button (Dark Mode) */}
                        <div
                            onClick={toggleBtn}
                            className="h-20 w-20 cursor-pointer p-2 ml-2 md:hidden absolute right-5 bottom-0 z-50"
                            style={{ filter: isDarkMode ? "invert(1)" : "none" }} // Invert colors in dark mode
                        >
                            <div ref={toggleContainer}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
