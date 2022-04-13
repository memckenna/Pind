import React, { useEffect, useState } from 'react' //useEffect,
import { Redirect, useHistory, useLocation, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardsBySearch } from '../../store/search'
import kitchen from "../../images/kitchen.jpg"
import "./Search.css"


const SearchResultPage = () => {
    const dispatch = useDispatch()

    const searchBoards = useSelector(state => state.search)
    const boards = useSelector(state => state.board)
    console.log(searchBoards)
    const search = Object.values(searchBoards)
    console.log(search[0])


    // useEffect(() => {
    //     dispatch(getBoardsBySearch(queryParams))
    // }, [dispatch, queryParams])

    return (
        <div className='search-results-container'>
            <div>
                <div>Search Results</div>
                {/* <div>{queryParams}</div> */}
                <div>
                    {search[0]?.length ? (
                        <>
                            {search[0]?.map(board => (
                                <div>
                                    <NavLink to={`/boards/${board?.id}`}>
                                        {!board.pins[0]?.photo_url ?
                                            <img  src={kitchen} /> :
                                            <img  src={board?.pins[0]?.photo_url} />
                                        }

                                    </NavLink>
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
