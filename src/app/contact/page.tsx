import MainLayout from "@/components/layout/MainLayout";
import ContactPage from "@/components/sections/ContactPage";

export const metadata = {
  title: "Contact Us | B2B Rentals",
  description: "Get in touch with B2B Rentals for all your equipment rental needs.",
};

export default function Contact() {
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
}
