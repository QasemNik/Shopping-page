import React from 'react';
import { PulseLoader } from "react-spinners";
import { useTitle } from '../hooks/useTitles';
import { Link, useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetail';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdPricetag } from 'react-icons/io';
import styles from './DetailsPage.module.css';
import Loader from '../components/Loader';

export default function DetailsPage() {
  useTitle("DetailsPage");
  const { id } = useParams();
  const productDetails = useProductDetails(+id);

  if (!productDetails) return <div ><Loader /></div>;

  return (
    <div className={styles.detailsContainer}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.detailsInfo}>
        <h3>{productDetails.title}</h3>
        <p>{productDetails.description}</p>
        <p className={styles.category}>{productDetails.category}</p>
        <div className={styles.detailsActions}>
          <span className={styles.priceTag}>
            <IoMdPricetag />
            {productDetails.price}$
          </span>
          <Link to="/products" className={styles.backButton}>
            <FaArrowLeft />
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
