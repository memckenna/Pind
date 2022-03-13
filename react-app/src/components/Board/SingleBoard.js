import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { getASingleBoard } from "../../store/board";
import { getAllBoardPins } from "../../store/boards_pins";
import { getASinglePin } from "../../store/pin";
import GetAllBoardsOnPinModal from "../BoardPins";

import "./SingleBoard.css"

const SingleBoard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const pinsByBoard = useSelector(state => state.board)
    const pins = useSelector(state => state.pinReducer)
    const boardPins = useSelector(state => state.boardPin)

    //CHECK BOARD PINS REDUCER
    const sessionUser = useSelector((state) => state.session.user);

    const { boardId } = useParams()

    useEffect(() => {
        dispatch(getASingleBoard(boardId))
        dispatch(getAllBoardPins(boardId))

    }, [dispatch, boardId])

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <div>
                <div className="board-title-header">{pinsByBoard.title}</div>
                <div>

                </div>
            </div>
            <div onClick={goBack} className="single-board-profile-img-div">
                Go Back To All Boards
                {/* <img onClick={goBack} className="single-board-profile-img" src={sessionUser?.profile_img_url} /> */}
            </div>
            <div className="pin-container">
                {pinsByBoard.pins?.map(pin => (
                    <div key={pin.id} className="pin-card">

                        <div className="pin-image-container">
                            <GetAllBoardsOnPinModal id={pin.id} />
                            <NavLink to={`/pins/${pin.id}`}>
                                <img className="pin-image" src={pin.photo_url} />
                            </NavLink>
                        </div>
                        <div className="single-board-title">{pin.title}</div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default SingleBoard;
