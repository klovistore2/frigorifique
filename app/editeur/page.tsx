import prisma from '@/lib/prisma';
import Link from 'next/link';
import Head from 'next/head';
import { Article } from '@/types/article';
import { Button } from '@/components/ui/button';

export default async function EditorList() {
  const articles: Article[] = await prisma.article.findMany({ orderBy: { updatedAt: 'desc' } });

  return (
    <>
      <Head>
        <title>Editor Dashboard - Your Blog</title>
        <meta name="description" content="Manage articles like a pro." />
      </Head>
      <div className="container mx-auto p-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Article List (WP Vibes 🎉)</h1>
          <Link href="/editeur/new">
            <Button
              className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              New Article
            </Button>
          </Link>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Title</th>
              <th className="p-2">Slug</th>
              <th className="p-2">Published</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-b">
                <td className="p-2">{article.title}</td>
                <td className="p-2">{article.slug}</td>
                <td className="p-2">{article.published ? 'Yes' : 'No'}</td>
                <td className="p-2">
                  <Link href={`/editeur/${article.slug}`} className="text-blue-500 hover:underline">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}