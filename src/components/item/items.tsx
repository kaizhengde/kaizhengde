import Item, { ItemProps } from "./item";
import styles from './item.module.css';

type ItemsProps = {
  itemProps: ItemProps[]
}

const Items: React.FC<ItemsProps> = ({ itemProps }) => {
  return (
    <div className={styles.itemsContainer}>
      {itemProps.map((itemProp, index) => {
        const Separator = () => {
          switch (itemProp.type) {
            case 'h3': return <span className="separator h3">/</span>;
            case 'h5': return <span className="separator h5">{"•"}</span>;
            default: return <span className="separator">/</span>;
          }
        };

        return (
          <div key={index} className={styles.itemWithSeparator}>
            {index > 0 && <Separator />}
            <Item {...itemProp} />
          </div>
        )
      })}
    </div>
  );
}

export default Items;