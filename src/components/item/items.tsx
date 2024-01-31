import Item, { ItemProps } from "./item";
import styles from './item.module.css';

interface ItemsProps {
  itemProps: ItemProps[]
}

const Items: React.FC<ItemsProps> = ({ itemProps }) => {
  return (
    <div className={styles.div}>
      {itemProps.map((itemProp, index, array) => {
        const Separator = () => {
          switch (itemProp.type) {
            case 'h3': return <span className="separator h3">/</span>;
            case 'h5': return <span className="separator h5">{"•"}</span>;
            default: return <span className="separator">/</span>;
          }
        };

        return (
          <div key={index} className={styles.div} >
            <Item {...itemProp} />
            {index < array.length - 1 && <Separator />}
          </div>
        )
      })}
    </div>
  );
}

export default Items;