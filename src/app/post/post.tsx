import PostContents from './post-contents';
import Header from '../header';
import Footer from '../footer';
import { PostData } from '@/cms/types/post-data';

interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <div>
      <Header />
      <PostContents postData={postData} />
      <Footer />
    </div>
  )
}

export default Post;