// types/article.ts
export interface Article {
    id: number;
    title: string;
    slug: string;
    content: string;
    metadata: string;
    category: string;
    subcategory?: string | null;
    tags: string;
    published: boolean;
    image_url?: string | null;
    alt_text?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }