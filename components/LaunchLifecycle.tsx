"use client";

import Image from "next/image";

export default function LaunchLifecycle() {
  const phases = [
    {
      number: "1",
      title: "Phase",
      items: ["Trade", "Liquidity", "Cross-chain", "Wallet", "Staking V1.0"],
    },
    {
      number: "2",
      title: "Phase",
      items: ["Staking V2.0", "Farming", "NFT Staking", "Treasury"],
    },
    {
      number: "3",
      title: "Phase",
      items: ["Lending", "Borrowing", "TIWI Pay", "Payroll", "RWA Crowdfunding"],
    },
    {
      number: "4",
      title: "Phase",
      items: [
        "Launchpad",
        "Incubator",
        "AI-assisted strategies",
        "NFT Utilities",
      ],
    },
    {
      number: "5",
      title: "Phase",
      items: ["P2P Exchange", "Deal Brokerage", "Global Scaling"],
    },
  ];

  return (
    <section className="bg-[#010501] py-20 text-white px-6">
      {/* Header */}
      <div className="text-center mb-16">
         <div className="flex items-center justify-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
            Launch Life Cycle
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>

        <h2 className="mt-6 text-3xl font-semibold leading-snug">
          From Core to Cosmos
          <br />
          <span className="text-lime-400">The Evolution of TIWI</span>
        </h2>
      </div>

      {/* YOUR EXACT GRID — BUT BALANCED */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">

        {/* FIRST ROW – 3 CARDS */}
        <div className="rounded-2xl h-full">
          <PhaseCard data={phases[0]} />
        </div>

        <div className="rounded-2xl h-full">
          <PhaseCard data={phases[1]} />
        </div>

        <div className="rounded-2xl h-full">
          <PhaseCard data={phases[2]} />
        </div>

        {/* SECOND ROW – 2 COL + 1 COL */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl h-full">
            <PhaseCard data={phases[3]} />
          </div>

          <div className="rounded-2xl h-full">
            <PhaseCard data={phases[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCard({
  data,
}: {
  data: { number: string; title: string; items: string[] };
}) {
  return (
    <div className="relative bg-[#0B0E0C] rounded-2xl p-6 overflow-hidden shadow-sm h-full flex flex-col gap-4 justify-between">

      {/* Large Background Number */}
      <span
        className={`absolute text-[360px] font-extrabold ${
          data.number === "1" ? "text-[#156200]" : "text-[#1F261E]"
        } -right-14 -top-18`}
      >
        {data.number}
      </span>

      {/* Phase label */}
      <span className="inline-flex bg-[#1F261E] items-center px-4 py-2  text-xs text-[#B1F128] mb-8 relative z-10 self-start">
        {data.title}
      </span>

      {/* Items with a small icon between each */}
      <ul className="space-y-1 relative z-10">
        {data.items.map((item, i) => (
          <li key={i} className="flex items-center text-[#B5B5B5] text-sm gap-3 py-1">
            <Image
              src={data.number === "1" && i === 0 ? "/images/checkmark-badge-01.svg" : "/images/checkmark-badge.svg"}
              alt={data.number === "1" && i === 0 ? "first item icon" : "checkmark badge"}
              width={14}
              height={14}
              className="w-4 h-4 flex-shrink-0"
            />
            <span className="leading-tight">{item}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
