import Sidebar from '@/components/blog/Sidebar';
import RelatedArticles from '@/components/blog/RelatedArticles';

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug?: string }>;
};

export default async function BlogLayout({ children, params }: Props) {
  const { slug } = await params;

  return (
    
    <div className="container mx-auto p-4 text-white">
    
      <div className="container mx-auto p-4 text-white grid grid-cols-1 md:grid-cols-[2.5fr_0.7fr] gap-8">
        
        <div>
            {children}
        </div>
      
          <Sidebar slug={slug} />
           <div className="mt-5">
          <RelatedArticles slug={slug} />
      </div> 
      </div>
      

    
    </div>
  );
}
