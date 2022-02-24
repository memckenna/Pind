import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pinReducer, { getASinglePin } from "../../store/pin";
import EditAPinModal from "./EditPin";
import './SinglePin.css';


const SinglePin = () => {
    const dispatch = useDispatch()
    const pin = useSelector(state => state.pinReducer)
    console.log("PPINNNNNSSSS", pin)

    const { pinId } = useParams()

    useEffect(() => {
        dispatch(getASinglePin(pinId))
    }, [dispatch])


    return (
        <>
            <div className="outer-single-pin-container">
            <div className="arrow">
                <NavLink className="arrow-pin-page" to={`/pins`}>
                    <i className="fas fa-arrow-left"></i>
                </NavLink>
            </div>

                <div className="single-pin-container">
                    <div className="single-pin-img-container">
                        <img className="single-pin-img" src={pin.photo_url} />
                    </div>
                    <div className="single-pin-content">
                        <div className="single-save-button-div">
                            <EditAPinModal id={pinId} pin={pin}/>
                            {/* <button className="single-save-button">Save</button> */}
                        </div>
                        <div className="single-pin-title">{pin.title}</div>
                        <div className="single-pin-description">{pin.description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePin;
