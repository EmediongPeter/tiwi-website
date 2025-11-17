"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is TIWI custodial?",
    answer:
      "No. TIWI Wallet is fully non-custodial — you control your keys.",
  },
  {
    question: "Can I pay gas without native tokens?",
    answer:
      "Yes. You can pay gas using TWC or the swap token, with live USD estimates shown.",
  },
  {
    question: "Which chains are supported?",
    answer:
      "TIWI supports major EVM and non-EVM chains, with more added over time.",
  },
  {
    question: "What are the lending limits?",
    answer:
      "Borrow up to 50% of your collateral’s value. Minimum $50, maximum $5,000.",
  },
  {
    question: "Can I stake NFTs?",
    answer:
      "Yes. Verified NFT collections can be staked for yield in the Earn Hub.",
  },
  {
    question: "How do merchants use TIWI Pay?",
    answer:
      "Create a merchant profile, generate QR invoices, and accept stablecoins or TWC for payments and payroll.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#010501] py-20 px-6 flex flex-col items-center text-white">
      
      {/* TOP LABEL + GREEN LINES */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
            FAQ
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-xl font-semibold leading-7">
          Frequently Asked <br />
          <span className="text-[#B1F128]">Questions</span>
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="w-full max-w-2xl space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#121712] overflow-hidden"
          >
            {/* Question row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg text-[#B5B5B5] font-normal"
            >
              {faq.question}

              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#B5B5B5]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#B5B5B5]" />
              )}
            </button>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-sm text-[#B5B5B5]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
