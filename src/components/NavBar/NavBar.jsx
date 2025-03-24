import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import hamb_menu from "../../assets/Hamb-menu.json";
import "./NavBar.css";

function NavBar() {
    const menuAnimationRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: menuAnimationRef.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: hamb_menu,
        });

        anim.goToAndStop(0, true);

        return () => anim.destroy();
    }, []);

    const toggleMenu = () => {
        if (menuAnimationRef.current) {
            const direction = isOpen ? -1 : 1;
            lottie.setDirection(direction);
            lottie.play();
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            {/* Navbar */}
            <div className="pt-4 px-6 pb-5 flex items-center w-full justify-between relative z-50 navbar">
                <h1 className="text-start text-xl font-medium cursor-pointer text-black dark:text-white">
                    Tax<span className="text-blue-600 font-semibold">Pal</span>
                </h1>

                <ul className="hidden md:flex text-[14px] text-gray-500 dark:text-gray-300 items-center gap-5 font-mono px-10">
                    <li className="list-hover"><a href="#features">Features</a></li>
                    <li className="list-hover"><a href="#testimonials">Testimonials</a></li>
                    <li className="list-hover"><a href="#pricing">Pricing</a></li>
                </ul>

                <div className="ml-auto flex items-center gap-5">
                    <button className="hidden md:block text-gray-500 dark:text-gray-300 cursor-pointer list-hover hover:text-black dark:hover:text-white" aria-label="Sign in">
                        Sign in
                    </button>

                    <button className="bg-blue-600 text-white dark:bg-blue-700 px-4 py-2 rounded-3xl cursor-pointer hover:opacity-55">
                        Get started
                    </button>
                </div>

                {/* Hamburger Animation */}
                <div
                    onClick={toggleMenu}
                    className="h-12 w-12 cursor-pointer p-2 ml-2 md:hidden relative z-50"
                    aria-label="Toggle menu"
                >
                    <div ref={menuAnimationRef}></div>
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
                            <li className="list-menu"><a className="list-text" href="#features">Features</a></li>
                            <li className="list-menu"><a className="list-text" href="#pricing">Pricing</a></li>
                            <li className="list-menu"><a className="list-text" href="#testimonials">Testimonials</a></li>
                            <li className="sign-in"><button>Sign in</button></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;