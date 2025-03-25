import { useEffect, useState } from 'react';
import Card from '../components/Cards';
import Loader from '../components/Loader';
import useProducts from '../hooks/useProducts';
import styles from './ProductsPage.module.css';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchsBox';
import Sidebar from '../components/Sidebar';
import { filterProducts, getInitQuery, searchProducts } from '../helpers/helper';

export default function ProductsPage() {
  const { products } = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitQuery(searchParams));
  }, [searchParams]);

  useEffect(() => {
    setSearch(query.search || '');

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setSearchParams(query);
    setDisplayed(finalProducts);

  }, [query, products, setSearchParams]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((pro) => (
            <Card key={pro.id} data={pro} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}
