import type { V2_MetaFunction, LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { Post } from "../../functions/api/post/index";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Remix loader function that call api(/{domain}/post) and return Post[] type data
export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const res = await fetch(`${url.origin}/api/post`);
  const posts: Post[] = await res.json();
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <li>{post.content}</li>
          <li>{post.author}</li>
          <Link to={`/post/${post.id}`}>View Post</Link>
        </div>
      ))}
    </div>
  );
}
