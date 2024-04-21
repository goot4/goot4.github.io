import {Post } from '@/app/interfaces/post';
import fs from "fs";
import {join} from "path";
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'content/posts');

// Get file name array of the posts
export function getPostSlug(){
  return fs.readdirSync(postsDirectory);
}

// Slug is the name of the post
export function getPostBySlug(slug: string){
  const realSlug =  slug.replace(/\.mdx$/,"");
  const fullPath = join(postsDirectory,`${realSlug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const {data,content} = matter(fileContent);

  return { ...data, slug: realSlug, content} as Post;
}

export function getAllPosts(): Post[]{
  const slugs = getPostSlug();
  const posts = slugs.map((slug)=> getPostBySlug(slug))
    .sort((post1, post2) =>
      (post1.date > post2.date) ? -1 : 1);
  return posts;
}

