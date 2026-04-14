import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { baseProducts } from "../src/data/products";

const connectionString = "postgresql://postgres:b2b%40saran123@[2406:da18:243:7426:5322:e4ad:3237:98e6]:5432/postgres?sslmode=require";
const pool = new Pool({ 
  connectionString,
  ssl: {
    rejectUnauthorized: false // Common for Supabase dev connections
  }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Start seeding...");

  for (const p of baseProducts) {
    const product = await prisma.product.upsert({
      where: { productId: p.id },
      update: {},
      create: {
        productId: p.id,
        name: p.name,
        category: p.category,
        image: p.image,
        isNew: p.isNew,
        brand: p.brand,
        power: p.power,
        capacity: p.capacity,
        availability: p.availability,
        description: p.description,
        tonnages: p.tonnages || [],
        powers: p.powers || [],
        features: p.features || [],
        additionalInfo: p.additionalInfo as any,
      },
    });
    console.log(`Created product with id: ${product.productId}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
