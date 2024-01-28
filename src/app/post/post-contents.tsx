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

      </div>
    </section>
  )
}

export default PostContents;