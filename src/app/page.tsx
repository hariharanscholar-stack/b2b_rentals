import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/sections/Hero";
import PartnerLogos from "@/components/sections/PartnerLogos";
import Categories from "@/components/sections/Categories";
import PopularEquipment from "@/components/sections/PopularEquipment";
import CoreOfferings from "@/components/sections/CoreOfferings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessApproach from "@/components/sections/ProcessApproach";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <PartnerLogos />
      <Categories />
      <PopularEquipment />
      <CoreOfferings />
      <WhyChooseUs />
      <ProcessApproach />
    </MainLayout>
  );
}
