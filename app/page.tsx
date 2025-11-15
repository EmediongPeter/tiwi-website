import FAQSection from "@/components/FAQsection";
import HeroSection from "@/components/HomeHero";
import LaunchLifecycle from "@/components/LaunchLifecycle";
import PartnersSlider from "@/components/PartnersSlider";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-[Manrope] font-black text-4xl">
      
     <HeroSection />
     <LaunchLifecycle />
     <PartnersSlider />
     <FAQSection />
    </div>
  );
}
