import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pinReducer, { getASinglePin } from "../../store/pin";
import EditAPinModal from "./EditPin";
import './SinglePin.css';


const SinglePin = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    console.log(user)
    const pin = useSelector(state => state.pinReducer)
    console.log("PPINNNNNSSSS", pin)

    const { pinId } = useParams()

    useEffect(() => {
        dispatch(getASinglePin(pinId))
    }, [dispatch])

    // useEffect(() => {
    //     if (!userId) {
    //       return;
    //     }
    //     (async () => {
    //       const response = await fetch(`/api/users/${userId}`);
    //       const user = await response.json();
    //       setUser(user);
    //     })();
    // }, [userId]);

    //   if (!user) {
    //     return null;
    //   }


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
                        <div className="single-pin-source-link">{pin.source_link}</div>
                        <div className="single-pin-title">{pin.title}</div>
                        <div className="single-pin-description">{pin.description}</div>
                        {user.id === pin.user_id && (
                            <NavLink to={`users/${user.id}`}>
                                <img src={user.profile_img_url} />
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePin;
