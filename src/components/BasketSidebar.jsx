import React from 'react';
import { BsPatchExclamationFill } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import styles from './‌‌BasketSidebar.module.css';

function BasketSidebar({ state, clickHandler }) {
    return (
        <div className={styles.basketSidebar}>
            <div className={styles.basketItem}>
                <IoBagCheckOutline />
                <p>Total</p>
                <span>{state.total}$</span>
            </div>
            <div className={styles.basketItem}>
                <FaHashtag />
                <p>Quantity</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div className={styles.basketItem}>
                <BsPatchExclamationFill />
                <p>Status</p>
                <span>{state.checkout ? 'Completed' : 'Pending ...'}</span>
            </div>
            <button onClick={() => clickHandler("checkout")} className={styles.checkoutButton}>
                Checkout
            </button>
        </div>
    );
}

export default BasketSidebar;
