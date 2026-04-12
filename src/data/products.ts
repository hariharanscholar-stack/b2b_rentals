export type ProductType = {
  id: number;
  name: string;
  category: string;
  image: string;
  isNew: boolean;
  brand?: string;
  power?: string;
  capacity?: string;
  availability?: string;
  description?: string;
  tonnages?: number[];
  powers?: string[];
  features?: string[];
  additionalInfo?: Record<string, string>;
};

export const baseProducts: ProductType[] = [
  {
    id: 1,
    name: "UNO 4 Electric",
    category: "MATERIAL HANDLING",
    image: "/assets/uno_4_electric.png",
    isNew: true,
    brand: "Godrej",
    power: "Electric",
    capacity: "1 Tonne",
    availability: "In stock",
    description: "Efficient 4W electric forklift with operator-friendly design, ensuring safety with improved visibility for operator.",
    tonnages: [1.5, 2, 2.5, 3],
    powers: ["Electric", "Diesel", "Manual"],
    features: [
      "No deration up to 4500 MFH",
      "Thoughtfully placed controls for intuitive operations",
      "With highest in class battery option of 756Ah, UNO can operate for two shifts without requiring a change in battery",
      "Standard safety features include anti-rollback and speed reduction at turns",
      "Multifunctional LCD display with fault code diagnostics",
      "Multiple speed modes - Slow/Normal/Fast",
      "Two-year warranty",
      "Solid Cushion tyres for superior ride comfort"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "1.5 to 3 Tonne",
      "Lift Height": "3660",
      "Model Name/Number": "GX 150E UNO / GX 200E UNO",
      "Usage/Application": "Industrial",
      "Fuel Type": "Electric",
      "Color": "Yellow& Black",
      "Load Center Distance": "500mm",
      "Maximum Gradeability": "18 %",
      "Country of Origin": "Made in India"
    }
  },
  {
    id: 2,
    name: "Diesel Forklift",
    category: "MATERIAL HANDLING",
    image: "/assets/Diesel_forklift.png",
    isNew: false,
    brand: "Toyota",
    power: "Diesel",
    capacity: "1.5 Tonne",
    availability: "In stock",
    description: "Robust diesel-powered forklift ideal for heavy-duty outdoor applications and rough terrain.",
    tonnages: [2, 3, 5],
    powers: ["Diesel"],
    features: [
      "High performance industrial diesel engine",
      "Full suspension seat for operator comfort",
      "Clear view mast for enhanced forward visibility",
      "Easy access engine cover for maintenance",
      "Heavy-duty chassis and steer axle"
    ],
    additionalInfo: {
      "Brand": "Toyota",
      "Capacity": "1.5 to 5 Tonne",
      "Lift Height": "4500 mm",
      "Model Name/Number": "FD Series",
      "Usage/Application": "Outdoor / Rough Terrain",
      "Fuel Type": "Diesel",
      "Color": "Green & Grey",
      "Transmission": "Automatic",
      "Warranty": "1 Year"
    }
  },
  {
    id: 3,
    name: "Articulated Forklift",
    category: "MATERIAL HANDLING",
    image: "/assets/Articulated_forklift.png",
    isNew: false,
    brand: "IPC",
    power: "Electric",
    availability: "In stock",
    description: "Specialized articulated forklift maximizing storage density in narrow aisles.",
    tonnages: [1.2, 1.5, 2],
    powers: ["Electric"],
    features: [
      "220-degree articulation for VNA (Very Narrow Aisle) operation",
      "Operates inside and outside, replacing reach and counterbalance trucks",
      "High visibility overhead guard",
      "AC technology on traction and hoist motors",
      "Independent power steering"
    ],
    additionalInfo: {
      "Brand": "IPC",
      "Capacity": "1.5 to 2 Tonne",
      "Lift Height": "up to 9000 mm",
      "Usage/Application": "VNA Warehousing",
      "Fuel Type": "Electric",
      "Aisle Width Rqmt": "1.8 m",
      "Battery": "48V / 600Ah"
    }
  },
  {
    id: 4,
    name: "HL Reach Truck",
    category: "MATERIAL HANDLING",
    image: "/assets/HL_Reach_truck.png",
    isNew: false,
    brand: "Tennant",
    power: "Electric",
    availability: "Out of Stock",
    description: "High-level reach truck designed for intensive warehouse applications and high racking.",
    tonnages: [1.4, 1.6, 2],
    powers: ["Electric"],
    features: [
      "Multi-function joystick for smooth proportional control",
      "Regenerative braking for improved battery life",
      "360-degree electric steering",
      "High-level reach capability for dense racking",
      "Load weight indicator"
    ],
    additionalInfo: {
      "Brand": "Tennant",
      "Capacity": "1.4 to 2 Tonne",
      "Lift Height": "up to 12000 mm",
      "Usage/Application": "High Racking",
      "Fuel Type": "Electric",
      "Mast Type": "Triplex",
      "Color": "Yellow & Black"
    }
  },
  {
    id: 5,
    name: "Electric Stacker",
    category: "MATERIAL HANDLING",
    image: "/assets/uno_4_electric.png",
    isNew: false,
    brand: "Godrej",
    power: "Electric",
    capacity: "1 Tonne",
    availability: "In stock",
    description: "Compact pedestrian electric stacker for light to medium duty stacking applications.",
    tonnages: [1, 1.2, 1.5],
    powers: ["Electric", "Manual"],
    features: [
      "Compact design for tight spaces",
      "Ergonomic tiller handle with dual controls",
      "Emergency reverse belly button for safety",
      "Built-in charger for convenience",
      "Maintenance-free battery options"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "1 to 1.5 Tonne",
      "Lift Height": "3300 mm",
      "Usage/Application": "Light Warehousing",
      "Fuel Type": "Electric",
      "Operation": "Pedestrian"
    }
  },
  {
    id: 6,
    name: "Pallet Truck",
    category: "MATERIAL HANDLING",
    image: "/assets/uno_4_electric.png",
    isNew: false,
    brand: "Godrej",
    power: "Electric",
    capacity: "2.5 Tonne",
    availability: "In stock",
    description: "Heavy-duty electric pallet truck for rapid horizontal transport.",
    tonnages: [2, 2.5, 3],
    powers: ["Electric"],
    features: [
      "Ride-on platform with side guards",
      "High-speed travel for long distances",
      "Electric power steering",
      "Quick battery roll-out functionality",
      "Heavy-duty forks"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "2.5 to 3 Tonne",
      "Lift Height": "200 mm",
      "Usage/Application": "Horizontal Transport",
      "Fuel Type": "Electric",
      "Top Speed": "9 km/h"
    }
  },
  {
    id: 7,
    name: "Tow Truck",
    category: "MATERIAL HANDLING",
    image: "/assets/uno_4_electric.png",
    isNew: false,
    brand: "Godrej",
    power: "Electric",
    capacity: "5 Tonne",
    availability: "In stock",
    description: "Electric tow tractor for industrial towing applications.",
    tonnages: [3, 5, 8],
    powers: ["Electric"],
    features: [
      "Massive towing capacity with compact footprint",
      "Seated operator position with excellent all-around visibility",
      "Microprocessor based controllers",
      "Automatic parking brake",
      "Front and rear lighting system"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "5 to 8 Tonne (Towing)",
      "Usage/Application": "Industrial Towing",
      "Fuel Type": "Electric",
      "Cab Type": "Open / Semi-enclosed",
      "Battery": "80V"
    }
  },
  {
    id: 8,
    name: "Hand Pallet Truck",
    category: "MATERIAL HANDLING",
    image: "/assets/uno_4_electric.png",
    isNew: false,
    brand: "Godrej",
    power: "Manual",
    capacity: "2.5 Tonne",
    availability: "In stock",
    description: "Standard manual hand pallet truck for everyday warehouse use.",
    tonnages: [2, 2.5, 3],
    powers: ["Manual"],
    features: [
      "High-quality cast iron pump",
      "Three-position control handle (Lift, Neutral, Lower)",
      "Entry and exit rollers for easy pallet access",
      "Ergonomic rubber-coated handle",
      "Powder-coated frame for corrosion resistance"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "2.5 to 3 Tonne",
      "Lift Height": "200 mm",
      "Usage/Application": "Manual Transport",
      "Fuel Type": "Manual",
      "Wheel Material": "PU / Nylon",
      "Fork Length": "1150 mm"
    }
  }
];

// Combine the base products
// We'll generate an extended array just to have a decent number of products for the main rental grid
export const products: ProductType[] = Array.from({ length: 4 }).flatMap((_, i) =>
  baseProducts.slice(0, 4).map((p) => ({ ...p, id: i * 4 + p.id }))
);

// We need a specific array for the new full list
export const allProducts: ProductType[] = baseProducts;
