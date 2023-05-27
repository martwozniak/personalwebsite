import React from 'react'


export default function BooksPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        My 📚 recommendations<br className="hidden sm:inline" />
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        In my spare time I love to read paper books. When I am working out I like to play audiobooks. Here are my recommendations
      </p>
    </div>

  </section>
  )
}