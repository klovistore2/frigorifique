'use server';
import prisma from '@/lib/prisma';
import slugify from 'slugify';
import { revalidatePath } from 'next/cache';
import * as fs from 'fs/promises';
import * as path from 'path';
import { redirect } from 'next/navigation';

export async function updateArticle(formData: FormData): Promise<void> {
  const id = parseInt(formData.get('id') as string);
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const metaDesc = formData.get('metaDesc') as string;
  const category = formData.get('category') as string;
  const subcategory = formData.get('subcategory') as string;
  const tags = formData.get('tags') as string;
  const altText = formData.get('altText') as string;
  const published = formData.get('published') === 'on';

  if (!title || title.trim() === '') {
    throw new Error('Title is required');
  }

  const slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[:]/g,
  });
  const metadata = JSON.stringify({ description: metaDesc });

  let imageUrl = formData.get('imageUrl') as string;
  const file = formData.get('image') as File;
  if (file && file.name !== 'undefined') {
    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), Buffer.from(buffer));
    imageUrl = `/uploads/${filename}`;
  }

  await prisma.article.update({
    where: { id },
    data: {
      title,
      slug,
      content,
      metadata,
      category,
      subcategory,
      tags,
      image_url: imageUrl,
      alt_text: altText,
      published,
    },
  });

  revalidatePath('/editeur');
}

export async function createArticle(formData: FormData): Promise<void> {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const metaDesc = formData.get('metaDesc') as string;
  const category = formData.get('category') as string;
  const subcategory = formData.get('subcategory') as string;
  const tags = formData.get('tags') as string;
  const altText = formData.get('altText') as string;
  const published = formData.get('published') === 'on';

  if (!title || title.trim() === '') {
    throw new Error('Title is required');
  }

  const slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[:]/g,
  });
  const metadata = JSON.stringify({ description: metaDesc });

  let imageUrl = '';
  const file = formData.get('image') as File;
  if (file && file.name !== 'undefined') {
    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), Buffer.from(buffer));
    imageUrl = `/uploads/${filename}`;
  }

  await prisma.article.create({
    data: {
      title,
      slug,
      content,
      metadata,
      category,
      subcategory: subcategory || null,
      tags: tags || 'Tag1',
      image_url: imageUrl || null,
      alt_text: altText || null,
      published,
    },
  });

  revalidatePath('/editeur');
}

export async function deleteArticle(id: number): Promise<void> {
  await prisma.article.delete({
    where: { id },
  });
  revalidatePath('/editeur');
  redirect('/editeur');
}