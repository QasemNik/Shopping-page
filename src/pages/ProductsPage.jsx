import { useEffect, useState } from 'react';
import Card from '../components/Cards';
import Loader from '../components/Loader';
import useProducts from '../hooks/useProducts'
import styles from './ProductsPage.module.css'
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/searchBox';
import Sidebar from '../components/Sidebar';
import { filterProducts, getInitQuery, searchProducts } from '../helpers/helper';


export default function ProductsPage() {

  const { products } = useProducts()
  const [displayed, setDisplayed] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products)
    setSearch(query.search || "")
    setQuery(getInitQuery(searchParams))
  }, [products, query.search, searchParams])

  useEffect(() => {
    setSearchParams(query)

    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)

    setDisplayed(finalProducts)

  }, [query, products, setSearchParams]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map(p => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <Sidebar setQuery={setQuery} query={query} />

      </div>
    </>
  )
}


