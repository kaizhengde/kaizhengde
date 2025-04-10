import PostContents from './content';
import Header from '../header';
import Footer from '../footer';
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

      <div>
        <Header title={postData.title} />
        <PostContents postData={postData} />
        <Footer />
      </div>
    </>
  )
}

export default Post;