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
    const [disabled, setDisabled] = useState(true);
    const [showResults, setShowResults] = useState(false)

    const onClick = () => setShowResults(true)
    const onCancel = () => {
        setShowResults(false)
        setContent("")
    }

    useEffect(() => {
        if(content.length > 0) setDisabled(false)
        else setDisabled(true)
    }, [disabled, content])


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
                    onClick={onClick}
                    onCancel={onCancel}
                />
                <div className='done-cancel-btn-div'>
                    <div className='create-comment-button-div'>
                        {showResults ?
                        <button disabled={disabled} className='create-comment-button' type='submit'>Done</button> :
                        null
                        }
                    </div>
                    <div>
                        {showResults ?
                            <button onClick={onCancel} type='reset' className='delete-comment-btn'>Cancel</button> :
                            null
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateCommentOnAPin;
