import styles from './content.module.css';

interface ContentProps {
  title: string | React.ReactNode;
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
      {typeof title === 'string' ? <h5>{title}</h5> : title}
      {children}
      <div>
        {footnote && <p className="footnote">{`* ${footnote}`}</p>}
      </div>
    </div>
  );
}

export default Content;