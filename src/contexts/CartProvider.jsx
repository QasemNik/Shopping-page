// src/context/CartContext.js
import React, { useEffect, useReducer } from 'react';
import { sumProducts } from '../helpers/helper';
import CartContext from './CartContext';
import useLocalStorage from '../hooks/UseLocalStorage';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout: false,
            };

        case 'REMOVE_ITEM': {
            const filteredItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...filteredItems],
                ...sumProducts(filteredItems),
            };
        }

        case 'INCREASE': {
            const increaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[increaseIndex].quantity++;
            return {
                ...state,
                ...sumProducts(state.selectedItems),
            };
        }

        case 'DECREASE': {
            const decreaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[decreaseIndex].quantity--;
            return {
                ...state,
                ...sumProducts(state.selectedItems),
            };
        }

        case 'CHECKOUT': {
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            };
        }

        default:
            return state;
    }
};


const CartProvider = ({ children }) => {
    const [store, setStore] = useLocalStorage('cart', initialState);

    const [state, dispatch] = useReducer(reducer, store || initialState);

    useEffect(() => {
        setStore(state)
    }, [state, setStore])
    
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;