import styles from './content.module.css';

interface ContentProps {
  title: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.div}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Content;