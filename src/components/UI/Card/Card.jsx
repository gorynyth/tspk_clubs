import React from 'react';
import styles from './_card.module.scss'
import Title from "../Title/Title";
import Description from "../Description/Description";

const Card = ({title, desc}) => {
    return (
        <div className={styles.card}>
            <Title title={title}/>
            <Description>
                {desc}
            </Description>
        </div>
    );
};

export default Card;
