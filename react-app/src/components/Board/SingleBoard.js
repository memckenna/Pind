import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getASingleBoard } from "../../store/board";
// import EditSingleBoardPageModal from "./EditABoard/EditSingleBoardPageModal";

import "./SingleBoard.css"

const SingleBoard = () => {
    const dispatch = useDispatch();
    const pinsByBoard = useSelector(state => state.board)
    console.log("Pins By Board", pinsByBoard)
    const sessionUser = useSelector((state) => state.session.user);
    const { boardId } = useParams()

    useEffect(() => {
        dispatch(getASingleBoard(boardId))
    }, [dispatch, boardId])

    return (
        <>
            <div>
                <div className="board-title-header">{pinsByBoard.title}</div>
                <div>

                </div>
            </div>
            <div className="single-board-profile-img-div">
                <img className="single-board-profile-img" src={sessionUser.profile_img_url} />
            </div>
            <div className="pin-container">
                {pinsByBoard.pins?.map(pin => (
                    <div key={pin.id} className="pin-card">

                        <div className="pin-image-container">
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
