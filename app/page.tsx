import FAQSection from "@/components/FAQsection";
import HeroSection from "@/components/HomeHero";
import LaunchLifecycle from "@/components/LaunchLifecycle";
import PartnersSlider from "@/components/PartnersSlider";
import ProductModules from "@/components/ProductModules";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-[Manrope] font-black text-4xl">
      
     <HeroSection />
     <ProductModules />
     <LaunchLifecycle />
     <PartnersSlider />
     <FAQSection />
    </div>
  );
}
