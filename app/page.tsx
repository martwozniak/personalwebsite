import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { allBooks, allProjects, allPosts, allVideos } from '@/.contentlayer/generated';
import Image from 'next/image';
// TODO: refactor callback getAll(callback)
async function getAllProjects(){
  const projects = allProjects;
  return projects;
}


async function getAllBooks(){
  const book = allBooks;
  return book;
}

async function getAllPosts(){
  const posts = allPosts;
  return posts;
}

async function getAllVideos(){
  const videos = allVideos;
  return videos;
}

export default async function IndexPage() {
  const projects = await getAllProjects();
  const books = await getAllBooks();
  const posts = await getAllPosts();
  const videos = await getAllVideos();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      
      <div className="flex max-w-[980px] flex-col-reverse sm:flex-row items-start gap-2">

        <div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Software Engineer & Computer Science student from Poland<br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl mt-2">
          Programming for +6 years. Interested in SaaS. Look at my projects and books recommendations. Contact via mail or linkedin
        </p>
        <div className="flex gap-4 mt-4">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Contact me
        </Link>

        <Link

          rel="noreferrer"
          href={'/projects'}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Projects
        </Link>
      </div>
        </div>
        <div>
        <img src="/avatar.jpg" alt="Marcin Wozniak" className="max-w-xs"/>

        </div>

      </div>
      <div>

      {/**
       * Projects
       */}
       <h2 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl mt-4 mb-4">Projects</h2>

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


      {/**
       * Blog
       */}
       <h2 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl mt-4 mb-4">Blog</h2>
        <div className='grid xs:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 justify-between gap-4'>
          {
          posts.map((post) => (
              <Link href={`/blog/${post.slugAsParams}`}>
                  <div className='flex flex-col break-words'>
                      <Image src={post.featuredImage} alt={post.title} width={400} height={100} />
                      <span className='font-bold'>{post.title}</span>
                      <span className='text-slate-700 text-xs break-words'>{post.description}</span>
                  </div>  
              </Link>
          ))
          }
          </div>

   {/**
       * Videos
       */}
       <h2 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl mt-4 mb-4">Books</h2>
        <div className='grid xs:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 justify-between gap-4'>
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
      {/**
       * Books
       */}
       <h2 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-xl md:text-3xl lg:text-4xl mt-4 mb-4">Books</h2>
        <div className='grid xs:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 justify-between gap-4'>
          {
          books.map((book) => (
              <Link href={`/book/${book.slugAsParams}`}>
                  <div className='flex flex-col break-words'>
                      <Image src={book.featuredImage} alt={book.title} width={400} height={100} />
                      <span className='font-bold'>{book.title}</span>
                      <span className='text-slate-700 text-xs break-words'>{book.description}</span>
                  </div>  
              </Link>
          ))
          }
          </div>
        
      </div>


    </section>
  )
}
