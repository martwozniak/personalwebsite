import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  }
  
  export const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: `docs/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
    },
    computedFields,
  }))

  export const Book = defineDocumentType(() => ({
    name: "Book",
    filePathPattern: `books/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
      featuredImage: {
        type: "string",
        required: true,
      },
      slug: {
        type: "string",
        required: true,
      },
    },
    computedFields,
  }))
  
  
  export const Project = defineDocumentType(() => ({
    name: "Project",
    filePathPattern: `projects/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
      featuredImage: {
        type: "string",
        required: true,
      },
    },
    computedFields,
  }))

  export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `blog/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
      featuredImage: {
        type: "string",
        required: true,
      },
    },
    computedFields,
  }))

  export const Video = defineDocumentType(() => ({
    name: "Video",
    filePathPattern: `videos/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
      featuredImage: {
        type: "string",
        required: true,
      },
      link: {
        type: "string",
        required: true,
      }
    },
    computedFields,
  }))
  
  
  export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Book, Project, Post, Video],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            onVisitLine(node) {
              // Prevent lines from collapsing in `display: grid` mode, and allow empty
              // lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            },
            onVisitHighlightedLine(node) {
              node.properties.className.push("line--highlighted")
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ["word--highlighted"]
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
  })