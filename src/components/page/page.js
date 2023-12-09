import React from 'react';
import Nav from '../nav/nav';
import styles from './page.module.css'
import '../../app/globals.css'

const Page = ({children}) => {
  return (
    <div className={styles.body}>
      <Nav />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Page;
