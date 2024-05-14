import {MDXRemote} from 'next-mdx-remote/rsc';
import {getPostBySlug} from "@/app/lib/postsApi";
import { Post } from "@/app/interfaces/post";

const overrideComponents = {
  h1: ({ children }) => <h1 className="mb-6 text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="my-4 text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="my-3 text-xl">{children}</h3>,
  a: ({ children, href }) => <a href={href} className="text-blue-500" target="_blank">{children}</a>,
  p: ({ children}) => <p className="text-base mb-2">{children}</p>,
  strong : ({children}) => <strong className="font-bold">{children}</strong>,
  ul: ({ children}) => <ul className="mb-2 list-disc">{children}</ul>,
  ol: ({ children}) => <ol className="mb-2 list-decimal">{children}</ol>,
  li: ({ children}) => <li className="text-lg ml-4">{children}</li>,
  pre: ({ children }) => <pre className="px-4 py-2 rounded-lg w-full text-gray-300 bg-gray-900 overflow-auto ">{children}</pre>,
  code: ({ children }) => <code className={"text-gray-300 bg-gray-900 mx-1 px-1 rounded"}>{children}</code>,
  blockquote: ({ children}) => <blockquote className={"italic"}>{children}</blockquote>,
}

export default function Page({params}: {params: {slug: string}}) {
  const post:Post = getPostBySlug(params.slug);
  return (
    <div className="flex flex-col items-center">
      <main className="w-full p-8 md:w-1/2">
        <article className="mt-8">
          <h1 className="text-3xl my-2">{post.title}</h1>
          <p className="text-sm mb-8">{post.date}</p>
          <MDXRemote source={post.content} components={overrideComponents}></MDXRemote>
        </article>
      </main>
    </div>
  )
}