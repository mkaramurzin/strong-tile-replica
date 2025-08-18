import { businessConfig } from '../config/business';

export default function SeoLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessConfig.brand.name,
    "description": businessConfig.brand.tagline,
    "url": `https://vantatileflooring.com`,
    "telephone": businessConfig.contact.phone.href,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.location.address.street,
      "addressLocality": businessConfig.location.address.city,
      "addressRegion": businessConfig.location.address.state,
      "postalCode": businessConfig.location.address.zipCode,
      "addressCountry": businessConfig.location.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.6387",
      "longitude": "-122.6615"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "45.6387",
        "longitude": "-122.6615"
      },
      "geoRadius": "50000"
    },
    "areaServed": businessConfig.location.serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flooring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tile Installation",
            "description": businessConfig.content.servicesContent.tileInstallation.subtitle
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tile Repair",
            "description": businessConfig.content.servicesContent.tileRepair.subtitle
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Installation",
            "description": businessConfig.content.servicesContent.flooringInstallation.subtitle
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
} 