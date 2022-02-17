import React, { useEffect } from "react"; //useState,
import { Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getBoardsByUser } from "../../../store/board";

function GetUserBoards() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const boards = useSelector(state => state.board)
    const boardsList = Object.values(boards)
    console.log("BOARDLIST", boardsList)

    useEffect(() => {
        const payload = {
            id: sessionUser?.id
        }
        dispatch(getBoardsByUser(payload));
    }, [dispatch, sessionUser])

    if(!sessionUser) return <Redirect to="/login" />;
    if(!boards) return null;

    return (
        <>
            <div>
                {/* {boardsList?.map(board => (

                ))} */}
            </div>

        </>
    )
}

export default GetUserBoards;
