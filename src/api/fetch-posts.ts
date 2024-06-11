import { type Post } from "./../models/post";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/posts");
  return res.json();
}
