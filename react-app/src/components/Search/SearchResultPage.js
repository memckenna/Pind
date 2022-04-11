import React, { useEffect, useState } from 'react' //useEffect,
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardsBySearch } from '../../store/search'
import "./Search.css"


const SearchResultPage = () => {
    const dispatch = useDispatch()

    const queryParams = new URLSearchParams(window.location.search).get("q")
    // const title = queryParams.get("title")

    const searchBoards = useSelector(state => state.search)
    const boards = Object.values(searchBoards)

    useEffect(() => {
        dispatch(getBoardsBySearch(queryParams))
    }, [dispatch, queryParams])

    return (
        <div>
            <div>
                <div>Search Results</div>
                <div>{queryParams}</div>
                <div>
                    {boards.length ? (
                        <>
                            {boards.length > 0 && boards.map(board => (
                                <div>
                                    <div>{board.title}</div>
                                </div>
                            ))}
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
