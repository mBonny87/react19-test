import { Suspense } from "react";
import { PostList } from "./components/PostList.tsx";
import { fetchPosts } from "./api/fetch-posts.ts";

import "./App.css";

function App() {
  const res = fetchPosts();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <PostList postListPromise={res}></PostList>
    </Suspense>
  );
}

export default App;
