import { use } from "react";
import { type Post as PostModel } from "../models/post";
import { Post } from "./Post";
import { Stack } from "@mui/material";

interface Props {
  postListPromise: Promise<PostModel[]>;
}

export const PostList = ({ postListPromise }: Props) => {
  const res = use(postListPromise);
  return (
    <Stack flex={1} direction="row" gap="1rem">
      {res.map((post) => (
        <Post key={post.id} {...post}></Post>
      ))}
    </Stack>
  );
};
