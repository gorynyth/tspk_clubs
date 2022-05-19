import React from 'react';
import styles from './_description.module.scss';

const Description = ({children}) => {
    return (
        <p className={styles.title}>{children}</p>
    );
};

export default Description;
