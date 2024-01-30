import { PostData } from '@/cms/types/post-data';
import { useNavigate } from 'react-router-dom';
import style from './post.module.css';
import Items from '@/components/item/items';
import postsData from '@/cms/data/posts-data';
import { ItemProps } from '@/components/item/item';
import Content from '@/components/content/content';
import TextSection from '@/components/section/text-section';


interface PostContentsProps {
  postData: PostData;
}

const PostContents: React.FC<PostContentsProps> = ({ postData }) => {
  const navigate = useNavigate();

  const equivalentPosts = postsData[postData.id];

  const informationHeaderItemProps: ItemProps[] = [
    { type: "h5", label: postData.date },
    { type: "h5", label: postData.location.label },
    ...equivalentPosts.map(p => ({ type: "h5" as "h5", label: p.language.label, onClick: () => navigate(`/post/${p.slug}`) })),
  ]

  return (
    <TextSection>
      <Content
        title={<Items itemProps={informationHeaderItemProps} />}
      >
        <h2>{postData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Content>
    </TextSection >
  )
}

export default PostContents;