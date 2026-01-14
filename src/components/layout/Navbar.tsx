import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ResumePDF from "../../assets/SofiaPerez.CV.pdf";


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
            <nav className="fixed top-0 left-0 right-0 z-[70]">

                <div className="layout-container flex justify-between items-center py-6">

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="relative z-[70] p-2 -ml-2 text-white"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiX className="text-3xl cursor-pointer" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiMenu className="text-3xl cursor-pointer" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>

                    <div className="flex gap-6 items-center relative z-[70]">
                        <a
                            href={ResumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Resume"
                        >
                            <HiDocumentDownload className="text-white text-[2.2rem] cursor-pointer" />
                        </a>

                        <a
                            href={import.meta.env.VITE_LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <FaLinkedinIn className={`${isMenuOpen ? "text-[var(--color-secondary-600)]" : "text-[var(--color-primary-500)]"} text-xl cursor-pointer transition-colors duration-300`} />
                            </div>
                        </a>

                        <a
                            href={import.meta.env.VITE_GITHUB_URL}
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

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}

                        className="fixed inset-0 z-[60] bg-[var(--color-secondary-600)] flex flex-col justify-end pb-20 md:pb-32"
                    >

                        <div className="layout-container flex flex-col">
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`
                                        text-[17vw] md:text-[9rem] font-bold leading-[0.85] tracking-tighter lowercase
                                        transition-colors duration-300
                                        ${(location.pathname + location.hash) === link.path
                                            ? "text-[var(--color-primary-400)]"
                                            : "text-white hover:text-[var(--color-primary-400)]"
                                        }
                                    `}
                                >
                                    {link.title}
                                </Link>
                            ))}

                            <a
                                href={ResumePDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-[17vw] md:text-[9rem] font-bold leading-[0.85] tracking-tighter lowercase text-white hover:text-[#7575FF] transition-colors duration-300"
                            >
                                resume
                            </a>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

