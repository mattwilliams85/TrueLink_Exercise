import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css'; 

interface Props {
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}

const TopBar:React.FC<Props> = ({toggleSideNav, isSideNavOpen}) => {
  return <div className={styles.topBar}>
    <div className={styles.hamburger} onClick={toggleSideNav}>
      {[...Array(3)].map(e => 
        <span className={classnames(styles.line, {
          [styles.open]: isSideNavOpen
        })} />
      )}
    </div>
    movie search
  </div>
}

export default TopBar;
