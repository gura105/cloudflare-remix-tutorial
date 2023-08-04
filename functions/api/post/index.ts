import type { Post } from "../../../model/index";

// Function that return list of posts
export const onRequest: PagesFunction = async () => {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts));
};

// Data of the List of Post type
export const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    content: "This is my first post",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is my second post",
    author: "John Doe",
  },
  {
    id: "3",
    title: "Third Post",
    content: "This is my third post",
    author: "John Doe",
  },
];

// Function that return list of posts
const getPosts = async (): Promise<Post[]> => {
  return posts;
};
