import { PostData } from '@/cms/types/post-data';
import { useNavigate } from 'react-router-dom';
import Items from '@/components/item/items';
import postsData from '@/cms/data/posts-data';
import { ItemProps } from '@/components/item/item';
import Content from '@/components/content/content';
import ReadingSection from '@/components/section/reading-section';


interface PostContentsProps {
  postData: PostData;
}

const PostContents: React.FC<PostContentsProps> = ({ postData }) => {
  const navigate = useNavigate();

  const equivalentPosts = postsData[postData.id];

  const informationHeaderItemProps: ItemProps[] = [
    { type: "h5", label: postData.date },
    { type: "h5", label: postData.location.label },
    { type: "h5", label: postData.language.label },
    ...equivalentPosts
      .filter(p => p.language !== postData.language)
      .map(p => ({ type: "h5" as "h5", label: p.language.label, onClick: () => navigate(`/post/${p.slug}`) })),
  ]

  return (
    <ReadingSection>
      <Content
        title={<Items itemProps={informationHeaderItemProps} />}
      >
        <h2>{postData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Content>
    </ReadingSection >
  )
}

export default PostContents;