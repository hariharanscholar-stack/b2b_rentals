import MainLayout from "@/components/layout/MainLayout";
import ProductDetails from "@/components/sections/ProductDetails";
import { allProducts } from "@/data/products";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = allProducts.find((p) => p.id.toString() === resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found | B2B Rentals",
    };
  }

  return {
    title: `${product.name} - Rental Details | B2B Rentals`,
    description: product.description || `Rent ${product.name} from B2B Rentals. High-quality ${product.category} equipment for your industrial needs.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = allProducts.find((p) => p.id.toString() === resolvedParams.id);

  if (!product) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </MainLayout>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://b2brentals.netlify.app${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "B2B Rentals"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://b2brentals.netlify.app/rental/${resolvedParams.id}`,
      "priceCurrency": "INR",
      "availability": product.availability === "In stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "B2B Rentals"
      }
    }
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetails id={resolvedParams.id} />
    </MainLayout>
  );
}
