import { allPosts } from '@/.contentlayer/generated'
import React from 'react'
import {notFound} from 'next/navigation'
import { Mdx } from '@/components/mdx'

type Props = {
    params: {
        slug: string
    }
}

async function getPostFromParams(slug: string){
    const post = allPosts.find((blogPost) => blogPost.slugAsParams === slug)

    if(!post)
    {
        notFound();
    }

    return post;
}

export default async function PostPage({params}: Props) {
  const post = await getPostFromParams(params.slug);

  
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
   
    <img src={post.featuredImage} alt={post.title}/>
   {/**max-w-[980px] */}
    <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {post.title}
        </h1>   {/**max-w-[700px] */}
        <p className="text-lg text-muted-foreground sm:text-xl">
            <Mdx 
            code={post.body.code}
            />
        </p>
    </div>
</section>

)
}