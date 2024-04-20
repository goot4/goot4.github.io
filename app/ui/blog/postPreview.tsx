import Link from "next/link";

export default function PostPreview({ post }) {
  return (
    <div className="border-2 border-dashed rounded-lg p-2">
      <Link as={`/blog/posts/${post.slug}`} href='/blog/posts/[slug]'>
        <h2 className="text-xl mb-2">{post.title}</h2>
        <p className="text-base mb-1">{post.excerpt}</p>
        <p className="text-sm">{post.date}</p>
      </Link>
    </div>
  );
}