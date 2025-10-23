import prisma from '@/lib/prisma';
import { Article } from '@/types/article';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  slug?: string;
};

export default async function RelatedArticles({ slug }: Props) {
  if (!slug) return null;

  const miniArticles: Article[] = await prisma.article.findMany({
    where: {
      slug: { not: slug },
      published: true,
    },
    orderBy: { updatedAt: 'asc' },
    take: 3,
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">More Articles</h2>
      {miniArticles.length === 0 ? (
        <p className="text-gray-300 text-sm">No more articles available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {miniArticles.map((mini) => (
            <Card key={mini.id} className="bg-black border-gray-900">
              <CardContent className="p-4">
                {mini.image_url && (
                  <Link href={`/blog/${mini.slug}`}>
                    <img
                      src={mini.image_url}
                      alt={mini.alt_text ?? 'Article thumbnail'}
                      className="w-full h-24 object-cover mb-2 rounded-md hover:opacity-80 transition-opacity duration-300"
                    />
                  </Link>
                )}
                <Link href={`/blog/${mini.slug}`} className="text-white text-base font-semibold hover:underline">
                  {mini.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}