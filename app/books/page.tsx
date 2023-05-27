import React from 'react'
import {allBooks} from "contentlayer/generated"
import Link from 'next/link';

async function getAllBooks(){
    const book = allBooks;
    console.log("book:", book)

    return book;
}

export default async  function BooksPage() {

 const books = await getAllBooks();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        My 📚 recommendations<br className="hidden sm:inline" />
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        In my spare time I love to read paper books. When I am working out I like to play audiobooks. Here are my recommendations
      </p>

      <div className='grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-4'>

       {
        books.map((book) => (
            <Link href={`/book/${book.slugAsParams}`}>
                <div className='flex flex-col'>
                    <img src={book.featuredImage} alt={book.title}/>
                    <span className='font-bold'>{book.title}</span>
                    <span className='text-slate-700'>{book.description}</span>
                </div>  
            </Link>
        ))
       }
      </div>
    </div>

  </section>
  )
}