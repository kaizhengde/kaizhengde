import styles from './content.module.css';

interface ContentProps {
  title: string;
  children: React.ReactNode;
  footnote?: string;
}

const Content: React.FC<ContentProps> = ({
  title,
  children,
  footnote,
}) => {
  return (
    <div className={styles.div}>
      <h4>{title}</h4>
      {children}
      <div>
        {footnote && <p className="footnote">{`* ${footnote}`}</p>}
      </div>
    </div>
  );
}

export default Content;