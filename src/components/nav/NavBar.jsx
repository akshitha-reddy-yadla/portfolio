import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking on a navigation item
    const handleNavItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="">
                <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-sm z-10 font-bold">Akshitha
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <div className="lg:hidden flex bg-transparent items-center">
                        <button onClick={toggleMenu} className=" z-10 text-white bg-transparent focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                color='brown'
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill='#e7ded0'
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex z-10 space-x-8">
                        <Link to="/" className="hover:text-red-800 transition-all Z-10 duration-300">Home</Link>
                        <Link to="/services" className="hover:text-red-800 transition-all Z-10 duration-300">Services</Link>
                        {/* <Link to="/experience" className="hover:text-red-800 transition-all Z-10 duration-300">Experience</Link> */}
                        <Link to="/projects" className="hover:text-red-800 transition-all Z-10 duration-300">Projects</Link>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Overlay Menu for Mobile */}
            <motion.div
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-brown z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="flex justify-end p-6">
                    {/* Close Button */}
                    <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none bg-transparent">
                        &times;
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center space-y-8 text-[#e7ded0] text-2xl">
                    <Link to="/" onClick={handleNavItemClick} className="hover:text-orange-100 transition-all duration-300">
                        Home
                    </Link>
                    <Link to="/services" onClick={handleNavItemClick} className="hover:text-orange-100 transition-all duration-300">
                         Services
                    </Link>
                    {/* <Link to="/experience" onClick={handleNavItemClick} className="hover:text-orange-100 transition-all duration-300">
                        Experience
                    </Link> */}
                    <Link to="/projects" onClick={handleNavItemClick} className="hover:text-orange-100 transition-all duration-300">
                        Projects
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;
