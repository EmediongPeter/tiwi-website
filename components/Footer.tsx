"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full font-[Manrope] bg-[#010501] overflow-hidden">

      {/* GREEN TOP GLOW BACKGROUND */}
      <div
        className="absolute md:block hidden -top-20 left-1/2 -translate-x-1/2 -translate-y-1/3 
                   w-1/2 h-1/2 rounded-b-full  blur-[20px]
                   bg-linear-to-b from-[#78A627] to-transparent pointer-events-none">
      </div>
      <div className="md:hidden flex justify-end absolute top-0 right-0 w-full overflow-hidden pointer-events-none">
        <Image
          src="/images/green-glow-mobile.svg" 
          alt="green glow top mobile"
          width={100}
          height={100}
          className=" object-cover"
        />

      </div>

      <div className="relative z-10 max-w-7xl md:px-10 py-20 flex flex-col md:flex-row gap-10 items-center justify-between text-white">
        
        {/* LEFT LOGO SECTION */}
        <div className="space-y-4">
          <Image
            src="/images/logo.svg" 
            alt="TIWI Protocol Logo"
            width={150}
            height={150}
            className="w-[140px] h-auto"
          />

          <p className="text-sm text-gray-300">
            © Copyright 2025 TIWI Ecosystem.  
            All<br /> rights reserved.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* PRODUCT */}
        <div className="">
          <h4 className="font-semibold mb-4 text-white/90">Product</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Trade</Link></li>
            <li><Link href="#">Earn Hub</Link></li>
            <li><Link href="#">Lending</Link></li>
            <li><Link href="#">TIWI Pay</Link></li>
            <li><Link href="#">NFT Marketplace</Link></li>
            <li><Link href="#">Launchpad</Link></li>
          </ul>
        </div>

        {/* DEVELOPERS */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90">Developers</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">API & SDK</Link></li>
            <li><Link href="#">Contracts & Audits</Link></li>
            <li><Link href="#">GitHub</Link></li>
            <li><Link href="#">Status</Link></li>
          </ul>
        </div>

        {/* COMMUNITY */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Community</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Telegram</Link></li>
            <li><Link href="#">X (Twitter)</Link></li>
            <li><Link href="#">Documentation</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        </div>
      </div>

      {/* BOTTOM RIGHT DECORATIVE IMAGE */}
      <Image
        src="/images/footer-decoration.svg" 
        alt="footer decoration"
        width={400}
        height={400}
        className="absolute md:block hidden bottom-0 right-0 w-[220px] md:w-[200px] "
      />

      {/* BOTTOM LEFT DECORATIVE IMAGE */}
      <Image
        src="/images/Ellipse-icon.svg" 
        alt="Ellipse-icon decoration"
        width={400}
        height={400}
        className="absolute md:block hidden bottom-0 -left-4 w-[220px] md:w-[150px] "
      />


      {/* GREEN BOTTOM GLOW BACKGROUND */}
      <div
        className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3
                   w-1/2 h-8 rounded-t-full blur-[15px]
                    bg-linear-to-t from-transparent to-[#78A627]  pointer-events-none">
      </div>
    </footer>
  );
}
