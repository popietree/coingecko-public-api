import React from 'react';
import styles from './Card.module.css';

function Card(props) {
  const { className, children } = props;
  const classes = `${styles.card} + ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Card;
