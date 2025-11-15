"use client";

import Image from "next/image";

export default function PartnersSlider() {
  const logos = [
    "/images/Frame1.svg",
    "/images/Frame2.svg",
    "/images/Frame4.svg",
    "/images/Frame5.svg",
    "/images/Frame6.svg",
    "/images/Frame7.svg",
    "/images/Frame8.svg",
    "/images/Frame9.svg",
    "/images/Frame10.svg",
    "/images/Frame11.svg",
    "/images/Frame12.svg",
    "/images/Frame13.svg",
    "/images/Frame14.svg",
    // "/images/Frame15.svg"
  ];

  return (
    <section className="bg-[#010501] py-20 text-center text-white">
      <div className="flex flex-col items-center mb-4 px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="border-l-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#B1F12873] to-[#010501]" />
          <span className="  text-[#B5B5B5] text-sm md:text-xl font-medium">
            Partners
          </span>
          <div className="border-r-2 border-[#B1F128] w-8 h-8 bg-linear-to-r from-[#010501] to-[#B1F12873]" />
        </div>

        <h2 className="mt-4 text-3xl font-semibold leading-snug">
          Bridging Every Chain.
          <br />
          <span className="text-[#B1F128]">Partnering for Growth</span>
        </h2>
      </div>

      {/* TRUE infinite seamless loop */}
      <div className="overflow-hidden w-full mt-10">
        <div className="flex animate-scroll-left w-max">
          {/* Repeat the list 4× so it appears infinite */}
          {[...Array(4)].map((_, dupIndex) => (
            <div key={dupIndex} className="flex gap-12 px-5">
              {logos.map((src, i) => (
                <Image
                  key={`${dupIndex}-${i}`}
                  src={src}
                  width={48}
                  height={48}
                  alt=""
                  className="w-12 h-12 object-contain opacity-90 transition-transform"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
