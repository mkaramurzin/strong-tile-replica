export interface PortfolioItem {
  id: string;
  title: string;
  tags: string[];
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  note: string;
  completedDate?: string;
  prompt?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "kitchen-porcelain-24x48",
    title: "Modern Kitchen with 24x48 Porcelain Tile",
    tags: ["Kitchen", "Porcelain Tile", "Straight Lay"],
    images: [
      {
        src: "/gallery/ai/kitchen-porcelain-24x48.jpg",
        alt: "Open-plan modern kitchen with 24x48 matte porcelain tile floor",
        width: 1600,
        height: 1000
      }
    ],
    note: "Large-format porcelain set with flawless straight-lay precision. Seamless pantry transition, 1/8\" color-matched grout.",
    completedDate: "2025-01",
    prompt: "modern residential kitchen, open-plan, sleek white cabinetry, island with waterfall edge; floor: 24x48 matte porcelain tile, straight lay, tight 1/8\" grout lines color-matched; flawless transitions to pantry; perimeter expansion joints respected; soft north-facing daylight + under-cabinet LEDs; 24mm lens, eye-level, photoreal interior photography, ultra-detailed, no distortion"
  },
  {
    id: "kitchen-woodlook-8x48",
    title: "Warm Transitional Kitchen with Wood-Look Tile",
    tags: ["Kitchen", "Wood-Look Tile", "Random Stagger"],
    images: [
      {
        src: "/gallery/ai/kitchen-woodlook-8x48.jpg",
        alt: "Kitchen with shaker cabinets and 8x48 wood-look porcelain flooring",
        width: 1600,
        height: 1000
      }
    ],
    note: "8x48 wood-look porcelain tile with random stagger for natural realism. Flush transition to dining area with minimal lippage.",
    completedDate: "2025-01",
    prompt: "transitional residential kitchen with shaker cabinets and brass hardware; floor: 8x48 wood-look porcelain tile, random stagger, realistic wood grain, minimal lippage, flush transition to dining; color palette: warm oak + cream; morning light; 35mm lens; photoreal, interior photography"
  },
  {
    id: "kitchen-herringbone-3x12",
    title: "Compact Galley Kitchen with Herringbone Pattern",
    tags: ["Kitchen", "Porcelain Tile", "Herringbone"],
    images: [
      {
        src: "/gallery/ai/kitchen-herringbone-3x12.jpg",
        alt: "Galley kitchen with 3x12 porcelain herringbone floor tile",
        width: 1600,
        height: 1000
      }
    ],
    note: "3x12 porcelain tile installed in herringbone with perfect chevron alignment at boundaries and schluter edge trim.",
    completedDate: "2025-01",
    prompt: "compact galley kitchen in an apartment; floor: 3x12 porcelain tile in herringbone pattern, precise chevrons at boundaries, schluter edge trim at doorway, color-matched grout; bright daylight, overhead can lights; 28mm lens, photoreal"
  },
  {
    id: "bathroom-marble-hex-shower",
    title: "Spa Bathroom with Marble Hex Shower Floor",
    tags: ["Bathroom", "Marble", "Mosaic"],
    images: [
      {
        src: "/gallery/ai/bathroom-marble-hex-shower.jpg",
        alt: "Spa bathroom with mosaic marble hex shower floor and porcelain main floor tile",
        width: 1600,
        height: 1000
      }
    ],
    note: "Luxury master bath featuring mosaic marble hex shower floor and 12x24 porcelain main tile with perfect linear drain slope.",
    completedDate: "2025-01",
    prompt: "spa-like master bathroom; shower: mosaic marble hex tile floor with even slopes to linear drain; main floor: 12x24 porcelain, 33% stagger; niche with mitered edges; seamless glass; warm LED; 24mm lens; photoreal"
  },
  {
    id: "powderroom-encaustic-8x8",
    title: "Powder Room with Encaustic-Look Tile",
    tags: ["Bathroom", "Ceramic Tile", "Patterned"],
    images: [
      {
        src: "/gallery/ai/powderroom-encaustic-8x8.jpg",
        alt: "Powder room with patterned encaustic-look ceramic tile floor",
        width: 1600,
        height: 1000
      }
    ],
    note: "Bold patterned 8x8 encaustic-look tile with centered layout and precise alignment at doorway threshold.",
    completedDate: "2025-01",
    prompt: "powder room; floor: 8x8 encaustic-look ceramic tile, centered pattern, perfect aligns at doorway threshold; wall: half-height wainscot; natural daylight; 35mm lens; photoreal"
  },
  {
    id: "bathroom-pennyround",
    title: "Small Bathroom with Penny Round Mosaic",
    tags: ["Bathroom", "Mosaic", "Porcelain Tile"],
    images: [
      {
        src: "/gallery/ai/bathroom-pennyround.jpg",
        alt: "Bathroom floor with white penny round tile and charcoal grout",
        width: 1600,
        height: 1000
      }
    ],
    note: "Classic white penny-round mosaic with contrasting grout for clean lines and precise perimeter finishing.",
    completedDate: "2025-01",
    prompt: "small bathroom renovation; floor: white penny-round mosaic with charcoal grout, crisp edges around toilet flange and pedestal sink, perfect perimeter; cool daylight; 24mm lens; photoreal"
  },
  {
    id: "livingroom-stonelook-24x24",
    title: "Contemporary Living Room with Stone-Look Tile",
    tags: ["Living Room", "Porcelain Tile", "Stone-Look"],
    images: [
      {
        src: "/gallery/ai/livingroom-stonelook-24x24.jpg",
        alt: "Living room with 24x24 stone-look porcelain tile",
        width: 1600,
        height: 1000
      }
    ],
    note: "Stone-look porcelain with rectified edges, tight grout lines, and flush transition to carpeted hallway.",
    completedDate: "2025-01",
    prompt: "contemporary living room; floor: 24x24 stone-look porcelain tile, rectified edges, tight grout lines; level plane, flush transition to carpeted hallway; golden hour side light; 24mm lens; photoreal, interior real-estate photography"
  },
  {
    id: "entry-herringbone-hardwood",
    title: "Entryway with Herringbone Hardwood Inlay",
    tags: ["Entryway", "Engineered Hardwood", "Herringbone"],
    images: [
      {
        src: "/gallery/ai/entry-herringbone-hardwood.jpg",
        alt: "Entry hall with engineered hardwood in herringbone with border inlay",
        width: 1600,
        height: 1000
      }
    ],
    note: "5\" engineered hardwood in herringbone with border inlay. Crisp miters and flush transition details.",
    completedDate: "2025-01",
    prompt: "residential entry hall; floor: 5\" engineered hardwood in herringbone with border inlay, precise miters at corners, flush schluter transition at tile threshold; soft daylight; 35mm lens; photoreal"
  },
  {
    id: "bedroom-laminate",
    title: "Cozy Bedroom with Laminate Plank Flooring",
    tags: ["Bedroom", "Laminate", "Plank"],
    images: [
      {
        src: "/gallery/ai/bedroom-laminate.jpg",
        alt: "Bedroom with 12mm laminate plank flooring in warm walnut tone",
        width: 1600,
        height: 1000
      }
    ],
    note: "Durable 12mm laminate plank flooring with undercut door jambs and continuous flow into walk-in closet.",
    completedDate: "2025-01",
    prompt: "cozy primary bedroom; floor: 12mm laminate plank, realistic bevels, undercut door jambs, continuous flow into walk-in closet; warm evening light; 35mm lens; photoreal"
  },
  {
    id: "mudroom-porcelain-brick",
    title: "Mudroom with Porcelain Brick Tile",
    tags: ["Mudroom", "Porcelain Tile", "Brick Pattern"],
    images: [
      {
        src: "/gallery/ai/mudroom-porcelain-brick.jpg",
        alt: "Mudroom with porcelain brick tile in running bond pattern",
        width: 1600,
        height: 1000
      }
    ],
    note: "Durable porcelain brick tile in running bond pattern. Easy-clean finish ideal for mudrooms and utility spaces.",
    completedDate: "2025-01",
    prompt: "mudroom with built-ins; floor: porcelain brick tile running bond, tight grout, clean base transitions; durable, easy-clean vibe; overcast daylight; 28mm lens; photoreal"
  },
  {
    id: "stair-landing-transition",
    title: "Stair Landing Transition Detail",
    tags: ["Stair", "LVP", "Transition"],
    images: [
      {
        src: "/gallery/ai/stair-landing-transition.jpg",
        alt: "Stair landing showing transition between carpeted stairs and LVP hallway with T-molding",
        width: 1600,
        height: 1000
      }
    ],
    note: "Precise transition detail between carpeted stairs and luxury vinyl plank hallway using color-matched T-molding.",
    completedDate: "2025-01",
    prompt: "stair landing; transition detail between carpeted stairs and LVP hallway using color-matched T-molding, precise cuts; overhead light; macro 70mm close-up + a wider establishing shot; photoreal"
  },
  {
    id: "macro-grout-trim",
    title: "Close-Up of Grout and Trim Detail",
    tags: ["Detail", "Porcelain Tile", "Schluter Trim"],
    images: [
      {
        src: "/gallery/ai/macro-grout-trim.jpg",
        alt: "Macro detail of porcelain tile corner with grout and schluter edge trim",
        width: 1200,
        height: 800
      }
    ],
    note: "Macro close-up highlighting flawless grout joints, schluter trim, and rectified edges with no lippage.",
    completedDate: "2025-01",
    prompt: "macro close-up of porcelain tile corner showing perfect grout joints (1/8\"), schluter edge trim, no lippage, rectified edges, photoreal studio lighting"
  }
];

export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id);
};

export const getPortfolioItemsByTag = (tag: string): PortfolioItem[] => {
  return portfolioItems.filter(item => 
    item.tags.some(itemTag => itemTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getAllTags = (): string[] => {
  const tags = portfolioItems.flatMap(item => item.tags);
  return [...new Set(tags)].sort();
}; 