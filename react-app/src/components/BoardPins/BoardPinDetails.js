import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./BoardPins.css"

const BoardPinSelectionDetails = ({id, board}) => { //id = pin.id
    const boards = useSelector(state => state.board)
    console.log("BOARD PIN DETAILS", boards)

    return (
        <>
            <div>
                {board.title}
            </div>
        </>
    )
}

export default BoardPinSelectionDetails;
