import {MDXRemote} from 'next-mdx-remote/rsc';
import {getPostBySlug} from "@/app/lib/postsApi";
import { Post } from "@/app/interfaces/post";

const overrideComponent = {
  h1: ({ children }) => <h1 className="mb-6 text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="my-4 text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="my-3 text-xl">{children}</h3>,
  a: ({ children, href }) => <a href={href} className="text-blue-500">{children}</a>,
  p: ({ children}) => <p className="text-base mb-2">{children}</p>,
  ul: ({ children}) => <ul className="mb-2">{children}</ul>,
  li: ({ children}) => <li className="text-lg ml-4 list-disc">{children}</li>,
}

export default function Page({params}: {params: {slug: string}}) {
  const post:Post = getPostBySlug(params.slug);
  return (
    <div className="flex flex-col items-center">
      <main className="w-full p-8 md:w-1/2">
        <article className="mt-8">
          <h1 className="text-3xl my-2">{post.title}</h1>
          <p className="text-sm mb-8">{post.date}</p>
          <MDXRemote source={post.content} components={overrideComponent}></MDXRemote>
        </article>
      </main>
    </div>
  )
}