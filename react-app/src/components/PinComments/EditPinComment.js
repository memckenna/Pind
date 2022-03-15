import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { getASinglePin, createCommentOnPin, getPinComments, updatePinOnComment } from '../../store/pin';
import "./Comments.css"

const EditCommentOnAPin = ({ comment, onClose }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const pin = useSelector(state => state.pinReducer);

    const [content, setContent] = useState(comment?.content);
    const [errors, setErrors] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            pin_id: pin.id,
            user_id: sessionUser?.id,
            id: comment?.id
        }

        const data = await dispatch(updatePinOnComment(payload))
        await dispatch(getASinglePin(pin.id))
        dispatch(getPinComments(pin.id))
        if(data?.errors){
            setErrors(data.errors)
        } else {
            dispatch(getASinglePin(pin.id))
            onClose()
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {errors?.map((error, ind) => (
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <textarea
                    type="text"
                    aria-label='Content'
                    className='create-comment-input'
                    // placeholder='Add a comment'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div>
                    <div className='create-comment-button-div'>
                        <button className='create-comment-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditCommentOnAPin;
