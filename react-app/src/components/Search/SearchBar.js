import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { getBoardsBySearch } from "../../store/search";

import './Search.css'


const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [query, setQuery] = useState("")
    const [errors, setErrors] = useState([])

    console.log(query)
    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = await dispatch(getBoardsBySearch(query))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            setQuery("")
            history.push("/search")
        }
    }


    return (
        <div>
            <form action="/search" method="get">
            {/* <form onSubmit={handleSubmit}> */}
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
