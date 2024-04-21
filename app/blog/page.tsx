import {getAllPosts} from "@/app/lib/postsApi";
import { Post } from "@/app/interfaces/post";
import PostPreview from "@/app/ui/blog/postPreview";

export default function Page() {
  const allPosts = getAllPosts();
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mt-8 space-y-4 px-4 md:w-1/2">
        {allPosts.map((post: Post) => {
          return <PostPreview key={post.slug} post={post}/>
        })}
      </div>
    </div>
  );
}