import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getASingleBoard } from "../../store/board";

import "./SingleBoard.css"



const SingleBoard = () => {
    const dispatch = useDispatch();

    const pinsByBoard = useSelector(state => state.board)
    // const sessionUser = useSelector((state) => state.session.user);
    const { boardId } = useParams()
    // console.log(boardId)

    // let board = boards.boards.filter((e) => console.log(e))
    console.log("SINGLE BOARD PINS", pinsByBoard)
    // let pin = Object.values(pinsByBoard)
    // console.log(pin)

    useEffect(() => {

        dispatch(getASingleBoard(boardId))

    }, [dispatch, boardId])

    return (
        <>
            <div className="pin-container">
                {pinsByBoard.pins?.map(pin => (
                    <div key={pin.id} className="pin-card">
                        <div className="pin-image-container">
                            <img className="pin-image" src={pin.photo_url} />
                        </div>
                        <div className="pin-title">{pin.title}</div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default SingleBoard;
