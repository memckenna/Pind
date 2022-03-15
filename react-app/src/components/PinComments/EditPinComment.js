import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { getASinglePin, createCommentOnPin, getPinComments, updatePinOnComment, deleteACommentOnPin } from '../../store/pin';
import "./Comments.css"

const EditCommentOnAPin = ({ id, comment, onClose }) => {
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
        await dispatch(getPinComments(pin.id))

        if(data?.errors){
            setErrors(data.errors)
        } else {
            await dispatch(getASinglePin(pin.id))
            onClose()
        }
    }

    const handleDelete = async(e) => {
        e.preventDefault()

        // const payload = {
        //     id: comment?.id
        // }

        const data = await dispatch(deleteACommentOnPin(id));
        await dispatch(getASinglePin(pin.id))
        await dispatch(getPinComments(pin.id))

        if(data?.errors){
            setErrors(data.errors)
        } else {
            onClose()
            await dispatch(getASinglePin(pin.id))
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
                <div className="edit-comment-button-section">
                    <div className='create-comment-button-div'>
                        <button className='create-comment-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div>
                        <button className='delete-comment-button' onClick={handleDelete} id={comment?.id} type='submit'>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditCommentOnAPin;
