import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPin, getAllPinsOnFeed } from "../../../store/pin";

import './CreatePin.css';

const CreateAPin = ({onClose}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [sourceLink, setSourceLink] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [boardId, setBoardId] = useState()
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)

    // useEffect(() => {
    //     dispatch(getAllPinsOnFeed())
    // }, [dispatch])

    // useEffect(() => {
    //     const validationErrors = [];

    //     if(title.length < 1) validationErrors.push("Please provide a title");
    //     if(title.length >= 50) {
    //         validationErrors.push("Title must be less than 50 characters")
    //         setDisabled(true)
    //     } else {
    //         setDisabled(false)
    //     }

    //     if(!photoUrl.startsWith("https://")) validationErrors.push("Please provide the full image URL")
    //     setErrors(validationErrors)

    // }, [disabled, title, photoUrl])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            title,
            photoUrl,
            description,
            sourceLink,
        }

        const validationErrors = [];

        if(title.length <= 1) validationErrors.push("Please provide a title");
        if(title.length >= 50) {
            validationErrors.push("Title must be less than 50 characters")
            setDisabled(true)
        } else {
            setDisabled(false)
        }

        if(!photoUrl.startsWith("https://")) validationErrors.push("Please provide the full image URL")
        setErrors(validationErrors)

        if(!validationErrors.length) {
            const data = await dispatch(createPin(payload))
            await dispatch(getAllPinsOnFeed())

            if(data?.errors) {
                setErrors(data.errors)
            } else {
                await dispatch(getAllPinsOnFeed())
                onClose()
            }
        }
    }

    return (
        <>
            <div className="create-pin-form-container">
                <form className="create-pin-form" onSubmit={handleSubmit}>
                    <div className="heading-save-btn">
                        <div className="create-pin-heading">
                            <h2>Create a Pin</h2>
                        </div>
                        <div className="save-pin-btn-form">
                            <button type="pin-submit" className="save-pin-btn">Save</button>
                            {/* <button type="pin-submit" disabled={disabled}  className="save-pin-btn">Save</button> */}
                        </div>
                    </div>
                    {errors.length ?
                        <div className='pin-login-error-container'>
                            {errors.length > 0 &&
                                errors?.map((error, ind) => (
                                    <div key={error}>{error}</div>
                            ))}
                        </div> :
                        <></>
                    }
                    <div className="create-pin-input-container">

                        <div className="create-pin-photo-div">
                            <div className="pin-photo">
                                <input
                                    className='pin-photo-url'
                                    type="text"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder='Add your image URL'
                                    required={true}
                                />
                            </div>
                        </div>

                        <div className="create-pin-input-div">
                            <div className="pin-title-div">
                                <input
                                    className='pin-title'
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Add your title'
                                    required={true}
                                />
                            </div>
                            <div className="pin-description-div">
                                <textarea
                                    className='pin-description'
                                    placeholder="Tell everyone what your Pin is about (optional)"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            {/* <div className="pin-source-link-div">
                                <input
                                    className='pin-source-link'
                                    type="text"
                                    value={sourceLink}
                                    onChange={(e) => setSourceLink(e.target.value)}
                                    placeholder='Add a destination link (optional)'
                                />
                            </div> */}
                        </div>

                        {/* <div className="create-pin-btn-div">
                                <button type="pin-submit" disabled={disabled}  className="create-pin-btn">Save</button>
                        </div> */}

                    </div>
                </form>

            </div>

        </>
    )
}

export default CreateAPin;
