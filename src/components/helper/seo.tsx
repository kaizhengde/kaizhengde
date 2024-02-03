import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  meta?: { name: string; content: string }[];
}

const SEO: React.FC<SEOProps> = ({ title, description, meta = [] }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      ...meta,
    ]}
  />
);

export default SEO;