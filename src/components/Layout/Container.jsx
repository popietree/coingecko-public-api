import React from 'react';
import styles from './Container.module.css';

function Container(props) {
  const { className, children } = props;
  const classes = `${styles.container} + ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Container;
