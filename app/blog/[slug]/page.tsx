import prisma from '@/lib/prisma';
import Head from 'next/head';
import { Article } from '@/types/article';
import Script from 'next/script';
import { Metadata } from 'next';
import coreData from '@/data/core.json'; // Import core.json for domain

// Force static generation
export const dynamic = 'force-static';

// Generate static params for all slugs
export async function generateStaticParams() {
  try {
    const articles = await prisma.article.findMany({
      select: { slug: true },
    });
    return articles.map((article) => ({ slug: article.slug }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { domain } = coreData; // Get domain from core.json

  const article = await prisma.article.findUnique({ where: { slug } });
  if (!article) {
    return { title: 'Article not found' };
  }

  const metadata = JSON.parse(article.metadata);

  return {
    title: `${article.title}`,
    description: metadata.description,
    openGraph: {
      title: article.title,
      description: metadata.description,
      images: [{ url: article.image_url || '', alt: article.alt_text || '' }],
      type: 'article',
      publishedTime: article.createdAt.toISOString(),
      modifiedTime: article.updatedAt.toISOString(),
    },
    alternates: {
      canonical: `${domain}/blog/${slug}`, // Canonical URL with current slug
    },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const article: Article | null = await prisma.article.findUnique({ where: { slug } });
  if (!article) return <div className="text-white">Article not found! 😿</div>;

  const metadata = JSON.parse(article.metadata);

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={article.image_url || ''} />
      </Head>
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.alt_text ?? 'Hero shot'}
          className="w-full h-96 object-cover mb-4 hero-image"
          loading="lazy" // SEO optimization: lazy loading for images
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} className="prose prose-invert" />
      {/* Structured data for SEO */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            image: article.image_url || '',
            description: metadata.description,
            datePublished: article.createdAt.toISOString(),
            dateModified: article.updatedAt.toISOString(),
            author: { '@type': 'Person', name: 'Jump Arena Tean' },
          }),
        }}
      />
    </>
  );
}