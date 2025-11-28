export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "Amethyst Aesthetics",
    "url": "https://hifusomerset.co.uk",
    "sameAs": [
      "https://hifusomerset.co.uk",
      "https://www.amethystaestheticsbeauty.com/"
    ],
    "logo": "https://hifusomerset.co.uk/images/amethyst-logo.avif",
    "image": "https://hifusomerset.co.uk/images/stunning-results-1-session-hifu-bf1.png",
    "description": "Award-finalist beauty salon in Somerset specializing in HIFU non-surgical facelift treatments led by Marianne. Non-invasive skin tightening, jowl lifting, and facial rejuvenation with zero downtime.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HIFU Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Face HIFU - BLACK FRIDAY",
            "description": "Complete facial HIFU treatment for lifting and tightening. BLACK FRIDAY Special - normally £395!"
          },
          "price": "299",
          "priceCurrency": "GBP",
          "priceValidUntil": "2025-11-30"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Face, Neck, Arms & Tummy HIFU",
            "description": "Complete HIFU treatment package for face, neck, arms and tummy"
          },
          "price": "599",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Course of 3 Face Treatments",
            "description": "Three full face HIFU sessions for optimal results"
          },
          "price": "900",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Body HIFU",
            "description": "HIFU treatment for body areas - arms, tummy, and more"
          },
          "price": "299",
          "priceCurrency": "GBP"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Non-Surgical Facelift"
    ],
    "availableService": [
      {
        "@type": "Service",
        "name": "HIFU Non-Surgical Facelift",
        "description": "High-Intensity Focused Ultrasound treatment for facial lifting and skin tightening"
      },
      {
        "@type": "Service",
        "name": "Jowl Lifting",
        "description": "HIFU treatment targeting sagging jowls for a more defined jawline"
      },
      {
        "@type": "Service",
        "name": "Neck Tightening",
        "description": "HIFU treatment for turkey neck and loose neck skin"
      },
      {
        "@type": "Service",
        "name": "Brow Lifting",
        "description": "HIFU treatment for drooping brows and hooded eyes"
      },
      {
        "@type": "Service",
        "name": "Skin Tightening",
        "description": "HIFU treatment for overall facial skin tightening and rejuvenation"
      },
      {
        "@type": "Service",
        "name": "Body HIFU",
        "description": "HIFU treatment for body contouring and skin tightening on arms, tummy and other areas"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amethyst Aesthetics Beauty - HIFU Somerset",
    "alternateName": "HIFU Somerset",
    "url": "https://hifusomerset.co.uk",
    "description": "Expert HIFU non-surgical facelift treatment for skin tightening, jowl lifting & facial rejuvenation in Somerset by award-winning practitioner Marianne",
    "publisher": {
      "@type": "Organization",
      "name": "Amethyst Aesthetics Beauty"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hifusomerset.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "HIFU Somerset",
    "image": "https://hifusomerset.co.uk/images/amethyst-clinic.avif",
    "description": "Award-finalist beauty salon in South Petherton, Somerset. Specializing in HIFU non-surgical facelift treatments for skin tightening, jowl lifting, and facial rejuvenation. Zero downtime, visible results.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "url": "https://hifusomerset.co.uk",
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "GBP",
    "areaServed": [
      {
        "@type": "City",
        "name": "South Petherton"
      },
      {
        "@type": "City",
        "name": "Yeovil"
      },
      {
        "@type": "City",
        "name": "Crewkerne"
      },
      {
        "@type": "City",
        "name": "Ilminster"
      },
      {
        "@type": "City",
        "name": "Chard"
      },
      {
        "@type": "City",
        "name": "Taunton"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Unit+2,+Old+Apple+Store,+New+Cross+Hill,+South+Petherton,+TA13+5HV",
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Non-Surgical Facelift"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HIFU Treatment Somerset",
    "description": "Expert HIFU non-surgical facelift treatment for skin tightening, jowl lifting, and facial rejuvenation led by award-finalist practitioner Marianne",
    "provider": {
      "@type": "BeautySalon",
      "name": "Amethyst Aesthetics Beauty",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
        "addressLocality": "South Petherton",
        "addressRegion": "Somerset",
        "postalCode": "TA13 5HV",
        "addressCountry": "GB"
      },
      "telephone": "+447366904007"
    },
    "areaServed": [
      "South Petherton",
      "Yeovil",
      "Crewkerne",
      "Ilminster",
      "Chard",
      "Taunton",
      "Martock",
      "Langport",
      "Somerton",
      "Somerset"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://hifusomerset.co.uk",
      "serviceSmsNumber": "+447366904007"
    },
    "category": "Beauty Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HIFU Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Full Face HIFU - BLACK FRIDAY",
          "price": "299",
          "priceCurrency": "GBP",
          "priceValidUntil": "2025-11-30",
          "description": "Complete facial HIFU treatment for lifting and tightening. BLACK FRIDAY Special - normally £395!"
        },
        {
          "@type": "Offer",
          "name": "Face, Neck, Arms & Tummy HIFU",
          "price": "599",
          "priceCurrency": "GBP",
          "description": "Complete HIFU treatment package for face, neck, arms and tummy"
        },
        {
          "@type": "Offer",
          "name": "Course of 3 Face Treatments",
          "price": "900",
          "priceCurrency": "GBP",
          "description": "Three full face HIFU sessions for optimal results"
        },
        {
          "@type": "Offer",
          "name": "Body HIFU",
          "price": "299",
          "priceCurrency": "GBP",
          "description": "HIFU treatment for body areas - arms, tummy, and more"
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Margaret Thresher"
        },
        "datePublished": "2024-11-19",
        "reviewBody": "I have been going to Marianne for over a year. She is very friendly and makes me feel very relaxed, she is very professional and does a brilliant job.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Holly Henderson"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "I've had many treatments with Marianne, all of which have been done to an extremely high standard and I've left feeling more confident in myself everytime. Marianne is kind, caring and an amazing listener. It's like having my lips done and therapy all at the same time. Wouldn't go anywhere else, she's one of a kind!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Joanna Bowers"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "Marianne is the best i would never go elsewhere, highly recommended and well worth the travel. She is kind, caring and attentive she gives you back confidence and uplift she makes you feel welcome on every visit never short on making you feel special.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sheena Wye"
        },
        "datePublished": "2024-07-21",
        "reviewBody": "Wouldn't go anywhere else for my aesthetics this company has helped me find a new love for myself! One thing I pride them in if she don't think it's for you she will say and suggest alternatives! Amazing friendly service.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Shannon Reason"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "I went to Marianne to get my lips done for the first time. I was really scared I have a phobia of needles. Marianne assured me I'd be fine. She was super patient with me, kept checking in with me while my numbing stuff was on. She explained everything clearly and made the whole experience comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tracey Groves"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "Marianne is superb. She provides extensive knowledge of the treatment you are having, explaining everything including aftercare which in turn puts you at ease. She goes above and beyond to ensure your treatment is provided under the highest standard.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  )
}