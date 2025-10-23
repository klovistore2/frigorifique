import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Suspense } from 'react';
import { Article } from '@/types/article';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import Script from 'next/script';
import coreData from '@/data/core.json';

// Force static generation
export const dynamic = 'force-static';

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const { domain, titleSuffix, language } = coreData;

  return {
    title: `Latest Articles${titleSuffix}`,
    description: 'Discover the latest insights and stories from JumpArena’s blog, covering trampoline park adventures, tips, and more.',
    keywords: 'jumparena, blog, trampoline parks, activities, uk',
    openGraph: {
      title: `Latest Articles${titleSuffix}`,
      description: 'Explore the latest blog posts from JumpArena, featuring trampoline park tips, activities, and more.',
      url: `${domain}/blog`,
      siteName: 'JumpArena',
      images: [
        {
          url: `${domain}${coreData.ogImage}`,
          width: 1200,
          height: 630,
          alt: 'JumpArena Blog',
        },
      ],
      locale: language,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Latest Articles${titleSuffix}`,
      description: 'Join the bounce revolution with JumpArena’s latest blog posts!',
      images: [`${domain}${coreData.ogImage}`],
    },
    alternates: {
      canonical: `${domain}/blog`, // Canonical URL
    },
  };
}

export default async function BlogList() {
  const articles: Article[] = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <>
      <Suspense fallback={<div>Loading vibes... ✨</div>}>
        <div className="container mx-auto p-4 text-white">
          <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
          {articles.length === 0 ? (
            <p className="text-lg text-gray-400">No articles found. Check back later for new stories!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.map((article) => (
                <Card key={article.id} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle>
                      <Link href={`/blog/${article.slug}`} className="text-white text-xl font-bold hover:underline">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {article.image_url && (
                      <Link href={`/blog/${article.slug}`}>
                        <img
                          src={article.image_url}
                          alt={article.alt_text ?? 'Epic pic'}
                          className="w-full h-48 object-cover mb-2 hover:opacity-80 transition-opacity duration-300"
                          loading="lazy"
                        />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          <div className="mt-8">
            <Link href="/location" className="text-blue-500 hover:underline text-lg">
              Find Trampoline Parks in UK
            </Link>
          </div>
        </div>
      </Suspense>
      {/* JSON-LD Schema for Blog */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'JumpArena Blog',
            description: 'Discover the latest insights and stories from JumpArena’s blog, covering trampoline park adventures, tips, and more.',
            url: `${coreData.domain}/blog`,
            publisher: {
              '@type': 'Organization',
              name: 'JumpArena',
              url: coreData.domain,
            },
            blogPost: articles.map((article) => ({
              '@type': 'BlogPosting',
              headline: article.title,
              image: article.image_url || '',
              description: JSON.parse(article.metadata).description,
              url: `${coreData.domain}/blog/${article.slug}`,
              datePublished: article.createdAt.toISOString(),
              dateModified: article.updatedAt.toISOString(),
              author: { '@type': 'Person', name: 'Your Blog Team' },
            })),
          }),
        }}
      />
    </>
  );
}