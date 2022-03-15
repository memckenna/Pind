import React, { useState, useEffect, useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { getASinglePin, createCommentOnPin, getPinComments } from '../../store/pin';
import "./Comments.css"

const CreateCommentOnAPin = ({ pinId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const pins = useSelector(state => state.pinReducer);
    console.log(pins)
    const [content, setContent] = useState("");

    // useEffect(() => {
    //     dispatch(getASinglePin(pinId))
    //     dispatch(getPinComments(pinId))
    // }, [])



    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            pin_id: pinId,
            user_id: sessionUser?.id
        };
        dispatch(createCommentOnPin(payload))
        dispatch(getPinComments(pinId))
        dispatch(getASinglePin(pinId))
        setContent("");
    }

    return (
        <div className='create-comment-form-container'>
            <form className='create-comment-form' onSubmit={handleSubmit}>
                <textarea
                    className='create-comment-input'
                    placeholder='Add a comment'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className='create-comment-button-div'>
                    <button className='create-comment-button' type='submit'>
                        Done
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCommentOnAPin;
