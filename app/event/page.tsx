// app/event/page.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

async function getEvents() {
  const res = await import('@/data/event.json');
  return res.events;
}

export async function generateMetadata(): Promise<Metadata> {
  const events = await getEvents();
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `JumpArena Events${titleSuffix}`,
    description: "Discover upcoming trampoline events at JumpArena, featuring bounce-a-thons, themed weekends, and more across the UK.",
    keywords: "trampoline events, jumparena events, uk trampoline parks, bounce-a-thon, themed events",
    openGraph: {
      title: `JumpArena Events${titleSuffix}`,
      description: "Explore a variety of upcoming trampoline events at JumpArena parks across the UK.",
      url: `${domain}/event`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Upcoming Events",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `JumpArena Events${titleSuffix}`,
      description: "Check out the latest trampoline events at JumpArena UK!",
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
      canonical: `${domain}/event`, // Canonical URL for SEO
    },
  };
}

export default async function EventListing() {
  const events = await getEvents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Upcoming Events</h1>
        <p className="text-xl mb-10 text-white/90">Explore exciting trampoline events at JumpArena across the UK!</p>
      </section>

      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card key={event.slug} className="bg-gray-800/80 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">

                <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{new Date(event.date).toLocaleDateString()}</p>
              </CardContent>
              <CardFooter className="p-4 flex flex-col items-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white w-full"
                >
                  <Link href={`/event/${event.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* JSON-LD Schema for ItemList */}
      <Script
        id="event-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "JumpArena Upcoming Events",
            "description": "A list of upcoming trampoline events at JumpArena parks across the UK.",
            "url": `${coreData.domain}/event`,
            "numberOfItems": events.length,
            "itemListElement": events.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "startDate": event.date,
                "description": event.content.substring(0, 150) + "...",
                "url": `${coreData.domain}/event/${event.slug}`,
                "image": `${coreData.domain}${event.image}`,
              },
            })),
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