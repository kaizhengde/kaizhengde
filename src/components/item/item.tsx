import styles from './item.module.css';

export interface ItemProps {
  type?: 'p' | 'h5';
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Item: React.FC<ItemProps> = ({
  type = 'p',
  label,
  href,
  onClick,
}) => {
  const arrow = (href || onClick) ? styles.arrowItem : "";

  const Label = ({ children }: { children: React.ReactNode }) => {
    switch (type) {
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
      >
        <Label>{label}</Label>
      </a>
    );
  } else {
    return <Label>{label}</Label>;
  }
}


export default Item;