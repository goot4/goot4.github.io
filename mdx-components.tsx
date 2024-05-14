import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-6 text-3xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-4 text-2xl">{children}</h2>,
    h3: ({ children }) => <h3 className="my-3 text-xl">{children}</h3>,
    a: ({ children, href }) => <a href={href} className="text-blue-500">{children}</a>,
    p: ({ children}) => <p className="text-base mb-2">{children}</p>,
    strong : ({children}) => <strong className="font-bold">{children}</strong>,
    ul: ({ children}) => <ul className="mb-2 list-disc">{children}</ul>,
    ol: ({ children}) => <ol className="mb-2 list-decimal">{children}</ol>,
    li: ({ children}) => <li className="text-lg ml-4">{children}</li>,
    pre: ({ children }) => <pre className="px-4 py-2 rounded-lg w-full text-gray-300 bg-gray-900 overflow-auto ">{children}</pre>,
    code: ({ children }) => <code className={"text-gray-300 bg-gray-900 mx-1 px-1 rounded"}>{children}</code>,
    blockquote: ({ children}) => <blockquote className={"italic"}>{children}</blockquote>,
    ...components,
  };
}
