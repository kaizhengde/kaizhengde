import { Link } from 'react-router-dom';
import styles from './item.module.css';

export interface ItemProps {
  type?: 'p' | 'h5' | 'h3';
  label: string;
  grey?: boolean;
  to?: string;
  external?: boolean;
  back?: boolean;
}

const Item: React.FC<ItemProps> = ({
  type = 'p',
  label,
  grey = false,
  back = false,
  to,
  external = false,
}) => {
  const arrow = to ? (back ? styles.arrowBefore : styles.arrowAfter) : "";
  const labelColor = grey ? 'var(--kai-darkgrey)' : 'var(--kai-black)';

  const Label = ({ children }: { children: React.ReactNode }) => {
    switch (type) {
      case 'h3': return <h3 className={arrow} style={{ marginTop: '0px', marginBottom: '0px', color: labelColor }}>{children}</h3>;
      case 'h5': return <h5 className={arrow} style={{ marginTop: '0px', marginBottom: '0px' }}>{children}</h5>;
      default: return <p className={arrow} style={{ marginTop: '0px', marginBottom: '0px' }}>{children}</p>;
    }
  };

  if (to && !external) {
    return (
      <Link to={to} className={styles.a}>
        <Label>{label}</Label>
      </Link>
    );
  }

  if (to && external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.a}
      >
        <Label>{label}</Label>
      </a>
    );
  }

  return <Label>{label}</Label>;
}

export default Item;