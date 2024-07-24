import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '@/app/home/home.tsx';
import LinearAlgebra from '@/app/paths/linear-algebra/linear-algebra.tsx';
import Post from './app/post/post.tsx';
import { useEffect, useState } from 'react';
import postsData from './cms/data/posts-data.ts';
import { PostData } from './cms/types/post-data.ts';
import UnsplashMap from './app/paths/unsplash-map/unsplash-map.tsx';
import OneStep from './app/paths/one-step/one-step.tsx';
import Thesis from './app/paths/thesis/thesis.tsx';
import ScrollToTop from './components/helper/scroll-to-top.tsx';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostRoute />} />

        <Route path="/unsplash-map" element={<UnsplashMap />} />
        <Route path="/1-step" element={<OneStep />} />
        <Route path="/linear-algebra" element={<LinearAlgebra />} />
        <Route path="/thesis" element={<Thesis />} />
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
      foundPostData = postsData[key].find(post => post.slug === slug);
      if (foundPostData) break;
    }
    setPostData(foundPostData || null);
  }, [slug]);

  return (
    <>
      {postData && <Post postData={postData} />}
    </>
  );
};
