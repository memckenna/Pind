import React, { useEffect, useState } from "react";
import { NavLink, Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getASinglePin } from "../../store/pin";
import { getBoardsByUser } from "../../store/board";
import { getAllPinComments } from "../../store/pin";
import GetAllBoardsForPin from "../BoardPins/BoardPins";
import EditAPinModal from "./EditPin";
import DisplayAllPinComments from "../PinComments/DisplayPinComments";
import CreateCommentOnAPin from "../PinComments/CreatePinComment";
import FollowAUserOnSinglePin from "../Follow/FollowOnSinglePin";
import './SinglePin.css';

const SinglePin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const pin = useSelector(state => state.pinReducer)
    const { pinId } = useParams()

    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser?.id))
        dispatch(getASinglePin(pinId))
        dispatch(getAllPinComments(pinId))
    }, [dispatch, pinId, sessionUser])

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <div className="outer-single-pin-container">
            <div className="arrow">
                <button className="arrow-pin-page-btn" type="button" onClick={goBack}>
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>
                <div className="single-pin-container">
                    <div className="single-pin-img-container">
                        <img className="single-pin-img" src={pin.photo_url} />
                    </div>
                    <div className="single-pin-content">
                        <div className="single-save-button-div">
                            <EditAPinModal id={pinId} pin={pin}/>
                            {/* <SinglePinBoardSaveModal id={pinId} /> */}
                            {/* <GetAllBoardsOnPinModal boardId={boardId} id={pinId} /> */}
                            {/* <button className="single-save-button">Save</button> */}
                        </div>
                        {/* <div className="single-pin-source-link">{pin.source_link}</div> */}
                        {/* <Link to={pin.source_link}>{pin.source_link}</Link> */}
                        {/* <Link className="github-links" to={{ pathname: "https://github.com/memckenna" }} target="_blank">{pin.source_link}</Link> */}
                        {/* <Link className="github-links" to={{ pathname: pin.source_link }} target="_blank">{pin.source_link}</Link> */}
                        <div className="single-pin-title">{pin.title}</div>
                        <div className="single-pin-description">{pin.description}</div>
                        <div>
                            <FollowAUserOnSinglePin sessionUser={sessionUser} pinId={pin.user_id}   />
                        </div>
                        <div className="comments-div-container">
                            <div className="comments-section">Comments</div>
                            <DisplayAllPinComments comments={pin.comments} pindId={pinId} />
                            <CreateCommentOnAPin pinId={pinId} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePin;
