import PostContents from './content';
import { PostData } from '@/cms/types/post-data';
import SEO from '@/components/helper/seo';

interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <>
      <SEO
        title={postData.title}
        description={postData.description}
      />

      <PostContents postData={postData} />
    </>
  )
}

export default Post;