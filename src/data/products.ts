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
  },
  {
    id: 9,
    name: "Toyota 8 series 1.0t Reach truck",
    category: "MATERIAL HANDLING",
    image: "/assets/toyota_8_series_1t.png",
    isNew: true,
    brand: "Toyota",
    power: "Electric",
    capacity: "1.0 Tonne",
    availability: "In stock",
    description: "Model 8FBR10. Compact reach truck providing long hours of operation, safe warehouse navigation, and easy maintenance.",
    features: [
      "Long operating time with efficient power management",
      "Excellent visibility for safe indoor operations",
      "Operator-friendly ergonomic cabin",
      "Easy maintenance access for downtime reduction",
      "Outstanding stability during turns and load handling"
    ],
    additionalInfo: {
      "Model": "8FBR10",
      "Load Capacity": "1000 kg",
      "Lift Height": "6000 mm",
      "Usage Intensity": "Medium-High",
      "Transport Distance": "Medium",
      "Suitable Areas": "Warehouses",
      "Operator Position": "Standing",
      "Travel Speed (no load)": "10.5 km/h",
      "Power Type": "Lead acid / Li-ion"
    }
  },
  {
    id: 10,
    name: "Toyota High Capacity Deep-Reach truck, 1.45t",
    category: "MATERIAL HANDLING",
    image: "/assets/toyota_1.45t_reach.png",
    isNew: true,
    brand: "Toyota",
    power: "Electric",
    capacity: "1.45 Tonne",
    availability: "In stock",
    description: "Model 7520-DR32. Offers highest lift heights and fastest cycle times, providing greater capacity retention.",
    features: [
      "Pantograph type deep-reach functionality for double-deep racking",
      "Higher residual capacity in second pallet position",
      "Good visibility with open view mast design",
      "Multifunction color touchscreen display for real-time analytics"
    ],
    additionalInfo: {
      "Model": "7520-DR32",
      "Load Capacity": "1451 kg",
      "Lift Height": "11277 mm",
      "Usage Intensity": "High",
      "Transport Distance": "Medium-Long",
      "Suitable Areas": "Warehouses",
      "Operator Position": "Standing",
      "Travel Speed (no load)": "12.8 km/h",
      "Power Type": "Lead acid"
    }
  },
  {
    id: 11,
    name: "Godrej GX Series Diesel Forklift",
    category: "MATERIAL HANDLING",
    image: "/assets/godrej_gx.png",
    isNew: false,
    brand: "Godrej",
    power: "Diesel",
    capacity: "1.5-3 Tonne",
    availability: "In stock",
    description: "Rugged and reliable diesel forklift built for demanding outdoor industrial applications.",
    features: [
      "High performance fuel-efficient industrial diesel engine",
      "Clear view mast for enhanced forward visibility",
      "Ergonomically designed adjustable suspension seat",
      "Hydraulic power steering for fatigue-free operation",
      "Heavy-duty axle for superior load stability"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Capacity": "1500 kg - 3000 kg",
      "Lift Height": "3000 mm - 6000 mm",
      "Fuel Type": "Diesel",
      "Usage": "Outdoor / Heavy Industrial",
      "Transmission": "Automatic / Fluid Drive"
    }
  },
  {
    id: 12,
    name: "Crown FC 5700 Electric Forklift",
    category: "MATERIAL HANDLING",
    image: "/assets/crown_fc_5700.png",
    isNew: false,
    brand: "Crown",
    power: "Electric",
    capacity: "2-3 Tonne",
    availability: "In stock",
    description: "Model FC 5700. Intrinsically stable design with superior visibility and multi-shift performance.",
    features: [
      "Advanced AC motors for higher travel and lift speeds",
      "Access 1 2 3 comprehensive system control",
      "Intrinsic Stability System™ features for added safety",
      "Flexible battery options for multi-shift operations",
      "Power steering for effortless maneuverability"
    ],
    additionalInfo: {
      "Brand": "Crown",
      "Model": "FC 5700",
      "Capacity": "2000 kg - 3000 kg",
      "Voltage": "36V / 48V",
      "Tires": "Solid Cushion",
      "Fuel Type": "Electric"
    }
  },
  {
    id: 13,
    name: "Godrej Bravo Electric Forklift",
    category: "MATERIAL HANDLING",
    image: "/assets/godrej_bravo.png",
    isNew: true,
    brand: "Godrej",
    power: "Electric",
    capacity: "1.5 Tonne",
    availability: "In stock",
    description: "Eco-friendly, compact electric forklift designed for indoor warehousing and manufacturing units.",
    features: [
      "Zero emission operation, eco-friendly",
      "Twin motor front drive for maximum agility",
      "Regenerative braking for increased shift life",
      "Digital display with real-time diagnostics",
      "Maintenance-free oil-immersed disc brakes"
    ],
    additionalInfo: {
      "Brand": "Godrej",
      "Series": "Bravo",
      "Capacity": "1.5 Tonne",
      "Battery Type": "Lead Acid / Li-ion",
      "Lift Height": "Up to 6000 mm",
      "Usage": "Indoor Warehouse"
    }
  },
  {
    id: 14,
    name: "Flipper+ Walk Behind Sweeper",
    category: "FACILITY MANAGEMENT",
    image: "/assets/roots_flipperplus.png",
    isNew: false,
    brand: "Roots",
    power: "Manual",
    capacity: "Mini",
    availability: "In stock",
    description: "Extremely maneuverable manual sweeper with small capacity hopper, easy to operate in tight spaces.",
    features: [
      "Robust anti-shock frame with high durability",
      "Simple push-behind mechanism with no cables",
      "Excellent cleaning on small to medium-sized areas",
      "Easy to empty hopper for efficient waste disposal",
      "Compact design for convenient storage"
    ],
    additionalInfo: {
      "Brand": "Roots",
      "Model": "Flipper+",
      "Sweeping Type": "Manual / Walk-behind",
      "Sweeping Width": "650 mm",
      "Application": "Small areas / Footfall zones"
    }
  },
  {
    id: 15,
    name: "Roots Sweep B70 Walk Behind Sweeper",
    category: "FACILITY MANAGEMENT",
    image: "/assets/roots_sweepb70.png",
    isNew: false,
    brand: "Roots",
    power: "Electric",
    capacity: "Medium",
    availability: "In stock",
    description: "Battery-operated, traction-enabled sweeper providing excellent cleaning performance on various floor types.",
    features: [
      "High productivity for large indoor and outdoor areas",
      "Battery operated with easy recharging",
      "Quiet operation suitable for malls and hospitals",
      "Efficient filtration system for dust-free sweeping",
      "Robust brush system for deep cleaning"
    ],
    additionalInfo: {
      "Brand": "Roots",
      "Model": "Sweep B70",
      "Power Source": "Battery 24V",
      "Traction": "Self-propelled",
      "Sweeping Width": "700 mm",
      "Application": "Industries / Commercial complexes"
    }
  }
];

// Combine the base products
export const products: ProductType[] = baseProducts;

// We need a specific array for the new full list
export const allProducts: ProductType[] = baseProducts;
