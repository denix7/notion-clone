import React from 'react';
import styles from './Button.module.css';
import '../../App.css';

const Button = () => {
  return (
    <div>
      <div className={styles.container}>
        <button type="button" className={styles.red}>
          Home
        </button>
        <button type="button" className={styles.red}>
          Tasks
        </button>
        <button type="button" className={styles.red}>
          Profile
        </button>
      </div>
    </div>
  );
};

export default Button;
