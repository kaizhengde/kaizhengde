import Item, { ItemProps } from "./item";
import styles from './item.module.css';

interface ItemsProps {
  itemProps: ItemProps[]
}

const Items: React.FC<ItemsProps> = ({ itemProps }) => {
  return (
    <div className={styles.div}>
      {itemProps.map((itemProp, index, array) => {
        const separator = itemProp.type === "h5" ? "\u00B7" : "/";
        return (
          <div key={index} className={styles.div} >
            <Item {...itemProp} />
            {index < array.length - 1 && <span className="separator">{separator}</span>}
          </div>
        )
      })}
    </div>
  );
}

export default Items;