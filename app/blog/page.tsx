import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/PostCard'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export const revalidate = false
export const metadata = { title: 'Blog' }

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <main className="min-h-screen bg-ag-white pt-[144px] pb-[120px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper className="mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ag-gray-500 mb-6 flex items-center gap-3 before:content-[''] before:inline-block before:w-[24px] before:h-[1px] before:bg-ag-gray-300">
            Últimos artigos
          </div>
          <h1 className="font-display font-black text-[clamp(40px,5vw,72px)] leading-none text-ag-black">
            Insights da<br/>nossa agência.
          </h1>
        </RevealWrapper>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <RevealWrapper key={post.slug} delay={index * 100}>
                <PostCard post={post} />
              </RevealWrapper>
            ))}
          </div>
        ) : (
          <p className="text-ag-gray-500 font-light mt-10">Nenhum artigo publicado ainda.</p>
        )}
      </div>
    </main>
  )
}
