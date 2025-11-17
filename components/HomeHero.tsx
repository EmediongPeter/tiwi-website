import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010501] pt-40 md:pt-48 pb-40 select-none">
      {/* Floating Leaves */}
      <Image src="/images/Leave3.svg" alt="leaf" width={48} height={48} className="absolute left-72 top-120 w-10 h-10 opacity-80" />
      <Image src="/images/Leave1.svg" alt="leaf" width={66} height={66} className="absolute right-64 top-20 w-20 h-12 opacity-80" />
      <Image src="/images/Leave2.svg" alt="leaf" width={48} height={48} className="absolute left-[31.5%] top-46 w-10 h-10 opacity-60" />

      <div className="flex flex-col items-center text-center px-6">
        {/* Pill Tag */}
        <div className="mb-8 text-[#CEFF8B] border border-[#CEFF8B]/20 rounded-full px-6 py-2 text-sm tracking-wide flex items-center gap-2">
          <span className="text-[#CEFF8B]">✨</span>
          Multi chain. Non custodial. Mobile first. Mainnet ready.
        </div>

        {/* Title */}
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-4xl">
          Powering the <span className="text-[#CEFF8B] underline decoration-[#CEFF8B]">Next Evolution</span> of
          <br />
          <span className="text-[#7EFF43]">Decentralized Finance</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl text-lg mb-8">
          Trade, stake, lend, pay, and build across multiple chains in one unified Super App.
        </p>

        {/* CTA */}
        <button
          className="bg-gradient-to-b from-[#C5FF85] to-[#7EFF43] text-black font-semibold px-8 py-3 rounded-full shadow-lg mb-10 hover:opacity-90 transition"
        >
          Launch App ➤
        </button>

        {/* User Stats */}
        <div className="flex items-center gap-6 mb-12">
        

<Image src="/images/users.svg" alt="user" width={48} height={48} className="rounded-full w-32" />

          <div className="text-left text-white">
            <p className="text-2xl font-bold">2,000+</p>
            <p className="text-sm text-gray-300">Live users</p>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex items-center gap-4">
          <Image src="/images/Android.svg" alt="Google Play" width={48} height={48} className="w-40 h-auto cursor-pointer" />
          <Image src="/images/Apple.svg" alt="App Store" width={48} height={48} className="w-40 h-auto cursor-pointer" />
        </div>

        {/* Bottom Ribbon */}
        <div className="mt-20 relative w-full flex justify-center">
          <div
            className="w-[140%] rotate-[-8deg] bg-linear-to-r from-[#C5FF85] to-[#7EFF43] py-6 px-4 flex justify-around text-black font-semibold text-center"
          >
            <div>
              <p className="text-xl">24/7</p>
              <p className="text-sm font-normal">Protocol Status</p>
            </div>
            <div>
              <p className="text-xl">$10m</p>
              <p className="text-sm font-normal">Trading Volume</p>
            </div>
            <div>
              <p className="text-xl">56+</p>
              <p className="text-sm font-normal">Supported chains</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image */}
      <div className="absolute right-0 bottom-0 translate-y-10 w-[380px] md:w-[480px]">
        <Image src="/images/Phonetiwi.svg" alt="App Preview" width={48} height={48} className="w-160 object-contain" />
      </div>
    </section>
  );
}
