export const businessConfig = {
  // Brand Information
  brand: {
    name: "Vanta Tile & Flooring",
    tagline: "Precision layouts, organized job sites, and top-notch installations for kitchens, baths, and floors.",
    yearsExperience: 20,
    yearsInBusiness: 5,
    jobs2025: 100,
  },
  
  // Location Information
  location: {
    city: "Vancouver",
    state: "WA",
    fullLocation: "Vancouver, WA",
    serviceAreas: ["Vancouver", "Portland", "Camas", "Washougal", "Battle Ground"],
    address: {
      street: "123 Main St",
      city: "Vancouver",
      state: "WA",
      zipCode: "98023",
      country: "United States",
      full: "123 Main St, Vancouver, WA 98023, United States"
    }
  },
  
  // Contact Information
  contact: {
    phone: {
      display: "(360) 213-7927",
      href: "(360) 213-7927"
    },
    email: {
      primary: "", // Empty to hide email CTAs
      secondary: ""
    },
    businessHours: {
      weekdays: "Monday to Friday from 08:00 am to 05:00 pm"
    }
  },
  
  // Feature Flags
  features: {
    showReviews: false, // Hide all review-related content
    showTestimonials: false,
    showAggregateRating: false,
    showEmailCTA: false // Will be auto-calculated based on email presence
  },
  
  // Services & Claims
  services: {
    mainClaim: "Trusted Tile & Flooring",
    subClaim: "Flooring Installation Contractors near me",
    keyPoints: [
      "Free estimates and consultations",
      "Licensed and insured", 
      "Satisfaction guaranteed"
    ]
  },

  // New Content - Owner's Voice
  content: {
    // Hero Section
    hero: {
      title: "Trusted Tile & Flooring in Vancouver, WA",
      subtitle: "Precision layouts, organized job sites, and top-notch installations for kitchens, baths, and floors."
    },

    // Credibility Chips
    credibilityChips: [
      "5+ years in business",
      "100+ jobs in 2025", 
      "Precision & organized sites",
      "Expanding to commercial"
    ],

    // Why Choose Us
    whyChoose: [
      "Perfect precision — clean lines, level planes, tight grout joints.",
      "Organized job sites — surface protection, daily tidy-ups.",
      "We stand by our word — clear scope, schedule, and follow-through.",
      "Residential specialists expanding into commercial projects across the Northwest."
    ],

    // Owner Quotes
    ownerQuotes: [
      "Every tile matters. Every line should be perfect. That's how we've built our reputation.",
      "A clean job site shows respect for your home and attention to detail in our work.",
      "We're not just installing tile - we're creating spaces you'll love for years to come."
    ],

    // About Content
    about: {
      intro: "We've been installing tile and flooring in Vancouver, WA for 5+ years. In 2025, we completed 100+ projects, combining precise layout with spotless workmanship.",
      story: "What started as a passion for perfect tile work has grown into Vancouver's most trusted flooring company. We believe every project deserves the same attention to detail, whether it's a small bathroom refresh or a complete home renovation."
    },

    // Services Content
    servicesContent: {
      tileInstallation: {
        title: "Tile Installation",
        subtitle: "Showers, backsplashes, large-format floors; underlayment & waterproofing done right.",
        description: "From intricate mosaic patterns to large-format modern tiles, we handle every installation with precision. Our process includes proper substrate preparation, waterproofing where needed, and meticulous attention to layout and spacing."
      },
      tileRepair: {
        title: "Tile Repair", 
        subtitle: "Cracked tiles, regrout, shower remediation and resealing.",
        description: "Don't replace when you can repair. We specialize in matching existing tiles, regrouting worn areas, and fixing water damage issues. Our repair work blends seamlessly with your existing installation."
      },
      flooringInstallation: {
        title: "Flooring Installation",
        subtitle: "LVP/LVT/engineered wood/laminate; subfloor prep and transitions.",
        description: "Modern flooring requires modern techniques. We handle luxury vinyl, engineered hardwood, and laminate installations with proper subfloor preparation and clean transition work throughout your home."
      }
    },

    // Process Steps
    processSteps: [
      { 
        title: "Measure & Plan", 
        body: "Layout, patterns, transitions, and materials confirmed." 
      },
      { 
        title: "Prep & Protect", 
        body: "Substrates, waterproofing, dust control, surface protection." 
      },
      { 
        title: "Install & Finish", 
        body: "Precision setting, clean lines, final detail and cleanup." 
      }
    ],

    // Commercial Expansion
    commercial: {
      note: "Now accepting commercial projects",
      badge: "Commercial Expansion 2025",
      description: "Residential specialists expanding into commercial projects across the Northwest."
    }
  }
};

// Auto-calculate email CTA visibility
businessConfig.features.showEmailCTA = !!(businessConfig.contact.email.primary || businessConfig.contact.email.secondary); 