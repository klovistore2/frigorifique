import parks from '@/data/location.json';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export async function generateStaticParams() {
  const uniqueSlugs = [...new Set(parks.map(park => park.slug))];
  return uniqueSlugs.map(slug => ({ city: slug }));
}

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const cityParks = parks.filter(park => park.slug === params.city);
  const { domain, ogImage, titleSuffix, language } = coreData;

  if (cityParks.length === 0) {
    return {
      title: `Location Not Found${titleSuffix}`,
      description: "The requested JumpArena location could not be found.",
    };
  }

  const city = cityParks[0].city;
  return {
    title: `${city} Locations${titleSuffix}`,
    description: `Explore JumpArena trampoline parks in ${city}, offering thrilling bounce experiences across the UK.`,
    keywords: `${city.toLowerCase()} trampoline park, jumparena ${city}, uk bounce locations`,
    openGraph: {
      title: `${city} Locations${titleSuffix}`,
      description: `Discover JumpArena trampoline parks in ${city}, UK.`,
      url: `${domain}/location/${params.city}`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${cityParks[0].photo_url || ogImage}`, // Use park photo if available, fallback to OG
          width: 1200,
          height: 630,
          alt: `JumpArena in ${city}`,
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${city} Locations${titleSuffix}`,
      description: `Check out JumpArena trampoline parks in ${city}, UK!`,
      images: [`${domain}${cityParks[0].photo_url || ogImage}`],
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
      canonical: `${domain}/location/${params.city}`, // Canonical URL for SEO
    },
  };
}

export default async function LocationPage({ params: paramsPromise }: { params: Promise<{ city: string }> }) {
  const params = await paramsPromise;
  const cityParks = parks.filter(park => park.slug === params.city);

  if (cityParks.length === 0) {
    return <div className="text-center py-20 text-white">No parks found in {params.city}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-fuchsia-500 drop-shadow-lg">Trampoline Parks in {cityParks[0].city}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cityParks.map((park) => (
            <Card key={park.park_id} className="bg-gray-800/80 border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-fuchsia-400">{park.park_name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-2">Chain: {park.chain || 'Independent'}</p>
                <p className="text-gray-300 mb-2">Address: {park.address_street}, {park.address_city}, {park.address_postcode}</p>
                <p className="text-gray-400 mb-4 line-clamp-3">{park.description}</p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* JSON-LD Schema for LocalBusiness (one per park) */}
      {cityParks.map((park) => (
        <Script
          key={park.park_id}
          id={`location-schema-${park.park_id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": park.park_name,
              "description": park.description,
              "url": `${coreData.domain}/location/${park.slug}`,
              "image": park.photo_url ? `${coreData.domain}${park.photo_url.split('https://')[1]}` : `${coreData.domain}${coreData.ogImage}`, // Handle relative/absolute URLs
              "address": {
                "@type": "PostalAddress",
                "streetAddress": park.address_street,
                "addressLocality": park.address_city,
                "postalCode": park.address_postcode,
                "addressCountry": "GB",
              },
              "telephone": park.chain === "Jump Arena" ? "N/A" : "+44", // Placeholder, update with real numbers
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5074, // Placeholder London lat, update with real coords
                "longitude": -0.1278, // Placeholder London long, update with real coords
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "21:00",
                },
              ],
            }),
          }}
        />
      ))}
    </div>
  );
}