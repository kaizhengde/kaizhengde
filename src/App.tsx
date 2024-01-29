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
        <Route path="/post/:slug" element={<PostRoute />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

const PostRoute = () => {
  const { slug } = useParams();
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    let foundPostData = null;
    for (const key in postsData) {
      if (postsData.hasOwnProperty(key)) {
        foundPostData = postsData[key].find(post => post.slug === slug);
        if (foundPostData) break;
      }
    }
    setPostData(foundPostData || null);
  }, [slug]);

  return (
    <>
      {postData && <Post postData={postData} />}
    </>
  );
};