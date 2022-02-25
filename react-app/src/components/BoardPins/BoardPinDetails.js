import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoard, getBoardsByUser } from "../../store/board";
import { createBoardPin, getAllBoardsForPin, removePin } from "../../store/boards_pins";
import { getAllPinsOnFeed } from "../../store/pin";
import { getASinglePin } from "../../store/pin";
import kitchen from '../../images/kitchen.jpg'

import "./BoardPins.css"

const BoardPinSelectionDetails = ({ id, board, onClose }) => { //id = pin.id
    console.log("BOARDDDDDDDDDD", board)

    const dispatch = useDispatch()
    // const { boardId } = useParams()
    // const boards = useSelector(state => state.board)
    const sessionUser = useSelector(state => state.session.user)
    // console.log("BOARD PIN DETAILS", boards)

    const pinSavedOnBoard = board.pins.map(pin => pin.id)

    const [errors, setErrors] = useState([])
    const [isSaved, setIsSaved] = useState(false)
    const [unSave, setUnSave] = useState(false)

    useEffect(() => {
        // dispatch(getBoardsByUser(sessionUser.id))
        dispatch(getAllPinsOnFeed())
        dispatch(getAllBoardsForPin(board.id))
        dispatch(getASinglePin(id))
        return () => {
            return
        }
    }, [dispatch, sessionUser, board])

    useEffect(() => {
        setIsSaved(pinSavedOnBoard.includes(id))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await dispatch(createBoardPin(board.id, id))
        dispatch(getAllPinsOnFeed())
        dispatch(getAllBoardsForPin(board.id))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // await dispatch(getAllBoardsForPin(boardId))

            setIsSaved(true)
            onClose()
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        const data = await dispatch(removePin(board.id, id))
        // await dispatch(getAllBoardsForPin(boardId))
        await dispatch(getAllPinsOnFeed())


        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // await dispatch(getAllBoardsForPin(boardId))
            onClose()
            setIsSaved(false)
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
                        {isSaved ?
                            <button className="boards-on-pin-delete-btn" onClick={handleDelete}>Unsave</button> :
                            <button className="boards-on-pin-save-btn" onClick={handleSubmit}>Save</button>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoardPinSelectionDetails;
