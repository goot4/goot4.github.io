import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-6 text-3xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-3 text-2xl">{children}</h2>,
    ...components,
  };
}
