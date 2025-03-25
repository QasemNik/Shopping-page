import React from 'react';
import { useTitle } from '../hooks/useTitles';
import useCart from '../hooks/useCarts';
import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
import styles from './CheckoutPage.module.css';
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  useTitle("Checkout");
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return <div className={styles.emptyMessage}>Your Cart Is empty !
      <Link to="/products" className={styles.backButton}>
        <span className={styles.arrowLeft}>
          <FaArrowAltCircleLeft />
        </span>
      </Link>
    </div>;
  }

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.sidebar}>
        <BasketSidebar state={state} clickHandler={clickHandler} />
      </div>
      <div className={styles.basketContent}>
        {state.selectedItems.map(product => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}
