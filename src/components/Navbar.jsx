import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import DynamicIcon from './DynamicIcon';

const Navbar = () => {
    const { global } = siteConfig;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-serif font-bold text-primary tracking-widest" onClick={closeMenu}>
                        {global.siteName}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="text-sm uppercase tracking-wider text-text hover:text-primary transition-colors">Home</Link>
                        <Link to="/tours" className="text-sm uppercase tracking-wider text-text hover:text-primary transition-colors">Tours</Link>
                        <Link to="/blog" className="text-sm uppercase tracking-wider text-text hover:text-primary transition-colors">Journal</Link>
                        <Link to="/about" className="text-sm uppercase tracking-wider text-text hover:text-primary transition-colors">About</Link>
                        <Link to="/contact" className="text-sm uppercase tracking-wider text-text hover:text-primary transition-colors">Contact</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href={`https://wa.me/${siteConfig.pages.contact.whatsapp}?text=${encodeURIComponent("Hello, I would like to inquire about booking a trip.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm px-5 py-2"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-text hover:text-primary transition-colors" onClick={toggleMenu}>
                        <DynamicIcon name={isMenuOpen ? "X" : "Menu"} size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background border-t border-white/10 p-8 flex flex-col gap-8 animate-fade-in">
                    <div className="flex flex-col space-y-6 text-center text-xl font-serif">
                        <Link to="/" className="text-text hover:text-primary transition-colors" onClick={closeMenu}>Home</Link>
                        <Link to="/tours" className="text-text hover:text-primary transition-colors" onClick={closeMenu}>Tours</Link>
                        <Link to="/blog" className="text-text hover:text-primary transition-colors" onClick={closeMenu}>Journal</Link>
                        <Link to="/about" className="text-text hover:text-primary transition-colors" onClick={closeMenu}>About</Link>
                        <Link to="/contact" className="text-text hover:text-primary transition-colors" onClick={closeMenu}>Contact</Link>
                    </div>

                    <div className="flex justify-center mt-4">
                        <a
                            href={`https://wa.me/${siteConfig.pages.contact.whatsapp}?text=${encodeURIComponent("Hello, I would like to inquire about booking a trip.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm px-8 py-3 w-full text-center"
                            onClick={closeMenu}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
