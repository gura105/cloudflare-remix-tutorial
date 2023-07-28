import type { Post } from "./index";
import { posts } from "./index";

// Function that return post detail by id
export const onRequest: PagesFunction = async (context) => {
  const post = await getPost(context.params.postId as string);
  return new Response(JSON.stringify(post));
};

// Function that returns Post type by id
const getPost = async (id: string): Promise<Post> => {
  // get post from list of posts
  const post = posts.find((post) => post.id === id);
  return post;
};
