import React, { useEffect } from "react"; //useState,
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBoardsByUser } from "../../../store/board";
import SingleBoard from "../../Board/SingleBoard";
import '../UserProfile.css'

function GetUserBoards() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    console.log("SESSION USER", sessionUser)
    // const boards = useSelector(state => state.board)
    // console.log(boards)
    // const boardsList = Object.values(boards)
    // console.log("BOARDLIST", boardsList)
    console.log("BOARD", sessionUser.boards[0].pins[0].photo_url)

    const {id} = useParams()

    useEffect(() => {
        const payload = {
            id: sessionUser?.id
        }
        dispatch(getBoardsByUser(id));
    }, [dispatch, sessionUser])

    if(!sessionUser) return <Redirect to="/login" />;
    // if(!boards) return null;

    return (
        <>
            <div className="board-container">
                {sessionUser.boards?.map(board => (
                    <div className="board-card">
                        <div className="board-img"><img src={board.pins[0].photo_url} /></div>
                        <div className="board-title">{board.title}</div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default GetUserBoards;
