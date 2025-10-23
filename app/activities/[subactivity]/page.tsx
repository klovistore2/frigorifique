import { notFound } from 'next/navigation'; // For 404 flips—bounce to home if slug ghosts
import { Button } from "@/components/ui/button"; // Shadcn if setup, else vanilla
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn cards for vignette bounce
import activitiesData from '@/data/activitiesData.json'; // Static import—Next.js handles as static prop
import Link from 'next/link'; // For internal leaps
import { Metadata } from 'next'; // For meta tags
import coreData from '@/data/core.json'; // Global settings
import Script from 'next/script'; // For JSON-LD

// Generate static params for all activities
export async function generateStaticParams() {
  return Object.keys(activitiesData).map((subactivity) => ({
    subactivity,
  }));
}

export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ subactivity: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const slug = params.subactivity.toLowerCase();
  const activity = activitiesData[slug as keyof typeof activitiesData];
  const { domain, ogImage, titleSuffix } = coreData;

  if (!activity) {
    return {
      title: "Activity Not Found | JumpArena",
      description: "The requested activity could not be found at JumpArena.",
    };
  }

  return {
    title: `${activity.title}${titleSuffix}`,
    description: `Explore ${activity.title} at JumpArena, featuring thrilling trampoline fun across the UK.`,
    keywords: `${activity.title.toLowerCase()}, trampoline activity, jumparena uk, bounce fun`,
    openGraph: {
      title: `${activity.title}${titleSuffix}`,
      description: `Discover ${activity.title} at JumpArena, a thrilling trampoline activity across the UK.`,
      url: `${domain}/activities/${slug}`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${activity.image || ogImage}`, // Fallback to core OG if activity lacks image
          width: 1200,
          height: 630,
          alt: `${activity.title} at JumpArena`,
        },
      ],
      locale: coreData.language,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${activity.title}${titleSuffix}`,
      description: `Check out ${activity.title} at JumpArena UK!`,
      images: [`${domain}${activity.image || ogImage}`],
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
      canonical: `${domain}/activities/${slug}`, // Canonical URL for SEO
    },
  };
}

export default async function SubActivityPage({ params: paramsPromise }: { params: Promise<{ subactivity: string }> }) {
  const params = await paramsPromise;
  const slug = params.subactivity.toLowerCase(); // Normalize for case-insensitivity
  const activity = activitiesData[slug as keyof typeof activitiesData];

  if (!activity) {
    notFound(); // Bounce to 404 handler
  }

  // Fetch other activities: Exclude current, shuffle or slice 3-4 for random fun
  const otherActivities = Object.entries(activitiesData)
    .filter(([key]) => key !== slug)
    .sort(() => 0.5 - Math.random()) // Funny random bounce each load
    .slice(0, 4) // Up to 4 vignettes—keeps it snappy
    .map(([key, value]) => ({ slug: key, ...value })); // Map to array with slugs

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Launch */}
      <section className="relative py-40 text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${activity.image}')` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-8xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">{activity.title}</h1>
          <p className="text-4xl mb-10 text-white/90 font-light">Defy Gravity, Your Way!</p>
        </div>
      </section>

      {/* Spun Desc Section */}
      <section className="py-16 px-6 bg-gray-800/60">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-5xl font-bold text-fuchsia-500">Why {activity.title} Rules the Bounce</h2>
          <p className="text-xl text-gray-300 leading-relaxed">{activity.description}</p>
        </div>
      </section>

      {/* Vignette Vibes – 3-4 cards linking to other activities */}
      <section className="py-16 px-6 bg-black/80">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">More Epic Bounces Await!</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {otherActivities.map((other) => (
            <Link key={other.slug} href={`/activities/${other.slug}`}>
              <Card className="bg-gray-900/80 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                <img src={other.image} alt={`${other.title} Tease`} className="w-full h-40 object-cover rounded-t-lg" />
                <CardHeader className="p-4">
                  <CardTitle className="text-2xl font-bold text-fuchsia-400">{other.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-gray-300 text-sm line-clamp-3">{other.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Flip */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-6xl font-bold mb-6 text-pink-500 drop-shadow-md">Ready to {activity.title}?</h2>
        <p className="text-xl mb-8 text-white/90">Book now and launch into fun!</p>
        <Link href="/booking-now">
          <Button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
            Book Your Session
          </Button>
        </Link>
      </section>

      {/* JSON-LD Schema for CreativeWork */}
      <Script
        id="subactivity-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": activity.title,
            "url": `${coreData.domain}/activities/${slug}`,
            "description": activity.description,
            "image": `${coreData.domain}${activity.image}`,
            "provider": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "General Public",
            },
          }),
        }}
      />
    </div>
  );
}