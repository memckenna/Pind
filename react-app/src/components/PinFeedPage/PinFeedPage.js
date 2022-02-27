import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPinsOnFeed } from "../../store/pin";
import CreatePinFooter from "../Footer/CreatePinFooter";
import GetAllBoardsOnPinModal from "../BoardPins";
import { getASinglePin } from "../../store/pin";
import './PinFeedPage.css'

const PinFeedPage = () => {
    const dispatch = useDispatch()
    // const sessionUser = useSelector(state => state.session.user)
    const pins = useSelector(state => state.pinReducer)
    // console.log("PIN IN COMPONENT", pins.pins)


    useEffect(() => {
        dispatch(getAllPinsOnFeed())
        dispatch(getASinglePin(pins.id))
    }, [dispatch])


    return (
        <div>
            {/* <div className="pin-feed-page">PIN FEED PAGE</div> */}
            <div className="pin-feed-container">
                {pins.pins?.map(pin => (
                    <div key={pin.id} className="pin-feed-card">
                        <div className="pin-feed-image-container">
                            <GetAllBoardsOnPinModal id={pin.id} />
                            <NavLink to={`/pins/${pin.id}`}>
                                <img className="pin-feed-image" src={pin.photo_url} />
                            </NavLink>
                        </div>
                        <div className="pin-feed-title">{pin.title}</div>


                    </div>
                ))}
            </div>
            <div className="create-pin-btn-div">
                <CreatePinFooter />
                {/* <button className="create-pin-btn">
                    <i className="fas fa-plus"></i>
                </button> */}
            </div>
        </div>
    )
}

export default PinFeedPage;
