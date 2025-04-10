import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  meta?: { name: string; content: string }[];
}

const SEO: React.FC<SEOProps> = ({ title, description, meta = [] }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {meta.map((entry, index) => (
      <meta key={index} name={entry.name} content={entry.content} />
    ))}
  </Head>
);

export default SEO;
