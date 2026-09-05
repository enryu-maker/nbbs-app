"use client";

import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("navItems");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed   top-0 z-50 w-full  bg-white border-b border-[#e5e5e5] ">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
        onClick={()=>setActive("home")}
          smooth={true}
          duration={700}
          offset={-80}
          to="home"
          className="flex items-center gap-3 group"
          aria-label="NBBS Home"
        >
          <Image
            src="/nbbs-logo.webp"
            alt="NBBS Logo"
            width={50}
            height={30}
            className="object-contain"
            priority
          />

          <span className="font-display text-[24px] font-bold tracking-tight text-primary">
            NBBS
          </span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("service")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "service" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("about")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "about" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="vision"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("vision")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "vision" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            Vision
          </ScrollLink>
           <ScrollLink
            to="vision"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("mission")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "mission" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            Mission
          </ScrollLink>
        </nav>

     

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[26px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* mobile hamburger */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-5 flex flex-col gap-2">
          {/* Services */}
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            Services
          </ScrollLink>

          {/* About */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            About Us
          </ScrollLink>

          {/* Contact */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            Contact
          </ScrollLink>

      
        </nav>
      </div>
    </header>
  );
}
