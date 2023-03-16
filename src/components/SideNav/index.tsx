import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'; 
import classnames from 'classnames';

interface Props {
  isOpen: boolean;
}

const SideNav:React.FC<Props> = ({isOpen}) => {
    return (
        <div className={classnames(styles.sideNav, {
          [styles.isOpen]: isOpen
        })}>
            {[...Array(7)].map((e, i) => <div key={i} className={styles.link}>Menu {i + 1}</div>)}
        </div>
    )
}

export default SideNav;
