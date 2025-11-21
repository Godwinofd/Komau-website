"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Classes", href: "#classes" },
        { name: "Timetable", href: "#timetable" },
        { name: "Memberships", href: "#memberships" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isOpen
                    ? "glass-panel py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wider italic relative z-[70]">
                        KO<span className="text-primary">MAU</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-text-secondary hover:text-white transition-colors text-sm uppercase tracking-widest font-bold relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-white text-dark-950 hover:bg-gray-200 px-6 py-2 rounded-full font-bold uppercase text-sm transition-colors tracking-wide transform hover:scale-105 active:scale-95"
                        >
                            Book Trial
                        </Link>
                    </div>

                    {/* Mobile Menu Button Placeholder for spacing */}
                    <div className="md:hidden w-12 h-12"></div>
                </div>
            </nav>

            {/* Mobile Menu Button - Fixed position above overlay */}
            <button
                className="md:hidden fixed top-6 right-6 text-white focus:outline-none z-[70] p-2 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Full Screen Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-dark-950 z-[60] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full w-full px-6 space-y-10">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-4xl font-heading font-bold uppercase tracking-widest text-white hover:text-primary transition-all transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: isOpen ? `${idx * 100}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className={`btn-primary w-full max-w-sm text-center px-10 py-5 rounded-full text-xl shadow-2xl transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                        style={{ transitionDelay: isOpen ? `${navLinks.length * 100}ms` : '0ms' }}
                        onClick={() => setIsOpen(false)}
                    >
                        Book Free Trial
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
