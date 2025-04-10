import { notFound } from 'next/navigation';
import Post from '../post';
import postsData from '@/cms/data/posts-data';
import type { PostData } from '@/cms/types/post-data';
import { Metadata } from 'next';

interface PostPageProps {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: PostPageProps): Metadata => {
  const post = findPostBySlug(params.slug);
  return {
    title: post?.title,
    description: post?.description
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = findPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return <Post postData={post} />;
}

function findPostBySlug(slug: string): PostData | undefined {
  for (const key in postsData) {
    const post = postsData[key].find((post: PostData) => post.slug === slug);
    if (post) return post;
  }
  return undefined;
}
