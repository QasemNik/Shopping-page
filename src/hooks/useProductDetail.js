import { useContext } from "react"
import ProductContext from "../contexts/ProductsContext";

const  useProductDetails = (id) => {
    const products = useContext(ProductContext);
    const result = products.find((product) => product.id === id);
    return result;
}
export default useProductDetails