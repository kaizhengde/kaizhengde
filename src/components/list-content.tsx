import Content from './content.tsx';
import styles from './content.module.css';

interface ListContentProps {
  title: string;
  listItems: React.ReactNode[];
  footnote?: string;
}

const ListContent: React.FC<ListContentProps> = ({
  title,
  listItems,
  footnote,
}) => {
  return (
    <Content title={title} footnote={footnote}>
      <ul className={styles.ul}>
        {listItems.map((item, index) => (
          <li className={styles.li} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Content>
  );
}

export default ListContent;