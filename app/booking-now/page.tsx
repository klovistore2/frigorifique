// app/booking-now/page.tsx
import parks from '@/data/location.json';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

interface Location {
  slug: string;
  city: string;
}

const times = ["10:00", "12:00", "14:00"]; // Keep it simple, customize if needed

export const generateMetadata = async (): Promise<Metadata> => {
  const uniqueLocations = parks.reduce((acc: Location[], park) => {
    if (!acc.find(loc => loc.slug === park.slug)) {
      acc.push({ slug: park.slug, city: park.city });
    }
    return acc;
  }, []);
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Book Your Jump${titleSuffix}`,
    description: "Book your trampoline session at JumpArena parks across the UK with easy online booking.",
    keywords: "jumparena booking, trampoline park booking, uk jump sessions, book trampoline",
    openGraph: {
      title: `Book Your Jump${titleSuffix}`,
      description: "Reserve your spot for an exciting trampoline session at JumpArena parks across the UK.",
      url: `${domain}/booking-now`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Booking Page",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Book Your Jump${titleSuffix}`,
      description: "Book your trampoline jump at JumpArena UK now!",
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
      canonical: `${domain}/booking-now`, // Canonical URL for SEO
    },
  };
};

export default function BookingNowPage() {
  const uniqueLocations: Location[] = parks.reduce((acc: Location[], park) => {
    if (!acc.find(loc => loc.slug === park.slug)) {
      acc.push({ slug: park.slug, city: park.city });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-500 drop-shadow-lg">Book Your Jump!</h1>
        <Card className="bg-gray-800/80 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-400">Simple & Fun</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4"> {/* Placeholder action */}
              <div>
                <Label className="text-gray-300">Spot</Label>
                <select name="location" className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2">
                  <option value="">Choose</option>
                  {uniqueLocations.map(loc => (
                    <option key={loc.slug} value={loc.slug}>{loc.city} Leap</option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-gray-300">Date</Label>
                <Input name="date" type="date" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <div>
                <Label className="text-gray-300">Time</Label>
                <select name="time" className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2">
                  <option value="">Choose</option>
                  {times.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-gray-300">Jumpers (1-10)</Label>
                <input name="jumpers" type="range" min="1" max="10" defaultValue="1" className="w-full accent-pink-500" />
              </div>
              <div>
                <Label className="text-gray-300">Email</Label>
                <Input name="email" type="email" placeholder="your@email.com" className="bg-gray-700 border-gray-600 text-white" />
              </div>
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Book! 🚀
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* JSON-LD Schema for WebSite with ReserveAction */}
      <Script
        id="booking-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "JumpArena Booking",
            "description": "Book your trampoline session at JumpArena parks across the UK.",
            "url": `${coreData.domain}/booking-now`,
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${coreData.domain}/booking-now`,
                "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
              "result": {
                "@type": "Reservation",
                "name": "Trampoline Session Reservation",
              },
            },
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