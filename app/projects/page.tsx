import { allProjects } from '@/.contentlayer/generated';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

async function getAllProjects(){
    const projects = allProjects;
    return projects;
}

export default async function ProjectsPage() {

  const projects = await getAllProjects();

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
        projects.map((project) => (
            <Link href={`/project/${project.slugAsParams}`}>
                <div className='flex flex-col break-words'>
                    <Image src={project.featuredImage} alt={project.title} width={400} height={100} />
                    <span className='font-bold'>{project.title}</span>
                    <span className='text-slate-700 text-xs break-words'>{project.description}</span>
                </div>  
            </Link>
        ))
       }
      </div>
    </div>

  </section>
  )
}