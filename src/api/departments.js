let departments = [
  {
    id: 0,
    name: "Arts & Crafts",
    icon: "LiaPaletteSolid",
    category: [
      {
        name: "Arts,Crafts & Sewing",
        segment: [
          {
            name: "Fabric & Sewing Supplies",
          },
          {
            name: "Needle Arts & Craft",
          },
          {
            name: "Scrapbooking & Stamps",
          },
          {
            name: "Paint By Number",
          },
        ],
      },
      {
        name: "Decorations",
        segment: [
          {
            name: "Artificial & Dried Flowers",
          },
          {
            name: "Balloons",
          },
          {
            name: "Candles & Holders",
          },
          {
            name: "Events & Parties",
          },
          {
            name: "Figurines & Miniatures",
          },
          {
            name: "Vases",
          },
          {
            name: "Wall Art",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Automobile & Motocycle",
    icon: "LiaCarAltSolid",
    category: [
      {
        name: "Accessories",
        segment: [
          {
            name: "Car Covers",
          },
          {
            name: "Car Key Cases",
          },
          {
            name: "Car Stickers",
          },
          {
            name: "Floor Mats",
          },
          {
            name: "Helmets & Protective Gear",
          },
          {
            name: "Lighting",
          },
          {
            name: "Seat Covers",
          },
          {
            name: "Steering Wheel Covers",
          },
          {
            name: "Other Exterior Accessories",
          },
          {
            name: "Other Interior Accessories",
          },
        ],
      },
      {
        name: "Electronics",
        segment: [
          {
            name: "Alarm Systems & Security",
          },
          {
            name: "Car Fridges & Heaters",
          },
          {
            name: "Car Monitors",
          },
          {
            name: "Car Radios",
          },
          {
            name: "DVR/Dash Cameras",
          },
          {
            name: "GPS System",
          },
          {
            name: "Jump Starters",
          },
          {
            name: "Multimedia Players",
          },
          {
            name: "Vehicle Cameras",
          },
        ],
      },
      {
        name: "Parts",
        segment: [
          {
            name: "Body & Frame Parts",
          },
          {
            name: "Braking Systems",
          },
          {
            name: "Car Lights",
          },
          {
            name: "Exhaust Systems",
          },
          {
            name: "Exterior Parts",
          },
          {
            name: "Interior Parts",
          },
          {
            name: "Spark Plugs & Ignition Systems",
          },
          {
            name: "Vehicle Sensors",
          },
          {
            name: "Windshield Wipers",
          },
          {
            name: "Other Replacement Parts",
          },
        ],
      },
      {
        name: "Tools & Maintenance",
        segment: [
          {
            name: "Car Washing Tools",
          },
          {
            name: "Diagnostic Tools",
          },
          {
            name: "Paint Care & Polishes",
          },
          {
            name: "Other Maintenance Products",
          },
        ],
      },
    ],
  },
  {
    id: 34,
    name: "Baby",
    icon: "LiaChalkboardSolid",
    category: [
      {
        name: "Baby Product",
        segment: [
          {
            name: "Bibs & Burp Cloths",
          },
          {
            name: "Bottle Feeding & Pacifiers",
          },
          {
            name: "Food Storage",
          },
          {
            name: "Booster Seats",
          },
          {
            name: "Disposable Diapers",
          },
          {
            name: "Wipes & Refills",
          },
          {
            name: "Other Accessories",
          },
        ],
      },
      {
        name: "Health & Skin care",
        segment: [
          {
            name: "Bathing Tubs & Seats",
          },
          {
            name: "Bathroom Safety",
          },
          {
            name: "Grooming & Healthcare Kits",
          },
          {
            name: "Oral care",
          },
          {
            name: "Skin Care",
          },
          {
            name: "Washcloths & Towels",
          },
        ],
      },
      {
        name: "Toys& Gears",
        segment: [
          {
            name: "Backpacks & Carriers",
          },
          {
            name: "Bath Toys",
          },
          {
            name: "Play Centers",
          },
          {
            name: "Sound Toys",
          },
          {
            name: "Squeeze Toys",
          },
          {
            name: "Stuffed & Plushed Toys",
          },
          {
            name: "Swings, Jumpers & Bouncers",
          },
          {
            name: "Walkers",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Beauty & Health care",
    icon: "LiaSprayCanSolid",
    category: [
      {
        name: "Make Up",
        segment: [
          {
            name: "Concealers",
          },
          {
            name: "Foundation",
          },
          {
            name: "Powder",
          },
          {
            name: "Lipstick",
          },
          {
            name: "Eyeliner & Kajal",
          },
          {
            name: "Mascara",
          },
        ],
      },
      {
        name: "Personal Care",
        segment: [
          {
            name: "Skin Care",
          },
          {
            name: "Bath & Bathing Accessories",
          },
          {
            name: "Sunscreens & Tanning Products",
          },
          {
            name: "Contraceptives & Lubricants",
          },
          {
            name: "Piercing & Tattoo Supplies",
          },
          {
            name: "Lip Care",
          },
        ],
      },
      {
        name: "Fragrance",
        segment: [
          {
            name: "Spray",
          },
          {
            name: "Oil",
          },
          {
            name: "Perfume",
          },
        ],
      },
      {
        name: "Hair Care",
        segment: [
          {
            name: "Hair Accessories",
          },
          {
            name: "Hair Cutting Tools",
          },
          {
            name: "Shampoo & Conditioner",
          },
          {
            name: "Wigs & Accessories",
          },
        ],
      },
      {
        name: "Oral Care",
        segment: [
          {
            name: "Teeth Whitening",
          },
          {
            name: "Toothbrushes",
          },
          {
            name: "Toothpaste",
          },
        ],
      },
      {
        name: "Health Care",
        segment: [
          {
            name: "First Aid",
          },
          {
            name: "Medical Supplies & Equipment",
          },
          {
            name: "Alternative Medicine",
          },
          {
            name: "Feminine Care",
          },
          {
            name: "Diabetes Care",
          },
        ],
      },
      {
        name: "Vitamins & Supplements",
        segment: [
          {
            name: "Herbal Supplements",
          },
          {
            name: "Vitamins & Minerals",
          },
          {
            name: "Supplements",
          },
          {
            name: "Multi & Prenatal Vitamins",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Computers",
    icon: "LiaDesktopSolid",
    category: [
      {
        name: "Accessories",
        segment: [
          {
            name: "Batteries",
          },
          {
            name: "Keyboards & Mice",
          },
          {
            name: "Memory Cards",
          },
          {
            name: "Modems",
          },
          {
            name: "Printers",
          },
          {
            name: "Projectors",
          },
          {
            name: "Routers",
          },
          {
            name: "Scanners",
          },
          {
            name: "UPS",
          },
        ],
      },
      {
        name: "Computers",
        segment: [
          {
            name: "Desktop",
          },
          {
            name: "Laptop",
          },
        ],
      },
      {
        name: "Data Storages",
        segment: [
          {
            name: "External Hard Drives",
          },
          {
            name: "HDD",
          },
          {
            name: "Memory Cards",
          },
          {
            name: "SSDs",
          },
          {
            name: "USB Flash Drives",
          },
        ],
      },
      {
        name: "Parts",
        segment: [
          {
            name: "Graphics Cards",
          },
          {
            name: "Lcds",
          },
          {
            name: "Motherboards",
          },
          {
            name: "Network Cards",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Electronics & Appliances",
    icon: "LiaPlugSolid",
    category: [
      {
        name: "Accessories & Parts",
        segment: [
          {
            name: "Batteries",
          },
          {
            name: "Cables & Adapters",
          },
          {
            name: "Cases",
          },
          {
            name: "Chargers",
          },
        ],
      },
      {
        name: "Appliances",
        segment: [
          {
            name: "Air Conditioners & Purifiers",
          },
          {
            name: "Blenders & Juicers",
          },
          {
            name: "Dispensers",
          },
          {
            name: "Fans",
          },
          {
            name: "Fridges & Freezers",
          },
          {
            name: "Fryers & Cookers",
          },
          {
            name: "Heaters",
          },
          {
            name: "Irons",
          },
          {
            name: "Kettles",
          },
          {
            name: "Microwaves & Heaters",
          },
          {
            name: "Toasters & Ovens",
          },
          {
            name: "Vacuum Cleaners",
          },
          {
            name: "Washing Machines",
          },
        ],
      },
      {
        name: "Audio & Video",
        segment: [
          {
            name: "Audio Amplifier Boards",
          },
          {
            name: "Home Theatre Systems",
          },
          {
            name: "MP3 Players",
          },
          {
            name: "Microphones",
          },
          {
            name: "Projectors",
          },
          {
            name: "Receivers & Amplifiers",
          },
          {
            name: "Televisions",
          },
          {
            name: "VR/AR Devices",
          },
          {
            name: "Speakers",
          },
        ],
      },
      {
        name: "Cameras & Photos",
        segment: [
          {
            name: "Digital Cameras",
          },
          {
            name: "Surveillance",
          },
          {
            name: "Camcorders",
          },
          {
            name: "Photo Studio Supplies",
          },
          {
            name: "Camera & Photo Accessories",
          },
        ],
      },
      {
        name: "Power Supply",
        segment: [
          {
            name: "Generators",
          },
          {
            name: "Inverters",
          },
          {
            name: "Solar & Wind Power",
          },
          {
            name: "Stablizers",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Fashion",
    icon: "LiaHatCowboySideSolid",
    category: [
      {
        name: "Kid's Fashion",
        segment: [
          {
            name: "Boy's Fashion",
          },
          {
            name: "Girl's Fashion",
          },
        ],
      },
      {
        name: "Men's Fashion",
        segment: [
          {
            name: "Accessories",
          },
          {
            name: "Blouses & Shirts",
          },
          {
            name: "Coats & Jackets",
          },
          {
            name: "Costumes",
          },
          {
            name: "Cultural & Religous Wears",
          },
          {
            name: "Dresses",
          },
          {
            name: "Handbags & Wallets",
          },
          {
            name: "Hoodies & Sweatshirts",
          },
          {
            name: "Jeans & Pants",
          },
          {
            name: "Jewelry",
          },
          {
            name: "Maternity Wears",
          },
          {
            name: "Shoes",
          },
          {
            name: "Shorts",
          },
          {
            name: "Skirts",
          },
          {
            name: "Sleepwear",
          },
          {
            name: "Suits & Blazers",
          },
          {
            name: "Tees",
          },
          {
            name: "Underwears & swimwears",
          },
          {
            name: "Watches",
          },
        ],
      },
      {
        name: "Women's Fashion",
        segment: [
          {
            name: "Accessories",
          },
          {
            name: "Bags & Wallets",
          },
          {
            name: "Coats & Jackets",
          },
          {
            name: "Costumes",
          },
          {
            name: "Cultural & Religous Wears",
          },
          {
            name: "Hoodies & Sweatshirts",
          },
          {
            name: "Jeans",
          },
          {
            name: "Jerseys",
          },
          {
            name: "Jewelry",
          },
          {
            name: "Pants",
          },
          {
            name: "Polo Shirts",
          },
          {
            name: "Shirts",
          },
          {
            name: "Shoes",
          },
          {
            name: "Shorts",
          },
          {
            name: "Sleepwears",
          },
          {
            name: "Sneakers",
          },
          {
            name: "Suits & Blazer",
          },
          {
            name: "Tees",
          },
          {
            name: "Trousers & Chinos",
          },
          {
            name: "T-Shirts",
          },
          {
            name: "Underwear",
          },
          {
            name: "Watches",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Groceries",
    icon: "LiaShoppingBasketSolid",
    category: [
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Home, Kitchen & Office",
    icon: "LiaCouchSolid",
    category: [
      {
        name: "Accessories",
        segment: [
          {
            name: "Umbrellas",
          },
          {
            name: "Bathroom Accessories Sets",
          },
          {
            name: "Cleaning Tools",
          },
        ],
      },
      {
        name: "Furnitures",
        segment: [
          {
            name: "Living Room Furniture",
          },
          {
            name: "Office Furniture",
          },
          {
            name: "Outdoor Furniture",
          },
          {
            name: "Kitchen Furniture",
          },
        ],
      },
      {
        name: "Home",
        segment: [
          {
            name: "Lighting",
          },
          {
            name: "Stationery",
          },
        ],
      },
      {
        name: "Kitchen",
        segment: [
          {
            name: "Bakewares",
          },
          {
            name: "Drinkwares",
          },
          {
            name: "Kitchen Gadgets",
          },
          {
            name: "Tablewares",
          },
          {
            name: "Cutlery & Knife Accessories",
          },
        ],
      },
      {
        name: "Security & Protection",
        segment: [
          {
            name: "Access Control Systems",
          },
          {
            name: "Alarms & Sensors",
          },
          {
            name: "Door Intercom Systems",
          },
          {
            name: "Safety Equipment",
          },
          {
            name: "Smoke Detectors",
          },
          {
            name: "Surveillance Items",
          },
        ],
      },
      {
        name: "Storages",
        segment: [
          {
            name: "Storage Boxes & Bins",
          },
          {
            name: "Holders & Racks",
          },
          {
            name: "Kitchen Organizers",
          },
        ],
      },
      {
        name: "Textiles",
        segment: [
          {
            name: "Bedding Sets",
          },
          {
            name: "Blankets",
          },
          {
            name: "Carpets",
          },
          {
            name: "Dust Covers",
          },
          {
            name: "Sofa Covers",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Industrial & Scientific",
    icon: "LiaRadiationAltSolid",
    category: [
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
    ],
  },
  {
    id: 90,
    name: "Luggages",
    icon: "LiaSuitcaseSolid",
    category: [
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
    ],
  },
  {
    id: 101,
    name: "Media & Books",
    icon: "LiaPhotoVideoSolid",
    category: [
      {
        name: "Fiction",
        segment: [
          {
            name: "",
          },
        ],
      },
      {
        name: "Non-Fiction",
        segment: [
          {
            name: "",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Pet Supplies",
    icon: "LiaDogSolid",
    category: [
      {
        name: "Food",
        segment: [
          {
            name: "Canned Food",
          },
          {
            name: "Bagged Food",
          },
        ],
      },
      {
        name: "Accessories",
        segment: [
          {
            name: "Lace",
          },
          {
            name: "Pendants",
          },
          {
            name: "Bath Kit",
          },
          {
            name: "Skin Care",
          },
          {
            name: "Bath Kit",
          },
        ],
      },
      {
        name: "Toy & Games",
        segment: [
          {
            name: "Stuffed & Plush Toys",
          },
          {
            name: "SqueeToys",
          },
          {
            name: "Others",
          },
        ],
      },
    ],
  },
  {
    id: 26,
    name: "Phones",
    icon: "LiaPhone",
    category: [
      {
        name: "Mobile Phones",
        segment: [
          {
            name: "Android Phones",
          },
          {
            name: "Android Tablets",
          },
          {
            name: "Basic Phones",
          },
          {
            name: "Educational Tablets",
          },
          {
            name: "iPads",
          },
          {
            name: "iPhones",
          },
          {
            name: "Tablet Accessories",
          },
          {
            name: "Used phones",
          },
        ],
      },
      {
        name: "Acessories",
        segment: [
          {
            name: "Accessory Kits",
          },
          {
            name: "Adapters",
          },
          {
            name: "Bluetooth Headsets",
          },
          {
            name: "Cables",
          },
          {
            name: "Chargers",
          },
          {
            name: "Cases & Covers",
          },
          {
            name: "Earphones & Headsets",
          },
          {
            name: "Holders & Stands",
          },
          {
            name: "MicroSD Cards",
          },
          {
            name: "Power Bank",
          },
          {
            name: "Screen Protectors",
          },
          {
            name: "Smart Watches",
          },
        ],
      },
      {
        name: "Parts",
        segment: [
          {
            name: "Batteries",
          },
          {
            name: "Housings & Frames",
          },
          {
            name: "LCDs",
          },
          {
            name: "Motherboard",
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Software",
    icon: "LiaChalkboardSolid",
    category: [
      {
        name: "",
        segment: [
          {
            name: "",
          },
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Sports & Outdoors",
    icon: "LiaSkiingSolid",
    category: [
      {
        name: "Cycling",
        segment: [
          {
            name: "Bicycles",
          },
          {
            name: "Bicycle Parts",
          },
          {
            name: "Cycling Jerseys",
          },
          {
            name: "Cycling Gear",
          },
        ],
      },
      {
        name: "Fishing",
        segment: [
          {
            name: "Fishing Gear",
          },
          {
            name: "Fishing Lures",
          },
          {
            name: "Fishing Lines",
          },
          {
            name: "Fishing Rods",
          },
          {
            name: "Rod Combos",
          },
          {
            name: "Fishing Tackle Boxes",
          },
        ],
      },
      {
        name: "Sneakers",
        segment: [
          {
            name: "Track Shoes",
          },
          {
            name: "Hiking Shoes",
          },
          {
            name: "Soccer Shoes",
          },
          {
            name: "Skateboarding Shoes",
          },
          {
            name: "Dance Shoes",
          },
          {
            name: "Basketball Shoes",
          },
        ],
      },
      {
        name: "Sportswear",
        segment: [
          {
            name: "Jerseys",
          },
          {
            name: "Hiking Jackets",
          },
          {
            name: "Pants",
          },
          {
            name: "Shorts",
          },
          {
            name: "Sports Bags",
          },
          {
            name: "Sports Accessories",
          },
        ],
      },
      {
        name: "Swimming",
        segment: [
          {
            name: "Swimming Gear",
          },
          {
            name: "Swimwear",
          },
        ],
      },
      {
        name: "Other Sports Equipment",
        segment: [
          {
            name: "Camping & Hiking",
          },
          {
            name: "Hunting",
          },
          {
            name: "Golf",
          },
          {
            name: "Fitness & Bodybuilding",
          },
          {
            name: "Skiing & Snowboarding",
          },
          {
            name: "Musical Instruments",
          },
          {
            name: "Exercise Bikes",
          },
          {
            name: "Treadmills",
          },
          {
            name: "Elliptical Trainers",
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Toys & Games",
    icon: "LiaChessKnightSolid",
    category: [
      {
        name: "Playstation",
        segment: [
          {
            name: "Playstation 5",
          },
          {
            name: "Playstation 4",
          },
          {
            name: "Playstation 3",
          },
          {
            name: "Playstation",
          },
          {
            name: "Playstation Vita",
          },
        ],
      },
      {
        name: "Nitendo",
        segment: [
          {
            name: "Nintendo 3DS",
          },
          {
            name: "Nintendo DS",
          },
          {
            name: "Nintendo Switch",
          },
          {
            name: "Nintendo Wii",
          },
        ],
      },
      {
        name: "Top Games",
        segment: [
          {
            name: "Assassin's Creed Valhalla",
          },
          {
            name: "Call of Duty",
          },
          {
            name: "Far Cry",
          },
          {
            name: "Fallout",
          },
          {
            name: "FIFA '23",
          },
          {
            name: "God of war",
          },
          {
            name: "Grand Theft Auto",
          },
          {
            name: "Madden NFL",
          },
          {
            name: "Metal Gear Solid",
          },
          {
            name: "PES '23",
          },
          {
            name: "Spiderman",
          },
          {
            name: "The Last Of Us",
          },
        ],
      },
      {
        name: "Toy",
        segment: [
          {
            name: "Action & Toy Figures",
          },
          {
            name: "Building & Construction Toys ",
          },
          {
            name: "Cards Collections",
          },
          {
            name: "Diecasts & Toy Vehicles",
          },
          {
            name: "Dolls",
          },
          {
            name: "RC Toys",
          },
          {
            name: "Stickers",
          },
          {
            name: "Stuffed & Plush Animals",
          },
          {
            name: "Squeeze Toys",
          },
        ],
      },
      {
        name: "XBOX",
        segment: [
          {
            name: "XBOX One",
          },
          {
            name: "XBOX 360",
          },
          {
            name: "XBOX",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Tools & Home improvements",
    icon: "LiaHammerSolid",
    category: [
      {
        name: "Home Improvements",
        segment: [
          {
            name: "Electrical Equipment & Supplies",
          },
          {
            name: "Fixtures",
          },
          {
            name: "Hardware",
          },
          {
            name: "Pumps",
          },
        ],
      },
      {
        name: "Lightings",
        segment: [
          {
            name: "Ceiling Lights",
          },
          {
            name: "Pendant Lights",
          },
          {
            name: "Downlights",
          },
          {
            name: "Chandeliers",
          },
          {
            name: "Wall Lamps",
          },
          {
            name: "Night Lights",
          },
          {
            name: "Outdoor Lighting",
          },
          {
            name: "Flashlights",
          },
          {
            name: "Solar Lamps",
          },
          {
            name: "Floodlights",
          },
          {
            name: "String Lights",
          },
          {
            name: "Underwater Lights",
          },
        ],
      },
      {
        name: "Tools",
        segment: [
          {
            name: "Power Tools",
          },
          {
            name: "Hand Tools",
          },
          {
            name: "Tool Parts",
          },
          {
            name: "Tool Sets",
          },
        ],
      },
      {
        name: "Smart Home",
        segment: [
          {
            name: "Smart Home Systems",
          },
          {
            name: "Smart Control System",
          },
          {
            name: "Smart Home Sensors",
          },
          {
            name: "Smart irrigation",
          },
        ],
      },
    ],
  },
];

export default departments;
