import React from 'react'
import { ImSearch } from 'react-icons/im'
import { createQueryObj } from '../helpers/helper'
import './SearchBox.css'
export default function SearchBox({search,setSearch,setQuery}) {
    function searchHandler() {
        setQuery((query) => createQueryObj(query, { search }))
    }

    return (
        <div className='search-box'>
            <div className='search-container'>
                <input className='search-input' type="text" value={search || ""} onChange={e => setSearch(e.target.value.toLowerCase().trim())} placeholder='Search...' />
                <button className='search-button' type="button" onClick={searchHandler}>
                    <ImSearch />
                </button>
            </div>
        </div>
    )
}
