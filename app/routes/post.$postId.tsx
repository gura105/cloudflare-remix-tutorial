import { json, type LoaderArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "../../model/index";

export interface Env {
  DB: D1Database;
}

// Remix loader function that call api(/{domain}/post) and return Post[] type data
export const loader = async ({ context, params }: LoaderArgs) => {
  const env = context.env as Env;
  const { postId } = params;
  const { results } = await env.DB.prepare(
    `SELECT * FROM Post WHERE ID == ${postId}`
  ).all<Post>();
  const posts = results ?? [];
  return json({ post: posts[0] });
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Post Detail</h1>
      {post && (
        <div>
          <h2>{post.Title}</h2>
          <div>{post.Content}</div>
          <div>{post.Author}</div>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}
