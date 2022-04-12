import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { getBoardsBySearch } from "../../store/search";

import './Search.css'


const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")

    useEffect(() => {
        if(query) {
            dispatch(getBoardsBySearch(query))
        }

    }, [dispatch, query])


    return (
        <div>
            <form action="/search" method="get">
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchBar;
