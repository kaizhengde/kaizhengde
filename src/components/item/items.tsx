import Item, { ItemProps } from "./item";
import styles from './item.module.css';

interface ItemsProps {
  itemProps: ItemProps[]
}

const Items: React.FC<ItemsProps> = ({ itemProps }) => {
  return (
    <div className={styles.div}>
      {itemProps.map((itemProp, index, array) => (
        <div key={index}>
          <Item {...itemProp} />
          {index < array.length - 1 && <span className="separator">/</span>}
        </div>
      ))}
    </div>
  );
}

export default Items;