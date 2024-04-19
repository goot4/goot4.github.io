import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-6 text-3xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-3 text-2xl">{children}</h2>,
    a: ({ children, href }) => <a href={href} className="text-blue-500">{children}</a>,
    p: ({ children}) => <p className="text-base mb-2">{children}</p>,
    ul: ({ children}) => <ul className="mb-2">{children}</ul>,
    li: ({ children}) => <li className="text-lg ml-4 list-disc">{children}</li>,
    ...components,
  };
}
