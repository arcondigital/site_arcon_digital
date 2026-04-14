import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types'

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group cursor-pointer block border border-ag-gray-200 hover:border-ag-gray-300 transition-colors h-full bg-white relative overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-ag-gray-100">
        {post.coverImage && (
           <Image 
             src={post.coverImage} 
             alt={post.title}
             fill
             className="object-cover transition-transform duration-[600ms] ease-ag group-hover:scale-105"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           />
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex gap-3 items-center mb-4">
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ag-gray-500 bg-ag-gray-100 px-2 py-1">
            {post.tags[0]}
          </span>
          <span className="font-mono text-[10px] tracking-[0.05em] text-ag-gray-500">
            {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
          </span>
        </div>
        
        <h3 className="font-display font-black text-[22px] leading-[1.1] text-ag-black mb-3 group-hover:text-ag-gray-700 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-[14px] text-ag-gray-500 font-light leading-[1.6] line-clamp-3 mb-6">
          {post.excerpt}
        </p>
        
        <div className="mt-auto font-mono text-[11px] tracking-[0.05em] uppercase text-ag-black font-semibold flex items-center gap-2 group-hover:opacity-50 transition-opacity">
          Ler artigo
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5H9M5 1L9 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
        </div>
      </div>
    </Link>
  )
}
