import { notFound } from 'next/navigation';
import postsData from '@/cms/data/posts-data';
import type { PostData } from '@/cms/types/post-data';
import { Metadata } from 'next';
import Items from '@/components/item/items';
import { ItemProps } from '@/components/item/item';
import Content from '@/components/content/content';
import ReadingSection from '@/components/section/reading-section';

interface PostProps {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: PostProps): Metadata => {
  const postData = findPostDataBySlug(params.slug);
  return {
    title: postData?.title,
    description: postData?.description
  };
};

export default function Post({ params }: PostProps) {
  const postData = findPostDataBySlug(params.slug);
  if (!postData) { notFound() }

  const equivalentPosts = postsData[postData.id];
  const informationHeaderItemProps: ItemProps[] = [
    { type: "h5", label: postData.date },
    { type: "h5", label: postData.location.label },
    { type: "h5", label: postData.language.label },
    ...equivalentPosts
      .filter(p => p.language !== postData.language)
      .map(p => ({ type: "h5" as "h5", label: p.language.label, to: `/post/${p.slug}` })),
  ]

  return (
    <ReadingSection>
      <Content title={<Items itemProps={informationHeaderItemProps} />}>
        <h2>{postData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Content>
    </ReadingSection >
  );
}

function findPostDataBySlug(slug: string): PostData | undefined {
  for (const key in postsData) {
    const postData = postsData[key].find((post: PostData) => post.slug === slug);
    if (postData) return postData;
  }
  return undefined;
}
