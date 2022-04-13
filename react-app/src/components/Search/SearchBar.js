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

    const search = useSelector(state => state.search)
    console.log(search)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = await dispatch(getBoardsBySearch(query))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            setQuery("")
            history.push("/search/boards")
        }
    }


    return (
        <div>
            {/* <form action="/search/boards" method="get"> */}
            <form className="search-bar-form" onSubmit={handleSubmit}>
                <button className="search-bar-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-bar-input"
                />

            </form>
        </div>
    )
}

export default SearchBar;
