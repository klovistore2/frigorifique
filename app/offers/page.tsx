import { Button } from "@/components/ui/button"; // Shadcn for that slick button vibe, if setup—otherwise, vanilla it!
import { Link } from "lucide-react";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Offers${titleSuffix}`,
    description: "Explore exclusive trampoline park offers at JumpArena, including discounts on parties, jumps, and more across the UK.",
    keywords: "jumparena offers, trampoline park discounts, party deals, uk trampoline promotions",
    openGraph: {
      title: `Offers${titleSuffix}`,
      description: "Check out the latest trampoline park offers and discounts at JumpArena across the UK.",
      url: `${domain}/offers`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Special Offers",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Offers${titleSuffix}`,
      description: "Grab the best trampoline deals at JumpArena UK!",
      images: [`${domain}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${domain}/offers`, // Canonical URL for SEO
    },
  };
};

export default function OffersPage() {
  // Bounce squad, here's your /offers page: Neon-drenched deals cribbed from real AirHop vibes (updated for 2025 September flair). 
  // Grid o' vignettes like the screenshot—titles pop in fuchsia, descs chill in gray, buttons gradient-punch. 
  // Kept it lean: Hero hook, deals grid, CTA footer. Funny twists? "Hoptastic" spun to "Bounce-tastic". Intuitive flow, mobile-first grid.

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Vibes */}
      <section className="relative py-32 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-offers-neon.jpg')" }}> {/* Placeholder img—swap for trampoline deals glow */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-8xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Offers</h1>
          <p className="text-4xl mb-10 text-white/90 font-light">Check Out Our Special Bounces!</p>
        </div>
      </section>

      {/* Deals Grid – Vignettes a la screenshot, but our dark neon sauce */}
      <section className="py-16 px-6 bg-gray-800/60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Offer 1: September Party Save */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">20% Off Premium Parties!</h3>
            <p className="text-gray-300 mb-4">Book in September, party whenever—save big on premium birthday bounces! (Reg £27.95/pp, now 20% less)</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>

          {/* Offer 2: Weekday Party Discount */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">20% Off Weekday Parties!</h3>
            <p className="text-gray-300 mb-4">Mon-Thu term time only. Use code: WEEKDAY20 for Classic, Premium, or UV parties. Bounce squad assemble!</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>

          {/* Offer 3: After School Unlimited */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">Unlimited After School Jumps!</h3>
            <p className="text-gray-300 mb-4">After 3pm, Mon-Thu term time. Endless flips for one low price—term time only, no cap on fun!</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>

          {/* Offer 4: Student Discount */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">Student Bounce Discount!</h3>
            <p className="text-gray-300 mb-4">20% off 90 or 120-min Open Jumps. Flash valid ID, use code: STUDENT20. Study break? More like gravity break!</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>

          {/* Offer 5: Emergency Services */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">Heroes Discount!</h3>
            <p className="text-gray-300 mb-4">20% off for emergency services on 90/120-min jumps. Blue Light Card required, code: BLUELIGHT20. You save us—we save you bucks!</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>

          {/* Offer 6: Sunset Sessions */}
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-fuchsia-500">Sunset Sessions!</h3>
            <p className="text-gray-300 mb-4">Fri & Sat evenings: 2-hour jumps with disco lights & tunes for just £19.95. Glow up your weekend!</p>
            <a href="/location">
              <button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white">
                Book Online →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-6xl font-bold mb-6 text-pink-500 drop-shadow-md">Grab These Deals Before They Bounce Away!</h2>
        <p className="text-xl mb-8 text-white/90">Limited time—book now and soar higher for less!</p>
        <a href="/location">
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
            Find Your Location
          </button>
        </a>
      </section>

      {/* JSON-LD Schema for OfferCatalog */}
      <Script
        id="offers-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            "name": "JumpArena Special Offers",
            "description": "Explore exclusive trampoline park offers and discounts at JumpArena across the UK.",
            "url": `${coreData.domain}/offers`,
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "20% Off Premium Parties",
                "description": "Book in September, party anytime—save 20% on premium birthday bounces (was £27.95/pp).",
                "price": "22.36", // 80% of 27.95
                "priceCurrency": "GBP",
                "availability": "https://schema.org/LimitedAvailability",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date('2025-09-01T00:00:00Z').toISOString(), // Start of September 2025
                "validThrough": new Date('2025-09-30T23:59:59Z').toISOString(), // End of September 2025
              },
              {
                "@type": "Offer",
                "name": "20% Off Weekday Parties",
                "description": "20% off Mon-Thu term time with code WEEKDAY20 for Classic, Premium, or UV parties.",
                "price": "varies", // Dynamic pricing, placeholder
                "priceCurrency": "GBP",
                "availability": "https://schema.org/LimitedAvailability",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date().toISOString(),
                "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
              },
              {
                "@type": "Offer",
                "name": "Unlimited After School Jumps",
                "description": "Unlimited jumps after 3pm Mon-Thu term time for one low price.",
                "price": "varies", // Dynamic pricing, placeholder
                "priceCurrency": "GBP",
                "availability": "https://schema.org/LimitedAvailability",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date().toISOString(),
                "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
              },
              {
                "@type": "Offer",
                "name": "Student Bounce Discount",
                "description": "20% off 90 or 120-min Open Jumps with valid ID and code STUDENT20.",
                "price": "varies", // Dynamic pricing, placeholder
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date().toISOString(),
              },
              {
                "@type": "Offer",
                "name": "Heroes Discount",
                "description": "20% off for emergency services on 90/120-min jumps with Blue Light Card and code BLUELIGHT20.",
                "price": "varies", // Dynamic pricing, placeholder
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date().toISOString(),
              },
              {
                "@type": "Offer",
                "name": "Sunset Sessions",
                "description": "2-hour jumps Fri & Sat evenings with disco lights and tunes for £19.95.",
                "price": "19.95",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/LimitedAvailability",
                "url": `${coreData.domain}/offers`,
                "validFrom": new Date().toISOString(),
                "validThrough": new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
              },
            ],
            "provider": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
          }),
        }}
      />
    </div>
  );
}