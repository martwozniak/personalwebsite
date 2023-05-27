import React from 'react'

export default function ProjectsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Projects made with ❤<br className="hidden sm:inline" />
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Some projects are not completed. Some was abandoned. Some I can`t show you because of NDA etc
      </p>
    </div>

  </section>
  )
}