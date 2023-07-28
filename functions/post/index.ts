// Function that return list of posts
export const onRequest: PagesFunction = async () => {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts));
};

// Definition of the Post type
export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

// Data of the List of Post type
const posts: Post[] = [
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
