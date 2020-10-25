import React from 'react'
import styles from '../Button/Button.module.css';
import '../../App.css';

export const Button = () => {
    return (
        <div>
            <div className={styles.container}>
                <button className={styles.red}>Home</button>
                <button className={styles.red}>Tasks</button>
                <button className={styles.red}>Profile</button>
            </div>
        </div>
    )
}
