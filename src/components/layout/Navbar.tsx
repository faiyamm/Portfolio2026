import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const menuLinks = [
        { title: "home", path: "/" },
        { title: "work", path: "/#Work" },
        { title: "projects", path: "/#Projects" }
    ];
    
    
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50">
                {/* Navbar content */}
                <div className="layout-container flex justify-between items-center py-6">

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                        className="p-2 -ml-2 text-white z-50 mix-blend-difference"
                    >
                        <FiMenu className="text-white text-3xl cursor-pointer" />
                    </button>

                    <div className="flex gap-6 items-center">
                        <Link to="/" aria-label="Download CV">
                            <HiDocumentDownload className="text-white text-[2.2rem] cursor-pointer" />
                        </Link>

                        <a
                            href="https://www.linkedin.com/in/perezalmaraz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <FaLinkedinIn className="text-[var(--color-primary-500)] text-xl cursor-pointer" />
                            </div>
                        </a>

                        <a
                            href="https://github.com/faiyamm"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <div className="w-8 h-8 flex items-center justify-center">
                                <FaGithub className="text-white text-[2.1rem] cursor-pointer" />
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        
        </>
    );
};
