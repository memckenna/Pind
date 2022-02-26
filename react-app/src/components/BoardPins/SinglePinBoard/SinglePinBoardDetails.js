import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBoardPin, removePin, getAllBoardsForPin } from "../../../store/boards_pins";
import { getASinglePin } from "../../../store/pin";
import { getASingleBoard } from "../../../store/board";
import { getAllBoardPins } from "../../../store/boards_pins";
import kitchen from "../../../images/kitchen.jpg"

import "../BoardPins.css"


const SinglePinBoardSaveDetails = ({ id, board, onClose }) => { //id = pinId
    console.log("BOARDDDDD", board)
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session.user)
    const pinSavedOnBoard = board.pins.map(pin => pin.id)

    const [errors, setErrors] = useState([])
    const [isSaved, setIsSaved] = useState(false)
    const [color, setColor] = useState(false)
    // const [unSave, setUnSave] = useState(false)

    useEffect(() => {
        dispatch(getASinglePin(id))
        dispatch(getAllBoardsForPin(board.id))
        // dispatch(getAllBoardPins(board.id))
        dispatch(getASingleBoard(board.id))
        return () => {
            return
        }

    },[dispatch])

    useEffect(() => {
        setIsSaved(pinSavedOnBoard.includes(id))
        setColor(pinSavedOnBoard.includes(id))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await dispatch(createBoardPin(board.id, id))
        dispatch(getASinglePin(id))


        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // dispatch(getASinglePin(id))
            setIsSaved(true)
            setColor(false)
            onClose()
        }
        alert(`You pin has been saved to ${board.title}`)
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        const data = await dispatch(removePin(board.id, id))
        // await dispatch(getASinglePin(id))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            // dispatch(getASinglePin(id))

            onClose()
            setIsSaved(false)
            setColor(true)
        }
        alert(`You pin has been removed from ${board.title}`)
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


                        <button className="boards-on-pin-delete-btn" onClick={handleDelete}>Unsave</button>
                        <button className="boards-on-pin-save-btn" onClick={handleSubmit}>Save</button>

                    {/* {isSaved ?
                        <button className="boards-on-pin-delete-btn" onClick={handleDelete}>Unsave</button> :
                        <button className="boards-on-pin-save-btn" onClick={handleSubmit}>Save</button>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default SinglePinBoardSaveDetails;
