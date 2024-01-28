import Content from './content.tsx';

interface ListContentProps {
  title: string;
  listItems: string[];
}

const ListContent: React.FC<ListContentProps> = ({
  title,
  listItems,
}) => {
  return (
    <Content title={title}>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Content>
  );
}

export default ListContent;