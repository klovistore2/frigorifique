// app/event/[event]/page.tsx
import parks from '@/data/location.json'; // For potential location linking
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

function getEvent(slug: string) {
  const res = require("../../../data/event.json"); // Synchrone pour simplicité
  return res.events.find((event: any) => event.slug === slug);
}

export async function generateStaticParams() {
  const res = require("../../../data/event.json"); // Synchrone pour pre-render
  return res.events.map((event: any) => ({
    event: event.slug,
  }));
}

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ event: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const event = getEvent(params.event);
  const { domain, ogImage, titleSuffix, language } = coreData;

  if (!event) {
    return {
      title: `Event Not Found${titleSuffix}`,
      description: "The requested event could not be found at JumpArena.",
    };
  }

  // Find a related park for location context (optional, based on event date or slug)
  const relatedPark = parks.find(park => park.city.toLowerCase().includes(event.title.toLowerCase().split('-')[0]) || new Date(park.description).getTime() === new Date(event.date).getTime());
  const locationUrl = relatedPark ? `${domain}/location/${relatedPark.slug}` : `${domain}/location`;

  return {
    title: `${event.title}${titleSuffix}`,
    description: event.meta.description,
    keywords: event.meta.keywords,
    openGraph: {
      title: `${event.title}${titleSuffix}`,
      description: event.meta.description,
      url: `${domain}/event/${params.event}`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${event.image || ogImage}`, // Use event image if available, fallback to OG
          width: 1200,
          height: 630,
          alt: `${event.title} at JumpArena`,
        },
      ],
      locale: language,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title}${titleSuffix}`,
      description: event.meta.description,
      images: [`${domain}${event.image || ogImage}`],
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
      canonical: `${domain}/event/${params.event}`, // Canonical URL for SEO
    },
  };
}

export default async function EventPage({ params: paramsPromise }: { params: Promise<{ event: string }> }) {
  const params = await paramsPromise;
  const event = getEvent(params.event);

  if (!event) {
    return <div className="text-center py-16 text-white">Event not found.</div>;
  }

  // Find a related park for display (optional enhancement)
  const relatedPark = parks.find(park => park.city.toLowerCase().includes(event.title.toLowerCase().split('-')[0]) || new Date(park.description).getTime() === new Date(event.date).getTime());

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      <section className="py-16 px-6">
        <Card className="bg-gray-800/80 max-w-3xl mx-auto rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-fuchsia-500">{event.title}</h1>
            <p className="text-sm text-gray-400 mb-4">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-lg text-white/80 leading-relaxed">{event.content}</p>
            {relatedPark && (
              <p className="text-sm text-gray-500 mt-4">Location Suggestion: <Link href={`/location/${relatedPark.slug}`} className="text-cyan-400 hover:underline">{relatedPark.city}</Link></p>
            )}
          </CardContent>
          <CardFooter className="p-6 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white w-full"
            >
              <Link href="/event">Back to Events</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* JSON-LD Schema for Event */}
      <Script
        id={`event-schema-${params.event}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.title,
            "startDate": event.date,
            "endDate": new Date(new Date(event.date).setHours(new Date(event.date).getHours() + 2)).toISOString(), // Assume 2-hour event
            "description": event.content,
            "image": `${coreData.domain}${event.image}`,
            "url": `${coreData.domain}/event/${params.event}`,
            "location": relatedPark
              ? {
                  "@type": "Place",
                  "name": relatedPark.park_name,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": relatedPark.address_street,
                    "addressLocality": relatedPark.address_city,
                    "postalCode": relatedPark.address_postcode,
                    "addressCountry": "GB",
                  },
                }
              : { "@type": "VirtualLocation", "url": `${coreData.domain}/event/${params.event}` },
            "organizer": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
            "offers": {
              "@type": "Offer",
              "price": "varies", // Dynamic pricing, placeholder
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock",
              "url": `${coreData.domain}/event/${params.event}`,
              "validFrom": event.date,
            },
          }),
        }}
      />
    </div>
  );
}