import React, { useEffect, useState } from 'react' //useEffect,
import { Redirect, useHistory, useLocation, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardsBySearch } from '../../store/search'
import kitchen from "../../images/kitchen.jpg"
import "./Search.css"


const SearchResultPage = () => {
    const dispatch = useDispatch()

    const searchBoards = useSelector(state => state.search)
    console.log(searchBoards)
    const searchObj = Object.values(searchBoards)
    console.log(searchObj[0])

    // const { search } = window.location;
    // const query = new URLSearchParams(search).get("q")

    useEffect(() => {
        // dispatch(getBoardsBySearch(query))
    }, [dispatch])

    return (
        <div className='search-results-container'>
            <div className='search-results'>
                <div className='search-results-text'>Search Results</div>
                <div className='each-search-result'>
                    {searchObj[0]?.length ? (
                        <>
                            {searchObj[0]?.map(board => (
                                <div key={board?.id} className='each-board'>
                                    <NavLink to={`/boards/${board?.id}`}>
                                        {!board.pins[0]?.photo_url ?
                                            <img className='search-img' src={kitchen} /> :
                                            <img className='search-img' src={board?.pins[0]?.photo_url} />
                                        }
                                    </NavLink>
                                    <div  className='search-board-title'>{board?.title}</div>
                                </div>

                            ))}
                            {/* {boards.length > 0 && boards.map(board => (
                                <div key={board?.id}>
                                    <div>{board.title}</div>
                                </div>
                            ))} */}
                        </>
                    ) : (
                        <div>
                            We couldn't find boards that match your search.
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default SearchResultPage;
