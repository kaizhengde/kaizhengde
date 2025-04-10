import { notFound } from 'next/navigation';
import Post from '../post';
import postsData from '@/cms/data/posts-data';
import type { PostData } from '@/cms/types/post-data';

interface PostPageProps {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  let foundPostData: PostData | null = null;

  for (const key in postsData) {
    foundPostData = postsData[key].find((post: PostData) => post.slug === slug) || null;
    if (foundPostData) break;
  }

  if (!foundPostData) {
    notFound();
  }

  return (
    <Post postData={foundPostData} />
  )
}