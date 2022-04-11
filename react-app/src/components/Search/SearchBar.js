import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import './Search.css'


const SearchBar = () => {
    

    return (
        <div>
            <form action="/search" method="get">
                <input
                    type="text"
                    placeholder="Search"
                />
                <button type="submit">
                    Search
                </button>

            </form>
        </div>
    )
}

export default SearchBar;
