import React from "react";
import styles from './Button.module.css';

const Button = ({ children }) => {
    return (
        <button className={styles.feedbackButton}>
            {children}
        </button>
    )
}

export default Button;