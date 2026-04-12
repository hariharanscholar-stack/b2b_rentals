import MainLayout from "@/components/layout/MainLayout";
import AboutPage from "@/components/sections/AboutPage";

export const metadata = {
  title: "About Us | B2B Rentals",
  description:
    "Learn about B2B Rentals – India's trusted B2B rental marketplace for EaaS, connecting equipment owners, OEMs, and businesses across industries.",
};

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
    </MainLayout>
  );
}

