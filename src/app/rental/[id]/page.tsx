import MainLayout from "@/components/layout/MainLayout";
import ProductDetails from "@/components/sections/ProductDetails";

export const metadata = {
  title: "Rental Equipment Details | B2B Rentals",
  description: "View details of our rental equipment. High-quality forklifts, stackers, and heavy handling equipment for rent.",
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  return (
    <MainLayout>
      <ProductDetails id={resolvedParams.id} />
    </MainLayout>
  );
}
