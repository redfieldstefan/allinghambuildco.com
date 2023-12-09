import React from 'react';
import styles from './logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <p className={styles.text}>Allingham <br/>Build Co.</p>
      <p className={styles.subText}>Central Oregon</p>
    </div>
  );
};

export default Logo;