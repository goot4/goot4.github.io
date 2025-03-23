---
title: 使用Nextjs, MDX搭建博客
date: 2024-04-20 00:00:00 +0800
---
本网站使用Nextjs框架搭建, 文章内容格式为markdown, 通过MDX工具转化为HTML格式呈现, 风格使用Tailwind框架.
本文主要记录博客网页的路由和博文从MDX格式到HTML格式的转化步骤.

## 技术介绍

- **Nextjs**: 全栈框架, 提供网页路由, Html组件化(React)
- **Tailwind**: 一种CSS框架, 将CSS Style与HTML标签绑定, 特点是灵活, 可以针对每个HTML进行风格化, 无需考虑CSS冲突
- **MDX**: markdown的超集, 可以在markdown格式中加入Html元素并进行渲染
- **gray-matter**: 用于读取Frontmatter(markdown文件头部的元信息)
- **next-mdx-remote**: 动态加载MDX文件

## 网页路由

从博文列表到某一篇博文需要使用[动态路由](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes).
链接使用nextjs的Link组件提前渲染以避免重复刷新界面.

这是从博文列表中的链接跳转到某篇博文的方法, href为博文组件的目录:
```typescript
import Link from "next/link";
// ... other code
  <Link as={`/blog/posts/${post.slug}`} href='/blog/posts/[slug]'>
```

## 博文读取

使用Nodejs的fs进行文件读取, 使用gray-matter读取文件中的头部元信息.
```typescript
import { Post } from '@/app/interfaces/post';
import fs from "fs";
import matter from 'gray-matter';

// ... other code
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const {data,content} = matter(fileContent);
  const post: Post = { ...data, slug: realSlug, content: string};
```

## 博文呈现

使用next-mdx-remote将markdown字符串转化为React组件.
```typescript
// 博文呈现组件 /blog/posts/[slug]/page.tsx
import {MDXRemote} from 'next-mdx-remote/rsc';
import { Post } from "@/app/interfaces/post";
export default function Page({params}: {params: {slug: string}}) {
  const post:Post = getPostBySlug(params.slug);
  // other code
    <MDXRemote source={post.content}
      components={overrideComponents}></MDXRemote>
}
```

## 博文style设置

在上一步中的component中提供自定制风格.
```typescript
// 博文呈现组件 /blog/posts/[slug]/page.tsx
const overrideComponents = {
  h1: ({children}) => <h1 className="<your styles>">{children}</h1>,
  // other components
}
```


参考资料: [next-blog-starter](https://next-blog-starter.vercel.app/posts/hello-world),
[Nextjs Configuring: MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx).