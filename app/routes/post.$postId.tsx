import { json, type LoaderArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "../../functions/api/post/index";

// function that returns remix route params
export const loader = async ({ request, params }: LoaderArgs) => {
  const postId = params.postId;
  // get post from web api(path is {domain}/api/[postId])
  const url = new URL(request.url);
  const res = await fetch(`${url.origin}/api/post/${postId}`);
  const post: Post = await res.json();
  return json({ post });
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Post Detail</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
          <div>{post.author}</div>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}
