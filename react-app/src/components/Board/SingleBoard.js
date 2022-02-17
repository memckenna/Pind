import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


import { getBoardsByUser } from "../../store/board";


const SingleBoard = (id) => {
    const dispatch = useDispatch();

    const boards = useSelector(state => state.board.boards)
    const sessionUser = useSelector((state) => state.session.user);

    let board = boards.filter((e) => e.id === id.id)


    useEffect(() => {
        dispatch(getBoardsByUser())


    }, [dispatch])

    return (
        <div>
            {/* <img src={board[0]?.users?.pins.photo_url} /> */}
        </div>
    )

}
