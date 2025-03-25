/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { MdDeleteOutline } from "react-icons/md";

import { Link } from 'react-router-dom'
import { productQuantity, shortenText } from '../helpers/helper'
import Styles from './Card.module.css'
import useCart from '../hooks/useCarts'

export default function card({ data }) {
    const { id, title, image, price } = data
    const [state, dispatch] = useCart()
    const quantity = productQuantity(state, id)
    const clickHandler = (type) => {
        console.log(state);
        dispatch({ type, payload: data })

    }
    return (
        <div className={Styles.card}>
            <img src={image} alt={title}  />
            <h3>{shortenText(title)}</h3>
            <p>{price}</p>
            <div className={Styles.action}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                {
                    quantity === 1 && (
                        <button className={Styles.removeBtn} type="button" onClick={() => clickHandler("REMOVE_ITEM")}>
                            <MdDeleteOutline />
                        </button>
                    )
                }
                {quantity > 1 && (
                    <button className={Styles.decreaseBtn} onClick={() => clickHandler("DECREASE")}>-</button>
                )
                }

                {!!quantity && <span>{quantity}</span> }               
                {
                    quantity === 0 ? (
                        <button className={Styles.addBtn} type="button" onClick={() => clickHandler("ADD_ITEM")}>
                            <TbShoppingBagCheck />
                        </button>
                    ) : (
                        <button className={Styles.increaseBtn} onClick={() => clickHandler("INCREASE")}>+</button>
                    )
                }


            </div>
        </div>
    )
}
