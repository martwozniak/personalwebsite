import { allProjects } from '@/.contentlayer/generated'
import React from 'react'
import {notFound} from 'next/navigation'
import { Mdx } from '@/components/mdx'

type Props = {
    params: {
        slug: string
    }
}

async function getProjectFromParams(slug: string){
    const project = allProjects.find((proj) => proj.slugAsParams === slug)

    if(!project)
    {
        notFound();
    }

    return project;
}

export default async function ProjectPage({params}: Props) {
  const project = await getProjectFromParams(params.slug);

  
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
   
    <img src={project.featuredImage} alt={project.title}/>
   
    <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {project.title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            <Mdx 
            code={project.body.code}
            />
        </p>
    </div>
</section>

)
}