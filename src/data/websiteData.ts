export interface CompanyInfo {
  name: string;
  tagline: string;
  motto: string;
  foundedYear: string;
  location: string;
  address: string;
  registeredOfficeAddress?: string;
  phone: string;
  email: string;
  crNumber: string;
  vatNumber: string;
  heroHeadline: string;
  heroDescription: string;
  aboutHeroHeadline: string;
  aboutHeroDescription: string;
  aboutText: string;
  ourPromise: string;
  visionText: string;
  missionText: string;
  heroImage: string;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface Discipline {
  id: string;
  number: string;
  title: string;
  shortTitle?: string;
  description: string;
  fullDescription: string;
  image: string;
  capabilities: string[];
  deliverables: string[];
  specs: string[];
  keyCapabilities?: string[];
  specializedDeliverables?: string[];
}

export interface FleetModel {
  name: string;
  capacity: string;
  specs: string;
}

export interface FleetCategory {
  id: string;
  name: string;
  category: string;
  badgeTag: string;
  description: string;
  isFeatured?: boolean;
  image: string;
  image2?: string;
  image3?: string;
  specifications: string[];
  brands?: string[];
  models: FleetModel[];
}

export interface FleetAdvantage {
  number: string;
  title: string;
  description: string;
}

export interface IndustrySector {
  id: string;
  secTag: string;
  indTag?: string;
  title: string;
  description: string;
  image: string;
  details?: string[];
}

export interface CompanyMilestone {
  phase: string;
  title: string;
  description: string;
}

export interface AboutValueItem {
  number: string;
  title: string;
  subhead: string;
  label: string;
  text: string;
  badge?: string;
  quote?: string;
  isDark?: boolean;
}

export interface FacilityLocation {
  city: string;
  badge: string;
  description: string;
  name?: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "WELTWISSEN",
  tagline: "INDUSTRIAL CONSTRUCTION & LOGISTICS",
  motto: "WORLD KNOWLEDGE · GROUNDED IN DELIVERY",
  foundedYear: "2022",
  location: "AL KHOBAR, KINGDOM OF SAUDI ARABIA",
  address: "Al Khobar, Eastern Province, Kingdom of Saudi Arabia",
  registeredOfficeAddress: "11 King Khaled Street, Al Khobar Al Shamalia, Al Khobar 34427, Saudi Arabia",
  phone: "+966 13 882 2946",
  email: "info@wwtico.com",
  crNumber: "2051224890",
  vatNumber: "310455829100003",
  heroHeadline: "Precision-built for the Kingdom's hardest sites.",
  heroDescription: "WELTWISSEN delivers industrial construction, heavy equipment and project logistics for demanding sites across Saudi Arabia.",
  aboutHeroHeadline: "Precision is our starting point. Delivery is our promise.",
  aboutHeroDescription: "WELTWISSEN is a Saudi-based company delivering industrial construction, heavy equipment rental and project logistics for demanding sites across the Kingdom.",
  aboutText: "WELTWISSEN is a Saudi-owned multi-discipline contracting firm headquartered in Al Khobar, Saudi Arabia. Since 2022, we have supported critical industrial, energy, and infrastructure development across the Kingdom.",
  ourPromise: "Our promise is simple: deliver what we commit to, protect the people who make it possible, and earn trust with every project we complete.",
  visionText: "To be a dependable partner for industrial construction, equipment and logistics across the Kingdom, supporting the growth and ambition of Saudi Arabia.",
  missionText: "To deliver reliable construction, equipment rental and logistics solutions with a clear focus on quality, safety and disciplined execution.",
  heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=1200&auto=format&fit=crop",
  social: {
    facebook: "https://facebook.com/weltwissen",
    instagram: "https://www.instagram.com/weltwissen.sa?utm_source=qr",
    linkedin: "https://linkedin.com/company/weltwissen"
  }
};

export const DISCIPLINES: Discipline[] = [
  {
    id: "construction",
    number: "01",
    title: "Construction",
    shortTitle: "Construction",
    description: "Civil, mechanical, structural and pipeline works for demanding industrial environments.",
    fullDescription: "From site preparation to complex mechanical erection, we deliver full-scope civil and industrial construction projects across the Eastern Province and nationwide.",
    image: "/weltwissen/home_our/industrial_home.png",
    capabilities: [
      "Civil works & foundations",
      "Structural steel erection",
      "Mechanical & piping",
      "Site preparation & earthworks"
    ],
    deliverables: [
      "Plant & facility construction",
      "Heavy equipment foundations",
      "Industrial earthmoving",
      "Pipeline installation",
      "Structural fabrication",
      "Infrastructure civil works"
    ],
    specs: ["Aramco Approved Standards", "ISO 9001:2015 Certified", "Turnkey Capabilities"],
    keyCapabilities: [
      "Civil works & foundations",
      "Structural steel erection",
      "Mechanical & piping",
      "Site preparation & earthworks"
    ],
    specializedDeliverables: [
      "Plant & facility construction",
      "Heavy equipment foundations",
      "Industrial earthmoving"
    ]
  },
  {
    id: "equipment-rental",
    number: "02",
    title: "Equipment Rental",
    shortTitle: "Equipment Rental",
    description: "A well-maintained fleet of heavy lifting and civil equipment, available on project-based and monthly terms.",
    fullDescription: "Over 200+ meticulously maintained machinery units available for short-term rental and long-term project lease with certified, experienced operators.",
    image: "/weltwissen/home_our/equiment_home.png",
    capabilities: [
      "Heavy earthmoving equipment",
      "Lifting & crane services",
      "Transport & haulage fleet",
      "Power generation & air"
    ],
    deliverables: [
      "Excavators",
      "Heavy-Duty Trucks",
      "All-Terrain Cranes",
      "Bulldozers",
      "Wheel Loaders",
      "Motor Graders",
      "Road Rollers",
      "Flatbed Trailers",
      "Power Generators",
      "Air Compressors",
      "Tower Lights"
    ],
    specs: ["Third-party Certified", "24/7 Field Maintenance", "Rapid Mobilisation"],
    keyCapabilities: [
      "Heavy earthmoving equipment",
      "Lifting & crane services",
      "Transport & haulage fleet",
      "Power generation & air"
    ],
    specializedDeliverables: [
      "Excavators",
      "Heavy-Duty Trucks",
      "All-Terrain Cranes",
      "Bulldozers",
      "Wheel Loaders",
      "Motor Graders",
      "Road Rollers",
      "Flatbed Trailers",
      "Power Generators",
      "Air Compressors",
      "Tower Lights"
    ]
  },
  {
    id: "project-logistics",
    number: "03",
    title: "Project Logistics",
    shortTitle: "Project Logistics",
    description: "Heavy lifting, critical transport and site-to-site transfer, coordinated across the Kingdom.",
    fullDescription: "End-to-end heavy haulage, route surveying, permit clearance and material staging for complex, mega-scale projects Kingdom-wide.",
    image: "/weltwissen/home_our/project_home.png",
    capabilities: [
      "Heavy & oversized transport",
      "Route planning & permits",
      "Multi-site transfers",
      "Site mobilization & demobilization"
    ],
    deliverables: [
      "Heavy Haulage",
      "Lifting Engineering",
      "Permit & Clearance Support",
      "Warehouse Storage",
      "Site Staging & Logistics",
      "Fleet Relocation",
      "Rigging Operations",
      "Field Support"
    ],
    specs: ["Kingdom-wide Coverage", "Route Surveys Completed", "Heavy Haulage"],
    keyCapabilities: [
      "Heavy & oversized transport",
      "Route planning & permits",
      "Multi-site transfers",
      "Site mobilization & demobilization"
    ],
    specializedDeliverables: [
      "Heavy Haulage",
      "Lifting Engineering",
      "Permit & Clearance Support",
      "Warehouse Storage",
      "Site Staging & Logistics",
      "Fleet Relocation",
      "Rigging Operations",
      "Field Support"
    ]
  }
];

export const FLEET_CATEGORIES: FleetCategory[] = [
  {
    id: "excavators",
    name: "Excavators",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "High-performance diggers for heavy civil and infrastructure projects.",
    isFeatured: true,
    brands: ["CATERPILLAR", "KOMATSU", "HITACHI", "HYUNDAI"],
    image: "/weltwissen/fleet_excavator/ex-img-1.png",
    image2: "/weltwissen/fleet_excavator/ex-img-2.png",
    image3: "/weltwissen/fleet_excavator/ex-img-3.png",
    specifications: ["Tracked & wheeled", "20T–80T", "Deep excavation", "Hydraulic attachments"],
    models: [
      { name: "CAT 349D2 L", capacity: "49 Tons", specs: "Operating Weight: 48,200 kg" },
      { name: "Komatsu PC450", capacity: "45 Tons", specs: "Bucket Capacity: 2.5 m³" },
      { name: "Volvo EC380D", capacity: "38 Tons", specs: "Max Digging Depth: 7.3 m" }
    ]
  },
  {
    id: "dump-trucks",
    name: "Dump Trucks",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "Bulk material haulage for site and off-site transport.",
    image: "/weltwissen/dump_trucks.png",
    specifications: ["Rigid & articulated", "28–32 m³", "6x4 & 8x4 drive", "Reinforced dump bodies"],
    brands: ["MERCEDES-BENZ", "VOLVO", "MAN", "SCANIA"],
    models: [
      { name: "Mercedes-Benz Actros 4048", capacity: "32 m³", specs: "6x4 & 8x4 Axle Configuration" },
      { name: "MAN TGS 41.440", capacity: "28 m³", specs: "Reinforced Steel Dump Body" }
    ]
  },
  {
    id: "cranes",
    name: "Cranes",
    category: "Lifting & Access",
    badgeTag: "LIFTING",
    description: "Safe, precise lifting for construction and industrial sites.",
    image: "/weltwissen/crane.png",
    specifications: ["50–100 ton lift", "All-terrain & crawler", "Telescopic booms", "Certified rigging support"],
    brands: ["LIEBHERR", "TADANO", "KATO", "TEREX"],
    models: [
      { name: "Liebherr LTM 1100-5.2", capacity: "100 Tons", specs: "Max Boom Height: 52 m" },
      { name: "Tadano GR-800EX", capacity: "80 Tons", specs: "Rough Terrain Hydraulic Boom" },
      { name: "Kato NK-500E", capacity: "50 Tons", specs: "Telescopic Truck Crane" }
    ]
  },
  {
    id: "bulldozers-loaders",
    name: "Bulldozers & Loaders",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "Land clearing, grading and material handling.",
    image: "/weltwissen/bulldozers.png",
    specifications: ["Tracked earthmoving", "38–41 tons", "Ripper attachments", "High-traction blades"],
    brands: ["CAT", "KOMATSU"],
    models: [
      { name: "CAT D8R Bulldozer", capacity: "38 Tons", specs: "SU Blade Capacity: 8.7 m³" },
      { name: "Komatsu D155A", capacity: "41 Tons", specs: "Giant Ripper Attachment" }
    ]
  },
  {
    id: "backhoe-loaders",
    name: "Backhoe Loaders",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "Versatile digging and loading in a single unit.",
    image: "/weltwissen/mobile_blackhoe.jpg",
    specifications: ["Front & rear buckets", "8T class", "Extendable stick", "Utility-ready"],
    brands: ["CAT", "JCB", "CASE"],
    models: [
      { name: "CAT 428F2", capacity: "8.5 Tons", specs: "Extendable Stick & 4-in-1 Bucket" },
      { name: "JCB 3CX Eco", capacity: "8.1 Tons", specs: "Powershift Transmission" }
    ]
  },
  {
    id: "wheel-loaders",
    name: "Wheel Loaders",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "Fast, manoeuvrable handling for site materials.",
    image: "/weltwissen/wheel_loader.png",
    specifications: ["23–28 tons", "4.2 m³ buckets", "Aggregate handling", "Fast load cycles"],
    brands: ["CAT", "VOLVO", "KOMATSU"],
    models: [
      { name: "CAT 966H", capacity: "23 Tons", specs: "Bucket Capacity: 4.2 m³" },
      { name: "Volvo L180H", capacity: "28 Tons", specs: "OptiShift Technology" }
    ]
  },
  {
    id: "graders-rollers",
    name: "Graders & Rollers",
    category: "Heavy Machinery",
    badgeTag: "Heavy Machinery",
    description: "Surface finishing and compaction for roadworks.",
    image: "/weltwissen/graders_roller.png",
    specifications: ["Roadwork ready", "Motor graders", "Vibratory rollers", "Precision leveling"],
    brands: ["CAT", "HAMM", "BOMAG", "DYNAPAC"],
    models: [
      { name: "CAT 140K Grader", capacity: "17 Tons", specs: "Moldboard Width: 4.3 m" },
      { name: "Hamm 3411 Roller", capacity: "11 Tons", specs: "Vibratory Soil Compactor" }
    ]
  },
  {
    id: "flatbed-lowbed",
    name: "Flatbed & Lowbed",
    category: "Transport & Logistics",
    badgeTag: "TRANSPORT",
    description: "Moving heavy machinery and oversized loads.",
    image: "/weltwissen/Flatbed_Lowbed.png",
    specifications: ["45–120 ton capacity", "Multi-axle trailers", "Hydraulic goosenecks", "Oversized cargo"],
    brands: ["FAYMONVILLE", "GORICA", "MAN", "MERCEDES-BENZ"],
    models: [
      { name: "Multi-Axle Heavy Lowbed", capacity: "120 Tons", specs: "Hydraulic Gooseneck & Steered Axles" },
      { name: "Standard 40ft Flatbed", capacity: "45 Tons", specs: "Heavy Duty Twist Locks" }
    ]
  },
  {
    id: "tankers-water-trucks",
    name: "Tankers & Water Trucks",
    category: "Site Support & Utility",
    badgeTag: "TRANSPORT",
    description: "Water and liquid material transport for site needs.",
    image: "/weltwissen/Tankers_WaterTrucks.png",
    specifications: ["18,000–32,000 L", "Dust suppression", "High-pressure pumps", "Potable water option"],
    brands: ["MERCEDES-BENZ", "MAN", "ISUZU"],
    models: [
      { name: "Heavy Water Tanker", capacity: "32,000 Litres", specs: "Rear Spray Bar & High-Pressure Pump" },
      { name: "Potable Water Tanker", capacity: "18,000 Litres", specs: "Food-Grade Stainless Steel Tank" }
    ]
  },
  {
    id: "scissor-man-lifts",
    name: "Scissor & Man Lifts",
    category: "Lifting & Access",
    badgeTag: "ACCESS",
    description: "Safe access at height for site and maintenance work.",
    image: "/weltwissen/Scissor_ManLifts.png",
    specifications: ["15–28 m working height", "Electric & diesel", "Articulated booms", "Rough-terrain access"],
    brands: ["JLG", "GENIE", "HAULOTTE"],
    models: [
      { name: "Genie S-85 Telescopic", capacity: "28 m Height", specs: "Rough Terrain 4WD Diesel" },
      { name: "JLG 4394RT Scissor", capacity: "15 m Height", specs: "Dual Extension Decks" }
    ]
  },
  {
    id: "telehandlers-forklifts",
    name: "Telehandlers & Forklifts",
    category: "Material Handling",
    badgeTag: "MATERIAL HANDLING",
    description: "Material handling on and off site.",
    image: "/weltwissen/Telehandlers_Forklifts.png",
    specifications: ["4–5 ton lift", "Up to 18 m reach", "Rough-terrain tyres", "Fork & jib attachments"],
    brands: ["MANITOU", "JCB", "TOYOTA", "HYSTER"],
    models: [
      { name: "Manitou MT-X 1840", capacity: "4 Tons / 18 m", specs: "Frame Leveling & Stabilizers" },
      { name: "Toyota 8FD50 Diesel Forklift", capacity: "5 Tons", specs: "Dual Drive Pneumatic Tires" }
    ]
  },
  {
    id: "generators-compressors",
    name: "Generators & Compressors",
    category: "Power & Utility",
    badgeTag: "POWER & AIR",
    description: "Reliable power and air solutions for remote sites and long-duration projects..",
    isFeatured: true,
    image: "/weltwissen/generator_fleet.png",
    specifications: ["750–1000 output", "Diesel powered", "Weatherproof canopies", "Remote-site ready"],
    brands: ["CUMMINS", "CAT", "ATLAS COPCO", "PERKINS"],
    models: [
      { name: "Cummins C1000D5", capacity: "1000 kVA", specs: "Sound-Attenuated Weatherproof Canopy" },
      { name: "Atlas Copco XAS 750", capacity: "750 CFM", specs: "High-Pressure Diesel Compressor" }
    ]
  }
];

export const FLEET_ADVANTAGES: FleetAdvantage[] = [
  {
    number: "01",
    title: "Comprehensive Fleet",
    description: "A broad range of equipment supporting every stage of industrial construction, heavy lifting and site operations."
  },
  {
    number: "02",
    title: "Commitment to Maintenance",
    description: "Regular servicing, inspections and maintenance practices designed to keep equipment operating reliably on site."
  },
  {
    number: "03",
    title: "Industry Expertise",
    description: "Experienced teams supporting industrial, infrastructure and energy projects across Saudi Arabia."
  },
  {
    number: "04",
    title: "Well-Maintained Equipment",
    description: "Modern, dependable equipment prepared for demanding project environments and long-term site performance."
  }
];

export const HOME_SECTORS: IndustrySector[] = [
  {
    id: "sec-construction",
    secTag: "SEC_01",
    title: "Construction & Contracting",
    description: "Specialized construction for industrial and infrastructure sites - plant, process and heavy-industry builds.",
    image: "/home_indus/home_construct.png"
  },
  {
    id: "sec-oil-gas",
    secTag: "SEC_02",
    title: "Oil & Gas",
    description: "Rig support, pipeline logistics, and specialized equipment mobilization.",
    image: "/home_indus/home_oil.png"
  },
  {
    id: "sec-power",
    secTag: "SEC_03",
    title: "Power",
    description: "Transmission infrastructure, substation logistics, and grid-scale project support.",
    image: "/home_indus/home_power.png"
  },
  {
    id: "sec-water",
    secTag: "SEC_04",
    title: "Water",
    description: "Desalination, treatment plants, and pipeline logistics across arid environments.",
    image: "/home_indus/home_water.png"
  },
  {
    id: "sec-manufacturing",
    secTag: "SEC_05",
    title: "Industrial Manufacturing",
    description: "Equipment and logistics support for production facilities and industrial plant operations.",
    image: "/home_indus/indus.png"
  },
  {
    id: "sec-infrastructure",
    secTag: "SEC_06",
    title: "Infrastructure",
    description: "Roads, bridges and public works - built for durability, delivered on schedule.",
    image: "/home_indus/home_infa.png"
  }
];

export const ALL_INDUSTRIES: IndustrySector[] = [
  {
    id: "ind-construction",
    secTag: "SEC_01",
    indTag: "IND.01",
    title: "Construction & Contracting",
    description: "Heavy civil works, site development and project support for demanding construction environments.",
    image: "/weltwissen/industry/construction.png",
    details: [
      "Plant & Facility Construction",
      "Heavy Equipment Foundations",
      "Industrial Earthmoving",
      "Structural Steel Erection"
    ]
  },
  {
    id: "ind-oil-gas",
    secTag: "SEC_02",
    indTag: "IND.02",
    title: "Oil & Gas",
    description: "Equipment, construction support and logistics for complex oil and gas operations and industrial facilities.",
    image: "/weltwissen/industry/oil.png",
    details: [
      "Pipeline Corridor Works",
      "Rig Move Support",
      "Well Site Earthworks",
      "Refinery Maintenance Fleet"
    ]
  },
  {
    id: "ind-power",
    secTag: "SEC_03",
    indTag: "IND.03",
    title: "Power & Utilities",
    description: "Supporting power generation, transmission and utility infrastructure with dependable equipment and site services.",
    image: "/weltwissen/industry/power.png",
    details: [
      "Substation Site Preparation",
      "Heavy Transformer Transport",
      "Transmission Tower Foundations",
      "Grid Expansion Logistics"
    ]
  },
  {
    id: "ind-water",
    secTag: "SEC_04",
    indTag: "IND.04",
    title: "Water Infrastructure",
    description: "Equipment and project support for water treatment, distribution networks and essential infrastructure..",
    image: "/weltwissen/industry/water.png",
    details: [
      "Desalination Plant Civil Works",
      "Water Transmission Pipelines",
      "Reservoir & Tank Foundations",
      "Pump Station Earthworks"
    ]
  },
  {
    id: "ind-manufacturing",
    secTag: "SEC_05",
    indTag: "IND.05",
    title: "Industrial Manufacturing",
    description: "Supporting industrial facilities with equipment, site services and project logistics from construction through ongoing operations.",
    image: "/weltwissen/industry/industrial.png",
    details: [
      "Plant Machinery Installation",
      "Heavy Equipment Maintenance",
      "Production Line Rigging",
      "Continuous Site Logistics"
    ]
  },
  {
    id: "ind-trading",
    secTag: "SEC_07",
    indTag: "IND.06",
    title: "Trading & Supply",
    description: "Coordinated procurement, equipment supply and logistics supporting complex project requirements.",
    image: "/weltwissen/industry/trading.png",
    details: [
      "Bulk Material Haulage",
      "Laydown Yard Management",
      "Supply Chain Transport",
      "Equipment Staging"
    ]
  },
  {
    id: "ind-transport",
    secTag: "SEC_08",
    indTag: "IND.07",
    title: "Transport & Metro",
    description: "Equipment, logistics and project support for rail, metro and large-scale mobility infrastructure.",
    image: "/weltwissen/industry/metro.png",
    details: [
      "Metro Tunnel & Station Support",
      "Track Construction Machinery",
      "Heavy Girder Placement",
      "Station Access & Crane Fleet"
    ]
  },
  {
    id: "ind-government",
    secTag: "SEC_09",
    indTag: "IND.08",
    title: "Government & Infrastructure",
    description: "Supporting public infrastructure programmes with dependable equipment, project services and coordinated delivery....",
    image: "/weltwissen/industry/goverment.png",
    details: [
      "Highway & Bridge Earthmoving",
      "National Expansion Programs",
      "Municipal Development Fleet",
      "Vision 2030 Partner Logistics"
    ]
  }
];

export const INDUSTRY_SECTORS = HOME_SECTORS;

export const WHY_US_HOME_CARDS = [
  {
    id: "built-around-project",
    title: "Built Around Your Project",
    tag: "01 Core strength",
    description: "A collaborative approach built on long-term relationships and complete transparency.",
    isLarge: true
  },
  {
    id: "safety-without-compromise",
    title: "Safety Without Compromise",
    description: "Clear processes, maintained equipment and disciplined execution across every site."
  },
  {
    id: "multiple-capabilities",
    title: "Multiple Capabilities. One Team.",
    description: "Equipment rental and project logistics models engineered for value never at the cost of quality."
  },
  {
    id: "flexible-by-design",
    title: "Flexible By Design",
    description: "Construction, equipment rental and project logistics one standard, one team, industrial sites only."
  }
];

export const WHY_US_INDUSTRIES = [
  {
    number: "01",
    title: "Partnership First",
    description: "We work closely with project teams, adapting our approach to site requirements, timelines and changing conditions."
  },
  {
    number: "02",
    title: "Quality & Safety",
    description: "Quality and safety are built into how we plan, prepare and execute every operation."
  },
  {
    number: "03",
    title: "Integrated Services",
    description: "Construction, equipment rental and project logistics working together through one coordinated team."
  },
  {
    number: "04",
    title: "HSE Commitment",
    description: "Rigorous health, safety and environmental standards embedded in every phase of execution."
  }
];
export const WHY_US_INDUSTRIES_CARDS = WHY_US_INDUSTRIES;

export const QUALITY_SAFETY_STANDARDS = [
  {
    number: "01",
    title: "Certified materials & testing",
    description: "Materials and structural components are checked against project requirements.",
    isHighlighted: false
  },
  {
    number: "02",
    title: "Technical training ",
    description: " Operators and rigging teams are trained and certified for their responsibilities.",
    isHighlighted: false
  },
  {
    number: "03",
    title: "Safety compliance",
    description: "Operations follow applicable Saudi industrial and infrastructure safety requirements.",
    isHighlighted: true
  },
  {
    number: "04",
    title: "Equipment inspection ",
    description: "Equipment is inspected and maintained before deployment.",
    isHighlighted: false
  },
  {
    number: "05",
    title: "Transparent reporting",
    description: "Clear project reporting, documentation and commercial communication throughout delivery.",
    isHighlighted: false
  }
];

export const ABOUT_MILESTONES: CompanyMilestone[] = [
  {
    phase: "PHASE 01",
    title: "Foundation",
    description: "WELTWISSEN began in Al Khobar with a focus on equipment rental for industrial clients."
  },
  {
    phase: "PHASE 02",
    title: "Expansion",
    description: "The fleet expanded to include heavy earthmoving, lifting and power equipment."
  },
  {
    phase: "PHASE 03",
    title: "Diversification",
    description: "The business expanded into civil and mechanical works, pipeline services, complex lifting and project transport."
  },
  {
    phase: "TODAY",
    title: "One Integrated Partner",
    description: "Industrial construction, equipment rental and project logistics delivered through one coordinated team across Saudi Arabia."
  }
];

export const COMPANY_MILESTONES = ABOUT_MILESTONES;

export const ABOUT_VALUES: AboutValueItem[] = [
  {
    number: "01",
    title: "Integrity",
    subhead: "We do what we say, with clear commitments and dependable execution.",
    label: "In practice",
    text: "Clear timelines, transparent updates, and a commitment to doing the right thing — even when it's harder.",
    badge: "Core",
    isDark: true
  },
  {
    number: "02",
    title: "Customer Focus",
    subhead: "We listen first, understand the project and adapt our approach to what each site requires.",
    label: "In practice",
    text: "We ask the right questions early, then tailor the plan, timeline and team to the site's requirements.",
    quote: '"We own the outcome, from the first call to the final walk-through."'
  },
  {
    number: "03",
    title: "Quality",
    subhead: "From equipment to execution, we maintain consistent standards across every project.",
    label: "Standards",
    text: "We inspect, document and verify so every handoff is reliable and every finish is consistent.",
    badge: "Verified"
  },
  {
    number: "04",
    title: "Safety",
    subhead: "People come first. We plan carefully, work responsibly and protect every team member and partner on site.",
    label: "Our approach",
    text: "Careful planning, responsible working practices and a consistent focus on safety throughout every project.",
    quote: '"Safety is a condition of success — never a trade-off."',
    isDark: true
  }
];

export const CORE_VALUES = ABOUT_VALUES;

export const HOW_WE_WORK_STEPS = [
  {
    number: "01",
    title: "Plan",
    description: "Clear requirements, careful planning and a defined path to delivery."
  },
  {
    number: "02",
    title: "Deliver",
    description: "Disciplined execution across construction, equipment and logistics."
  },
  {
    number: "03",
    title: "Support",
    description: "Clear communication from mobilisation through to completion."
  }
];

export const BY_THE_NUMBERS = [
  {
    stat: "750+",
    label: "EQUIPMENT UNITS",
    description: "Across our rental fleet"
  },
  {
    stat: "3",
    label: "CORE DIVISIONS",
    description: "Construction, Rental, Logistics"
  },
  {
    stat: "12+",
    label: "INDUSTRIES SERVED",
    description: "Oil & Gas, Power, Water & more"
  },
  {
    stat: "AL KHOBAR",
    label: "HQ+",
    description: "Our Kingdom base of operations"
  }
];

export const FACILITIES: FacilityLocation[] = [
  { 
    city: "Al Khobar", 
    badge: "Headquarters", 
    description: "Head Office & Operations" 
  },
  { 
    city: "Dammam", 
    badge: "Logistics Yard", 
    description: "Equipment Yard" 
  },
  { 
    city: "Dammam", 
    badge: "Storage & Laydown", 
    description: "Logistics Hub" 
  },
  { 
    city: "Workshop", 
    badge: "Maintenance Facility", 
    description: "Maintenance & Fabrication" 
  }
];

export const CONTACT_FACILITIES = FACILITIES;