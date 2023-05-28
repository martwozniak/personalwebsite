import React from 'react'
import {allBooks} from "contentlayer/generated"
import {notFound} from 'next/navigation'
import { Mdx } from '@/components/mdx'
type Props = {
    params: {
        slug: string
    }
}

async function getBookFromParams(slug: string){
    const book = allBooks.find((bk) => bk.slugAsParams === slug)
    console.log("book:", book)
    if(!book)
    {
        notFound();
    }

    return book;
}

export default async function SingleBook({params}: Props) {
  const book = await getBookFromParams(params.slug);


  return (
          <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <img src={book.featuredImage} alt={book.title}/>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {book.title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        <Mdx 
        code={book.body.code}
        />
        </p>
      </div>
      </section>

  )
}