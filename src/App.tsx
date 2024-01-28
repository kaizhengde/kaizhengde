import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '@/app/home/home.tsx';
import LinearAlgebra from '@/app/linear-algebra/linear-algebra.tsx';
import Post from './app/post/post.tsx';
import { useEffect, useState } from 'react';
import postsData from './cms/data/posts-data.ts';
import { PostData } from './cms/types/post-data.ts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linear-algebra" element={<LinearAlgebra />} />
        <Route path="/post/:id" element={<PostRoute />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

const PostRoute = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    setPostData(postsData.find(postData => postData.id === id) || null);
  }, [id]);

  return (
    <>
      {postData && <Post postData={postData} />}
    </>
  );
};