import React from 'react';
import Logo from '../logo/logo';
import styles from './nav.module.css';

const Nav = () => {
  const links = [
    {link: "/contact", label: "Contact"}, 
    {link: "/services", label: "Services"},
    {link: "/projects", label: "Projects"}, 
  ];


  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.links}>
        {
          links.map(({link, label}) => {
            return (
              <a className={styles.link} href={link}>{label}</a>
            );
          })
        }
      </div>
    </nav>
  );
};

export default Nav;