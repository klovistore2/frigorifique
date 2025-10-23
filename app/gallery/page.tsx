// app/gallery/page.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Gallery of Jumps${titleSuffix}`,
    description: "View stunning photos of JumpArena trampoline parks, capturing the bounce revolution across the UK.",
    keywords: "jumparena gallery, trampoline park photos, uk trampoline images, bounce revolution",
    openGraph: {
      title: `Gallery of Jumps${titleSuffix}`,
      description: "Check out amazing photos from JumpArena trampoline parks across the UK.",
      url: `${domain}/gallery`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Gallery of Trampoline Parks",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Gallery of Jumps${titleSuffix}`,
      description: "See the best trampoline park photos at JumpArena UK!",
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
      canonical: `${domain}/gallery`, // Canonical URL for SEO
    },
  };
};

export default function Gallery() {
  const images = [
    { id: 1, src: "/jump_arena_1.jpg", alt: "Exciting trampoline jumps at JumpArena park" },
    { id: 2, src: "/jump_arena_2.jpg", alt: "Thrilling dodgeball action in JumpArena" },
    { id: 3, src: "/jump_arena_3.jpg", alt: "Kids enjoying foam pit fun at JumpArena" },
    { id: 4, src: "/jump_arena_4.jpg", alt: "High-flying slam dunk at JumpArena park" },
    { id: 5, src: "/jump_arena_5.jpg", alt: "Family fun on trampolines at JumpArena" },
    { id: 6, src: "/jump_arena_6.jpg", alt: "Neon-lit trampoline session at JumpArena" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Gallery Header */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Gallery of Jumps</h1>
        <p className="text-xl mb-8 text-white/90">Catch the Bounce Revolution in Action!</p>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <Card
              key={image.id}
              className="bg-gray-800/80 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </CardContent>
              <CardFooter className="p-4 text-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white w-full"
                >
                  <Link href={image.src}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* JSON-LD Schema for ImageGallery */}
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "JumpArena Gallery of Jumps",
            "description": "A collection of stunning photos showcasing trampoline park activities at JumpArena across the UK.",
            "url": `${coreData.domain}/gallery`,
            "provider": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
            "associatedMedia": images.map((image) => ({
              "@type": "ImageObject",
              "contentUrl": `${coreData.domain}${image.src}`,
              "name": `Trampoline Action ${image.id}`,
              "description": image.alt,
              "thumbnailUrl": `${coreData.domain}${image.src}`,
            })),
          }),
        }}
      />
    </div>
  );
}