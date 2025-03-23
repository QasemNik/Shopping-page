import React from 'react'
import { createQueryObj } from '../helpers/helper'
import { FaListUl } from 'react-icons/fa'
import './sidebar.css'
import categories from '../constants/list'
export default function Sidebar({ setQuery, query }) {


    const currentCategory = query.category || 'all'


    function categoryHandler(e) {
        const { tagName } = e.target
        const category = e.target.innerText.toLowerCase()

        if (tagName !== 'LI') return

        setQuery((query) => createQueryObj(query, { category }))
    }
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <FaListUl />
                    <p>Category</p>
                </div>
                <ul onClick={categoryHandler}>
                    {categories.map(i =>
                    (<li className=
                        {
                            currentCategory === i.type ? "selected" : null
                        }
                        key={i.id}>
                        {i.type}
                    </li>))}
                </ul>
            </div>
        </>
    )
}
