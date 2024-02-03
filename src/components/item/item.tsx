import styles from './item.module.css';

export interface ItemProps {
  type?: 'p' | 'h5' | 'h3';
  label: string;
  grey?: boolean;
  back?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Item: React.FC<ItemProps> = ({
  type = 'p',
  label,
  grey = false,
  back = false,
  href,
  onClick,
}) => {
  const arrow = (href || onClick) ? (back ? styles.arrowBefore : styles.arrowAfter) : "";
  const labelColor = grey ? 'var(--kai-darkgrey)' : 'var(--kai-black)';

  const Label = ({ children }: { children: React.ReactNode }) => {
    switch (type) {
      case 'h3': return <h3 className={arrow} style={{ marginTop: '0px', marginBottom: '0px', color: labelColor }}>{children}</h3>;
      case 'h5': return <h5 className={arrow}>{children}</h5>;
      default: return <p className={arrow}>{children}</p>;
    }
  };

  if (href || onClick) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={styles.a}
      >
        <Label>{label}</Label>
      </a>
    );
  } else {
    return <Label>{label}</Label>;
  }
}


export default Item;