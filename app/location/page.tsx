import parks from '@/data/location.json';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

interface Location {
  slug: string;
  city: string;
}

export const generateMetadata = async (): Promise<Metadata> => {
  const uniqueLocations = parks.reduce((acc: Location[], park) => {
    if (!acc.find(loc => loc.slug === park.slug)) {
      acc.push({ slug: park.slug, city: park.city });
    }
    return acc;
  }, []);
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Locations${titleSuffix}`,
    description: "Find JumpArena trampoline park locations across the UK, offering thrilling bounce experiences.",
    keywords: "jumparena locations, trampoline parks uk, bounce locations, uk trampoline spots",
    openGraph: {
      title: `Locations${titleSuffix}`,
      description: "Discover all JumpArena trampoline park locations across the UK.",
      url: `${domain}/location`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Locations",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Locations${titleSuffix}`,
      description: "Check out JumpArena trampoline park locations across the UK!",
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
      canonical: `${domain}/location`, // Canonical URL for SEO
    },
  };
};

export default function LocationsPage() {
  const uniqueLocations: Location[] = parks.reduce((acc: Location[], park) => {
    if (!acc.find(loc => loc.slug === park.slug)) {
      acc.push({ slug: park.slug, city: park.city });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-pink-500 drop-shadow-lg">Trempoline Park Hotspots for Jump</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueLocations.map((loc) => {
            const cityParks = parks.filter(p => p.slug === loc.slug);
            const numParks = cityParks.length;
            // For demo, assume one park per city, take first address
            const sampleAddress = cityParks[0]?.address_street || '';

            return (
              <Link key={loc.slug} href={`/location/${loc.slug}`}>
                <Card className="bg-gray-800/80 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-pink-400">{loc.city} Leap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-2">{numParks} Park{numParks > 1 ? 's' : ''} Available</p>
                    <p className="text-gray-400 text-sm">{sampleAddress}</p>
                    {/* Placeholder for image */}
                    <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image Coming Soon</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* JSON-LD Schema for CollectionPage */}
      <Script
        id="locations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "JumpArena Locations",
            "description": "Discover all JumpArena trampoline park locations across the UK.",
            "url": `${coreData.domain}/location`,
            "hasPart": uniqueLocations.map((loc) => {
              const cityParks = parks.filter(p => p.slug === loc.slug);
              return {
                "@type": "WebPage",
                "name": `${loc.city} JumpArena Locations`,
                "url": `${coreData.domain}/location/${loc.slug}`,
                "description": cityParks[0]?.description || "Trampoline park location details.",
              };
            }),
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