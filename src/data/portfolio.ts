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
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "modern-kitchen-backsplash",
    title: "Modern Kitchen Backsplash",
    tags: ["Kitchen", "Backsplash", "Subway Tile"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Modern white kitchen with subway tile backsplash",
        width: 800,
        height: 600
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        alt: "Close-up of subway tile installation",
        width: 400,
        height: 300
      }
    ],
    note: "Clean lines and perfect spacing transform this Vancouver kitchen. Waterproof installation with premium grout sealing.",
    completedDate: "2024-12"
  },
  {
    id: "luxury-bathroom-renovation",
    title: "Luxury Bathroom Renovation",
    tags: ["Bathroom", "Large Format", "Natural Stone"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Luxury bathroom with large format tiles",
        width: 800,
        height: 600
      }
    ],
    note: "Large format porcelain tiles with precision layout. Waterproofing and heated floor system included.",
    completedDate: "2024-11"
  },
  {
    id: "commercial-office-flooring",
    title: "Commercial Office Flooring",
    tags: ["Commercial", "LVP", "High Traffic"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Modern office space with luxury vinyl plank flooring",
        width: 800,
        height: 600
      }
    ],
    note: "3,000 sq ft commercial space. High-traffic LVP with seamless transitions and organized installation schedule.",
    completedDate: "2024-10"
  },
  {
    id: "shower-tile-repair",
    title: "Shower Tile Repair & Resealing",
    tags: ["Repair", "Shower", "Waterproofing"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Beautifully tiled shower with perfect grout lines",
        width: 800,
        height: 600
      }
    ],
    note: "Remediated water damage, replaced damaged tiles, and resealed entire shower. Matches existing tile perfectly.",
    completedDate: "2024-09"
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