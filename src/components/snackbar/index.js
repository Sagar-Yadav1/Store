import React from 'react';
import styles from './style.module.css';

const SnackBar = () => {
    return (
        <div className={styles.snackbar}>
            <p>Your order has been placed successfully.</p>
        </div>
    )
}

export default SnackBar;