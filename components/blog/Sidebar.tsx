import prisma from '@/lib/prisma';
import { Article } from '@/types/article';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  slug?: string;
};

export default async function Sidebar({ slug }: Props) {
  const sidebarArticles: Article[] = await prisma.article.findMany({
    where: {
      slug: slug ? { not: slug } : undefined,
      published: true,
    },
    orderBy: { updatedAt: 'desc' },
    take: 3,
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
      {sidebarArticles.length === 0 ? (
        <p className="text-gray-300 text-sm">No other articles available.</p>
      ) : (
        sidebarArticles.map((other) => (
          <Card key={other.id} className="mb-4 bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              {other.image_url && (
                <Link href={`/blog/${other.slug}`}>
                  <img
                    src={other.image_url}
                    alt={other.alt_text ?? 'Article thumbnail'}
                    className="w-full h-32 object-cover mb-2 rounded-md hover:opacity-80 transition-opacity duration-300"
                  />
                </Link>
              )}
              <Link href={`/blog/${other.slug}`} className="text-white text-base font-semibold hover:underline">
                {other.title}
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}