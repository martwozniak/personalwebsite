import { allVideos } from '@/.contentlayer/generated'
import React from 'react'
import {notFound} from 'next/navigation'
import { Mdx } from '@/components/mdx'

type Props = {
    params: {
        slug: string
    }
}

async function getVideoFromParams(slug: string){
    const video = allVideos.find((vid) => vid.slugAsParams === slug)

    if(!video)
    {
        notFound();
    }

    return video;
}

export default async function VideoPage({params}: Props) {
  const video = await getVideoFromParams(params.slug);
  // TODO: Video Player
  
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
   
    <img src={video.featuredImage} alt={video.title}/>
   
    <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {video.title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            <Mdx 
            code={video.body.code}
            />
        </p>
    </div>
</section>

)
}