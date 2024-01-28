import { PostData } from '@/cms/types/post-data';
import { useNavigate } from 'react-router-dom';

interface PostContentsProps {
  postData: PostData;
}

const PostContents: React.FC<PostContentsProps> = ({ postData }) => {
  const navigate = useNavigate();

  return (
    <section className="content">
      <div className="layer-text">
        <h2>{postData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </section>
  )
}

export default PostContents;