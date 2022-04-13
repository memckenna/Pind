import React, { useEffect, useState } from 'react' //useEffect,
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardsBySearch } from '../../store/search'
import "./Search.css"


const SearchResultPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const queryParams = new URLSearchParams(window.location.search).get("query")



    const searchBoards = useSelector(state => state.search)
    const boards = useSelector(state => state.board)
    console.log(searchBoards)


    useEffect(() => {
        dispatch(getBoardsBySearch(queryParams))
    }, [dispatch, queryParams])

    return (
        <div className='search-results-container'>
            <div>
                <div>Search Results</div>
                {/* <div>{queryParams}</div> */}
                <div >
                    {boards.length ? (
                        <>
                            {searchBoards.map(board => (
                                <div key={board?.id}>
                                    <div>{board.title}</div>
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
