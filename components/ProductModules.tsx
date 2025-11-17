"use client";

import Image from "next/image";

export default function ProductModules() {
  return (
    <section className="bg-[#010501] py-20 text-white px-6">
      {/* Header */}
      <div className="text-center mb-16">

        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
            Protocol Status
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>


        <h2 className="mt-6 text-3xl font-semibold leading-snug">
          All-in-One DeFi 
          <br />
          <span className="text-lime-400">Super App</span>
        </h2>

        <p className="text-[#A3A3A3] mt-4 text-sm max-w-xl mx-auto">
          Trade, earn, lend, pay, govern, and explore NFTs — all from one seamless
          multi-chain app built for modular freedom.
        </p>
      </div>

      {/* TOP ROW — FIXED LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Trade & Earn (2 columns) */}
        <ModuleCard
          title="Trade & Earn"
          desc="Swap assets, provide liquidity, and earn yields. Manage all positions seamlessly."
          img="/images/modules/trade.svg"
          className="md:col-span-2"
        />

        {/* Lending */}
        <ModuleCard
          title="Lending & Borrowing"
          desc="Deposit assets or borrow securely with real-time health tracking."
          img="/images/modules/lending.svg"
          className="md:flex-col-reverse"
         
        />

        {/* TIMIPay */}
        <ModuleCard
          title="TIMIPay"
          desc="Send, receive, and automate crypto payments instantly."
          img="/images/modules/pay.svg"
        />
      </div>

      {/* BOTTOM ROW — FIXED LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">
        <ModuleCard
          title="NFT Marketplace & P2P"
          desc="Buy, sell, stake NFTs, or trade directly with users through escrow-protected smart contracts for trust and flexibility."
          img="/images/modules/nft.svg"
          className="md:flex-col-reverse"
        />

        <ModuleCard
          title="Deal Brokerage & Launchpad"
          desc="Post milestone-based deals or grow your project with fair launches, liquidity locks, and mentorship."
          img="/images/modules/analytics.svg"
          className="md:col-span-2 "
        />

        <ModuleCard
          title="Governance & Analytics"
          desc="Participate in TIWI’s DAO, create proposals, vote with TWC, and track your portfolio across all chains in real time."
          img="/images/modules/deals.svg"
          className="md:flex-col-reverse"
        />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  desc: string;
  img: string;
  className?: string;
}

function ModuleCard({ title, desc, img, className }: CardProps) {
  return (
    <div
      className={`flex flex-col bg-[#0B0E0C] rounded-xl overflow-hidden h-full min-h-[200px] ${className}`}
    >
      <Image
        src={img}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover transition-all duration-300"
      />

      <div className="relative p-3 flex flex-col justify-end">
        <h3 className="text-lg text-[#ffffff] font-medium mb-2">{title}</h3>
        <p className="text-sm text-[#B5B5B5] leading-snug">{desc}</p>
      </div>
    </div>
  );
}
