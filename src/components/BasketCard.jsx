import React from 'react';
import { shortenText } from '../helpers/helper';
import { MdDeleteOutline } from 'react-icons/md';
import styles from './BasketCard.module.css';

function BasketCard({ data, clickHandler }) {
  const { title, image, quantity } = data;
  
  return (
    <div className={styles.basketCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <p className={styles.productTitle}>{shortenText(title)}</p>

      <div className={styles.actions}>
        {quantity === 1 ? (
          <button className={styles.deleteButton} onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        ) : (
          <button className={styles.actionButton} onClick={() => clickHandler("DECREASE", data)}>−</button>
        )}

        <span className={styles.quantity}>{quantity}</span>

        <button className={styles.actionButton} onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
