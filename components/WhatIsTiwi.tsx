export default function WhatIsTiwi() {
  return (
    <section className="relative w-full bg-[#051401] py-16 md:py-20 px-4 md:px-0 rounded-b-3xl overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute right-8 md:right-32 top-20 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-radial from-[#B1F128] to-[#466B06] opacity-60 blur-sm" />
      <div className="absolute left-8 md:left-20 top-32 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-radial from-[#B1F128] to-[#466B06] opacity-40 blur-md" />
      <div className="absolute right-16 md:right-48 -top-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-radial from-[#B1F128] to-[#466B06] opacity-50 blur-md" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 md:gap-10">
        {/* Label with decorative borders */}
        <div className="flex items-center justify-center gap-1 md:gap-2">
          {/* Left border decoration */}
          <div className="relative w-6 md:w-8 h-7 md:h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B1F128]/45 to-[#051401]" />
            <div className="absolute left-0.5 top-0.5 bottom-0.5 w-0.5 bg-[#B1F128] rounded-full" />
          </div>

          <p className="text-[#B5B5B5] text-xs md:text-lg font-medium px-2">
            What is Tiwi Protocol
          </p>

          {/* Right border decoration */}
          <div className="relative w-6 md:w-8 h-7 md:h-8">
            <div className="absolute inset-0 bg-gradient-to-l from-[#B1F128]/45 to-[#051401]" />
            <div className="absolute right-0.5 top-0.5 bottom-0.5 w-0.5 bg-[#B1F128] rounded-full" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-center text-2xl md:text-[40px] font-semibold leading-tight md:leading-tight tracking-tight md:tracking-[-0.04em] max-w-3xl">
          <span className="text-white">Your Entire DeFi Experience in </span>
          <span className="text-[#B1F128]">One Super App</span>
        </h2>

        {/* Description */}
        <p className="text-[#B5B5B5] text-center text-base md:text-xl font-medium leading-relaxed md:leading-[160%] max-w-4xl px-4 md:px-0">
          TIWI Protocol is a multi-chain DeFi Super App that combines trading, lending, yield, payments, NFTs, governance, and developer tools in one platform. Built mobile-first, it features a non-custodial wallet and a flexible relayer-powered gas system, letting users transact easily across multiple chains.
        </p>
      </div>
    </section>
  );
}
