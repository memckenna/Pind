import React, { useState, useEffect, useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import { getASinglePin } from '../../store/pin';


const CreateCommentOnAPin = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const pins = useSelector(state => state.pinReducer);

    const [comment, setComment] = useState("");

    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            pin_id = pins.id,
            user_id = sessionUser?.id
        }

        
    }

    return (
        <>
        </>
    )
}

export default CreateCommentOnAPin;
