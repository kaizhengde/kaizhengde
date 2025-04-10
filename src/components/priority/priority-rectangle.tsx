import React from 'react';
import styles from './priority-rectangle.module.css';

export type PriorityRectangleProps = {
  color: 'green' | 'black' | 'red';
}

const PriorityRectangle: React.FC<PriorityRectangleProps> = ({ color }) => {
  return (
    <div className={`${styles.rectangle} ${styles[color]}`}></div>
  );
};

export default PriorityRectangle;