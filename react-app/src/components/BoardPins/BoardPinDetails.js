import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoard, getBoardsByUser } from "../../store/board";
import { createBoardPin, getAllBoardsForPin } from "../../store/boards_pins";
import { getAllPinsOnFeed } from "../../store/pin";
import { getASinglePin } from "../../store/pin";
import kitchen from '../../images/kitchen.jpg'

import "./BoardPins.css"

const BoardPinSelectionDetails = ({ id, board, onClose }) => { //id = pin.id
    console.log("BOARDDDDDDDDDD", board)

    const dispatch = useDispatch()
    const boards = useSelector(state => state.board)
    const sessionUser = useSelector(state => state.session.user)
    console.log("BOARD PIN DETAILS", boards)

    const [errors, setErrors] = useState([])




    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser.id))
        // dispatch(getAllBoardsForPin(board.id))
        dispatch(getASinglePin(id))

    }, [dispatch, sessionUser, id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await dispatch(createBoardPin(board.id, id))
        await dispatch(getAllPinsOnFeed())
        if(data?.errors) {
            setErrors(data.errors)
        } else {
            await dispatch(getAllPinsOnFeed())
            onClose()
        }

    }


    return (
        <>
            <div className="boards-on-pin-details">
                <div className="boards-on-pin-left-details">
                    <div className="boards-on-pin-img-div">
                        {!board.pins[0]?.photo_url ?
                            <img className="boards-on-pin-img" src={kitchen} /> :
                            <img className="boards-on-pin-img" src={board.pins[0]?.photo_url} />
                        }
                    </div>
                    <div className="boards-on-pin-title">
                        {board.title}
                    </div>

                </div>
                <div className="boards-on-pin-save-btn-container">
                    <div className="boards-on-pin-save-btn-div">
                        <button className="boards-on-pin-save-btn" onClick={handleSubmit}>Save</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoardPinSelectionDetails;
