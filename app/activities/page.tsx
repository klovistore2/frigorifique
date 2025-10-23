import activitiesData from '@/data/activitiesData.json'; // Static import for activities
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn cards
import Link from 'next/link'; // Internal leaps
import { Metadata } from 'next'; // For meta tags
import coreData from '@/data/core.json'; // Global settings
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const activities = Object.entries(activitiesData).map(([slug, data]) => ({ slug, ...data }));
  const { domain, ogImage, titleSuffix } = coreData;

  return {
    title: `Activities${titleSuffix}`,
    description: "Discover thrilling trampoline activities at JumpArena, from freestyle jumps to dodgeball, across the UK.",
    keywords: "trampoline activities, jumparena uk, dodgeball, freestyle jump, trampoline park",
    openGraph: {
      title: `Activities${titleSuffix}`,
      description: "Explore a variety of trampoline activities at JumpArena parks across the UK.",
      url: `${domain}/activities`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Trampoline Parks UK",
        },
      ],
      locale: coreData.language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Activities${titleSuffix}`,
      description: "Check out JumpArena's trampoline activities across the UK!",
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
      canonical: `${domain}/activities`, // Correct property for canonical URL
    },
  };
};

export default function ActivitiesPage() {
  const activities = Object.entries(activitiesData).map(([slug, data]) => ({ slug, ...data }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-extrabold text-center mb-12 text-fuchsia-500 drop-shadow-lg">Epic Activities Await!</h1>
        <p className="text-2xl text-center mb-16 text-gray-300 font-light">Pick your bounce vibe—dodge, flip, or freestyle like a pro!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity) => (
            <Link key={activity.slug} href={`/activities/${activity.slug}`}>
              <Card className="bg-gray-900/80 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={`${activity.title} Tease`} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <CardHeader className="p-6">
                  <CardTitle className="text-3xl font-bold text-fuchsia-400">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-300 text-lg line-clamp-4">{activity.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* JSON-LD Schema for WebSite and ItemList */}
        <Script
          id="activities-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": `${coreData.domain}/activities`,
              "name": "JumpArena Activities",
              "description": "Explore a variety of trampoline activities at JumpArena parks across the UK.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${coreData.domain}/activities?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "itemListElement": activities.map((activity, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": activity.title,
                  "url": `${coreData.domain}/activities/${activity.slug}`,
                  "description": activity.description.substring(0, 150) + "...",
                  "image": `${coreData.domain}${activity.image}`,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
}