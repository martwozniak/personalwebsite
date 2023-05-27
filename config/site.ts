export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Marcin Woźniak",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    linkedin: 'https://www.linkedin.com/in/mwozz/'
  },
}
