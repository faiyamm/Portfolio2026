import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { HiDocumentDownload } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ResumePDF from "../../assets/SofiaPerez.CV.pdf";


const menuLinks = [
    { title: "home", path: "/#Hero" },
    { title: "about", path: "/#About" },
    { title: "work", path: "/#Work" },
    { title: "projects", path: "/#Projects" }
];

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Hero");
    const location = useLocation();
    const prevPathRef = useRef<string | null>(null);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const isSamePath = prevPathRef.current === location.pathname;
                const behavior = isSamePath ? "smooth" : "auto";

                setTimeout(() => {
                    element.scrollIntoView({ behavior });
                }, 0);
            }
        }
        prevPathRef.current = location.pathname;
    }, [location]);

    useEffect(() => {
        if (location.pathname === "/") {
            const handleScroll = () => {
                let current = "Hero";

                for (const link of menuLinks) {
                    const sectionId = link.path.replace("/#", "");
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // logic: if top is <= center of screen
                        if (rect.top <= window.innerHeight / 2) {
                            current = sectionId;
                        }
                    }
                }
                setActiveSection(current);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll(); // initial check

            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            if (location.state && (location.state as any).fromSection) {
                setActiveSection((location.state as any).fromSection);
            } else {
                setActiveSection("Hero");
            }
        }
    }, [location.pathname]);

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
                        {/* <a
                            href={ResumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Resume"
                        >
                            <HiDocumentDownload className="text-white text-[2.2rem] cursor-pointer" />
                        </a> */}

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
                                        ${activeSection === link.path.replace("/#", "")
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

