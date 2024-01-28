import Content from './content.tsx';
import styles from './content.module.css';

interface TextContentProps {
  title: string;
  text: string;
  footnote?: string;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  text,
  footnote,
}) => {
  return (
    <Content title={title} footnote={footnote}>
      <p className={styles.p}>{text}</p>
    </Content>
  );
}

export default TextContent;