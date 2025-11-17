"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Modules", id: "modules" },
    { label: "How it works", id: "how-it-works" },
    { label: "Governance", id: "governance" },
    { label: "Road Map", id: "roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex justify-center py-3 md:py-6 select-none z-50">
      <div
        className="w-[95%] max-w-[1400px] flex items-center justify-between md:justify-center rounded-full px-4 md:px-16 py-3 md:py-4"
        style={{
          background: "#010501",
          border: "0.5px solid rgba(177, 241, 40, 0.24)",
          boxShadow: "0 24px 48px -12px rgba(177, 241, 40, 0.16)",
        }}
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 md:flex-initial">
          <div className="relative w-20 md:w-24 h-12 md:h-16">
            <Image
              src="/images/logo.svg"
              alt="TIWI Protocol"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center - Desktop Links */}
        <ul className="hidden md:flex w-full items-center gap-8 lg:gap-10 text-white/70 text-base lg:text-lg font-medium justify-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-[#B1F128] transition-colors duration-200"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex items-center justify-center w-6 h-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12H10"
              stroke="#B1F128"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 5H4"
              stroke="#B1F128"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 19H4"
              stroke="#B1F128"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-3xl overflow-hidden"
          style={{
            background: "#010501",
            border: "0.5px solid rgba(177, 241, 40, 0.24)",
            boxShadow: "0 24px 48px -12px rgba(177, 241, 40, 0.16)",
          }}
        >
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer hover:bg-[#B1F128]/10 text-white/70 hover:text-[#B1F128] transition-colors duration-200 px-6 py-3 text-base font-medium"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
