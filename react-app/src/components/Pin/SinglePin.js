import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pinReducer, { getASinglePin } from "../../store/pin";
import EditAPinModal from "./EditPin";
import './SinglePin.css';


const SinglePin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const pin = useSelector(state => state.pinReducer)

    const { pinId } = useParams()

    useEffect(() => {
        dispatch(getASinglePin(pinId))
    }, [dispatch, pinId])

    const goBack = () => {
        history.goBack()
    }


    return (
        <>
            <div className="outer-single-pin-container">
            <div className="arrow">
                {/* <NavLink className="arrow-pin-page" to={`/pins`}> */}
                <button className="arrow-pin-page-btn" type="button" onClick={goBack}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                {/* </NavLink> */}
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
                        <div className="single-pin-source-link">{pin.source_link}</div>
                        <div className="single-pin-title">{pin.title}</div>
                        <div className="single-pin-description">{pin.description}</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePin;
