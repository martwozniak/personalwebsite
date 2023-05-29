import { allVideos } from '@/.contentlayer/generated';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

async function getAllVideos(){
    const videos = allVideos;
    return videos;
}

export default async function VideosPage() {

  const videos = await getAllVideos();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Projects made with ❤<br className="hidden sm:inline" />
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Some projects are not completed. Some was abandoned. Some I can`t show you because of NDA etc
      </p>
       <div className='grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-4'>

       {
        videos.map((video) => (
            <Link href={`/video/${video.slugAsParams}`}>
                <div className='flex flex-col break-words'>
                    <Image src={video.featuredImage} alt={video.title} width={400} height={100} />
                    <span className='font-bold'>{video.title}</span>
                    <span className='text-slate-700 text-xs break-words'>{video.description}</span>
                </div>  
            </Link>
        ))
       }
      </div>
    </div>

  </section>
  )
}