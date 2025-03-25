import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import useCart from "../hooks/useCarts";

import Styles from "./layouts.module.css";

function Layout({ children }) {
    const [state] = useCart();

    return (
        <>
            <div className={Styles.header}>
                <header>
                    <Link to="/products">GEM.</Link>
                    <Link to="/checkout" className={Styles.cart}>
                        <div>
                            <PiShoppingCartSimpleBold />
                            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                        </div>
                    </Link>
                </header>
            </div>

            <main className={Styles.main}>{children}</main>

          
        </>
    );
}

export default Layout;
