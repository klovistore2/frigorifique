import { updateArticle, createArticle, deleteArticle } from '@/app/editeur/actions';
import prisma from '@/lib/prisma';
import Head from 'next/head';
import { Article } from '@/types/article';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { redirect } from 'next/navigation';
import slugify from 'slugify';
import Link from 'next/link';

export default async function EditArticle({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ error?: string }> }) {
  const { slug } = await params;
  const { error } = await searchParams;
  const isNew = slug === 'new';
  let article: Article | null = null;
  let metadata = { description: '' };

  if (!isNew) {
    article = await prisma.article.findUnique({ where: { slug } });
    if (!article) return <div className="text-white">Article not found! 😿</div>;
    metadata = JSON.parse(article.metadata);
  }

  const action = async (formData: FormData) => {
    'use server';
    try {
      if (isNew) {
        await createArticle(formData);
        const title = formData.get('title') as string;
        const newSlug = slugify(title, { lower: true, strict: true, remove: /[:]/g });
        redirect(`/editeur/${newSlug}`);
      } else {
        await updateArticle(formData);
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An error occurred';
      redirect(`/editeur/${slug}?error=${encodeURIComponent(errorMessage)}`);
    }
  };

  const deleteAction = async () => {
    'use server';
    if (!article) return;
    await deleteArticle(article.id);
  };

  return (
    <>
      <Head>
        <title>{isNew ? 'New Article' : `Edit ${article?.title}`} - Your Blog</title>
        <meta name="description" content={isNew ? 'Create a new masterpiece.' : 'Edit your masterpiece.'} />
      </Head>
      <div className="container mx-auto p-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{isNew ? 'New Article (Fresh Start 🌟)' : 'Edit Article (Simple Form Power 🪄)'}</h1>
          {!isNew && (
            <Link href={`/blog/${slug}`} className="text-blue-500 hover:underline text-lg">
              View Article
            </Link>
          )}
        </div>
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        <form action={action} className="space-y-4">
          {!isNew && <input type="hidden" name="id" value={article?.id} />}
          <input
            type="text"
            name="title"
            defaultValue={article?.title ?? ''}
            placeholder="Title"
            required
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />
          <textarea
            name="content"
            defaultValue={article?.content ?? ''}
            placeholder="Content (HTML OK for rich text!)"
            className="w-full p-2 border bg-gray-800 text-white h-48 rounded"
          />
          <textarea
            name="metaDesc"
            defaultValue={metadata.description ?? ''}
            placeholder="Meta Description (SEO boost!)"
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            name="category"
            defaultValue={article?.category ?? ''}
            placeholder="Category (e.g., Tech, Lifestyle)"
            required
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            name="subcategory"
            defaultValue={article?.subcategory ?? ''}
            placeholder="Subcategory (optional)"
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            name="tags"
            defaultValue={article?.tags ?? 'Tag1'}
            placeholder="Tags (comma-separated, e.g., blog, tech)"
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />
          <p>Upload image : </p> 
          <Input
            type="file"
            name="image"
            className="file:bg-gray-600 file:hover:bg-gray-700 file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:cursor-pointer cursor-pointer"
          />
          {!isNew && <input type="hidden" name="imageUrl" value={article?.image_url ?? ''} />}
                   {article?.image_url && (
            <img
              src={article.image_url}
              alt={article.alt_text ?? 'Default image description'}
              className="w-32 h-32 object-cover mb-4 rounded"
            />
          )} 
          <input
            type="text"
            name="altText"
            defaultValue={article?.alt_text ?? ''}
            placeholder="Alt Text (Accessibility win!)"
            className="w-full p-2 border bg-gray-800 text-white rounded"
          />

          <div className="flex items-center space-x-4">
            <label htmlFor="published" className="text-white">Publish Article</label>
            <input
              type="checkbox"
              id="published"
              name="published"
              defaultChecked={article?.published ?? false}
              className="relative w-12 h-6 bg-gray-600 rounded-full cursor-pointer appearance-none checked:bg-fuchsia-500 transition-colors duration-300"
            />
          </div>
          <div className="flex space-x-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isNew ? 'Create & Shine' : 'Save & Conquer'}
            </Button>
          </div>
        </form>
        {!isNew && (
          <form action={deleteAction} className="mt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Delete Article
            </Button>
          </form>
        )}
        {!isNew && typeof window !== 'undefined' && (
          <p className="mt-4 text-green-500">
            Saved! <a href={`/blog/${slug}`} className="text-blue-500 hover:underline">View masterpiece 🎉</a>
          </p>
        )}
      </div>
    </>
  );
}