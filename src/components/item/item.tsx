export interface ItemProps {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Item: React.FC<ItemProps> = ({
  label,
  href,
  onClick,
}) => {
  if (onClick) {
    return <a href="" onClick={onClick}>{label}</a>;
  } else if (href) {
    return <a href={href} target="_blank">{label}</a>;
  } else {
    return <p>{label}</p>;
  }
}


export default Item;