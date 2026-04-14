import SearchResults from "../../components/sections/SearchResults";
import prisma from "@/lib/prisma";

export default async function SearchPage() {
  const allProducts = await prisma.product.findMany();

  return <SearchResults allProducts={allProducts} />;
}
