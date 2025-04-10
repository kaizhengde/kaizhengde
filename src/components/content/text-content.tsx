import Content from './content';

type TextContentProps = {
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
      <p>{text}</p>
    </Content>
  );
}

export default TextContent;