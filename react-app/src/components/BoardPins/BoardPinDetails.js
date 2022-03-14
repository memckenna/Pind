import React, { useEffect, useState } from "react";
// import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBoardsByUser } from "../../store/board";
import { createBoardPin, getAllBoardsForPin, removePin } from "../../store/boards_pins";
import { getAllPinsOnFeed } from "../../store/pin";
import { getASinglePin } from "../../store/pin";
import kitchen from '../../images/kitchen.jpg'
import { getASingleBoard } from "../../store/board";
import "./BoardPins.css"

const BoardPinSelectionDetails = ({ id, board, onClose }) => { //id = pin.id
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const pinSavedOnBoard = board.pins.map(pin => pin.id)

    const [errors, setErrors] = useState([])
    const [isSaved, setIsSaved] = useState(false)


    useEffect(() => {
        // dispatch(getBoardsByUser(sessionUser.id))
        // dispatch(getAllPinsOnFeed())
        dispatch(getAllBoardsForPin(board.id))
        dispatch(getASinglePin(id))
        return () => {
            return
        }
    }, [dispatch, sessionUser, board, id])

    useEffect(() => {
        setIsSaved(pinSavedOnBoard.includes(id))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await dispatch(createBoardPin(board.id, id))
        await dispatch(getAllPinsOnFeed())
        dispatch(getAllBoardsForPin(board.id))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // await dispatch(getAllBoardsForPin(boardId))
            setIsSaved(true)
            onClose()
        }
        alert(`Your pin has been saved to ${board.title}`)
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        const data = await dispatch(removePin(board.id, id))
        // await dispatch(getAllBoardsForPin(boardId))
        await dispatch(getAllPinsOnFeed())
        dispatch(getASingleBoard(board.id))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // await dispatch(getAllBoardsForPin(boardId))
            dispatch(getASingleBoard(board.id))

            onClose()
            setIsSaved(false)
        }
        alert(`Your pin has been removed from ${board.title}`)

    }


    return (
        <div className="boardpins-container">
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
            </div>
            <div className="boards-on-pin-save-btn-container">
                <div className="boards-on-pin-save-btn-div">
                    {isSaved ?
                        <button className="boards-on-pin-delete-btn" onClick={handleDelete}>Saved</button> :
                        <button className="boards-on-pin-save-btn" onClick={handleSubmit}>Save</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default BoardPinSelectionDetails;
