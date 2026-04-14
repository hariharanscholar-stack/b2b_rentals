import MainLayout from "@/components/layout/MainLayout";
import RentalPage from "@/components/sections/RentalPage";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Rental Product Range | B2B Rentals",
  description: "Browse our wide range of rental products, including counter balance trucks, warehousing equipment, cleaning equipment, and power tools.",
};

export default async function Rental() {
  const products = await prisma.product.findMany({
    orderBy: {
      productId: 'asc'
    }
  });

  return (
    <MainLayout>
      <RentalPage initialProducts={products} />
    </MainLayout>
  );
}
