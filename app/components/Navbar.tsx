"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#explore" },
    { name: "Feedback", href: "#feedback" },
  ];

  return (
    <header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="xPaddings py-8 relative z-50"
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="innerWidth mx-auto flex justify-between items-center gap-8">
          {/* Logo/Brand */}
          <Link href="#home" className="z-10">
            <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white hover:text-mcdonalds-gold transition-colors duration-300">
              McDonald&#39;s
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium text-[16px] hover:text-mcdonalds-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="hover:opacity-75 transition-opacity duration-300">
              <Image
                src="/search.svg"
                width={24}
                height={24}
                alt="search"
                className="object-contain"
              />
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 relative w-[30px] h-[24px] flex flex-col justify-center items-center gap-[5px] hover:opacity-75 transition-opacity duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 absolute" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 absolute" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-primary-black via-primary-black to-transparent px-6 py-6 mt-4 rounded-b-[24px]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white font-medium text-[16px] hover:text-mcdonalds-gold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-mcdonalds-red hover:bg-opacity-20"
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-4 flex items-center gap-2 text-white font-medium hover:text-mcdonalds-gold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-mcdonalds-red hover:bg-opacity-20">
                <Image
                  src="/search.svg"
                  width={20}
                  height={20}
                  alt="search"
                  className="object-contain"
                />
                <span>Search</span>
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Navbar;
