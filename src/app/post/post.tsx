import PostContents from './content';
import { PostData } from '@/cms/types/post-data';

interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <PostContents postData={postData} />
  )
}

export default Post;