import PostContents from './post-contents';
import Header from '../header';
import Footer from '../footer';
import { PostData } from '@/cms/types/post-data';
import { useEffect } from 'react';

interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  useEffect(() => {
    document.title = postData.title;
  }, []);

  return (
    <div>
      <Header />
      <PostContents postData={postData} />
      <Footer />
    </div>
  )
}

export default Post;