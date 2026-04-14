import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post não encontrado' }
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-ag-white pt-[144px] pb-[120px] px-6 md:px-12">
      <article className="max-w-[720px] mx-auto">
        <RevealWrapper>
          <div className="flex gap-3 items-center justify-center mb-8">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ag-gray-600 bg-ag-gray-100 px-3 py-1">
              {post.tags[0]}
            </span>
            <span className="font-mono text-[11px] tracking-[0.05em] text-ag-gray-500">
              {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
            </span>
          </div>
          
          <h1 className="font-display font-black text-[clamp(40px,5vw,64px)] leading-[1.05] text-center text-ag-black mb-10">
            {post.title}
          </h1>
          
          <div className="text-center mb-12 flex items-center justify-center gap-3">
             <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-ag-gray-600">Por {post.author}</span>
          </div>
        </RevealWrapper>
        
        {post.coverImage && (
          <RevealWrapper delay={100} className="w-full aspect-[21/9] relative mb-16 overflow-hidden bg-ag-gray-100">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </RevealWrapper>
        )}
        
        <RevealWrapper delay={200}>
          <div 
            className="prose prose-lg max-w-none font-sans text-[17px] leading-[1.85] text-ag-gray-700 
                       prose-headings:font-display prose-headings:font-black prose-headings:text-ag-black
                       prose-h2:text-[32px] prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-[24px] prose-h3:mt-8 prose-h3:mb-4
                       prose-p:mb-6 prose-a:text-ag-black prose-a:underline prose-a:underline-offset-4
                       prose-blockquote:border-l-4 prose-blockquote:border-ag-gray-300 prose-blockquote:pl-6 prose-blockquote:italic
                       prose-li:mb-2 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6"
            dangerouslySetInnerHTML={{ __html: post.body }} 
          />
        </RevealWrapper>
      </article>
    </main>
  )
}
