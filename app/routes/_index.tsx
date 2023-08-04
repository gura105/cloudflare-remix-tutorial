import type { V2_MetaFunction, LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "../../model/index";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export interface Env {
  DB: D1Database;
}

// Remix loader function that call api(/{domain}/post) and return Post[] type data
export const loader = async ({ context }: LoaderArgs) => {
  const env = context.env as Env;
  const { results } = await env.DB.prepare("SELECT * FROM Post").all<Post>();
  const posts = results ?? [];
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.ID}>
            <h2>{post.Title}</h2>
            <div>{post.Content}</div>
            <div>{post.Author}</div>
            <Link to={`/post/${post.ID}`}>View Post</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
