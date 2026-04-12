import MainLayout from "@/components/layout/MainLayout";
import RentalPage from "@/components/sections/RentalPage";

export const metadata = {
  title: "Rental Product Range | B2B Rentals",
  description: "Browse our wide range of rental products, including counter balance trucks, warehousing equipment, cleaning equipment, and power tools.",
};

export default function Rental() {
  return (
    <MainLayout>
      <RentalPage />
    </MainLayout>
  );
}
