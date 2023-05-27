import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Software Engineer & Computer Science student from Poland<br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Programming for +6 years. Interested in SaaS. Look at my projects and books recommendations. Contact via mail or linkedin
        </p>
      </div>
      <div className="flex gap-4">
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
    </section>
  )
}
