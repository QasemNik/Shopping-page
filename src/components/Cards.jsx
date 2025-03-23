/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { shortenText } from '../helpers/helper'
import Styles from './Card.module.css'
import useCart from '../hooks/useCarts'

export default function card({ data }) {
    const { id, title, image, price } = data
    const [state, dispatch] = useCart()

    const clickHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: data })

    }
    return (
        <div className={Styles.card}>
            <img src={image} alt={title} style={{ width: "150px" }} />
            <h3>{shortenText(title)}</h3>
            <p>{price}</p>
            <div className='action'>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <button type="button" onClick={clickHandler}>
                    <TbShoppingBagCheck />
                </button>
            </div>
        </div>
    )
}
