import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserPin, getASinglePin, getAllPinsOnFeed, deleteSinglePin } from '../../../store/pin';

const EditAPinForm = ({onClose}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const pin = useSelector(state => state.pinReducer)
    console.log("EDIT A PIN", pin)
    const sessionUser = useSelector(state => state.session.user)

    const [board, setBoard] = useState()
    const [title, setTitle] = useState(pin.title)
    const [description, setDescription] = useState(pin.description)
    const [sourceLink, setSourceLink] = useState(pin.source_link)
    const [photoUrl, setPhotoUrl] = useState(pin.photo_url)
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)

    // useEffect(() => {
    //     if(title.length > 0 && photoUrl.length > 10) setDisabled(false)
    //     else setDisabled(true)

    //     // if(photoUrl.length > 10) setDisabled(false)
    //     // else setDisabled(true)
    // }, [disabled, title, photoUrl])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            description,
            sourceLink,
            photoUrl,
            id: pin.id
        }

        const data = await dispatch(updateUserPin(payload))
        await dispatch(getASinglePin(pin.id))

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            await dispatch(getASinglePin(pin.id))
            onClose()
        }
    }

    const handleDelete = (e) => {
        e.preventDefault()
        console.log(pin.id)


        const data = dispatch(deleteSinglePin(pin.id))
        console.log("DELETE", data)
        dispatch(getAllPinsOnFeed())
        // await dispatch(getASinglePin(payload))


        if(data?.errors) {
            setErrors(data.errors)
        } else {
            onClose()
            dispatch(getAllPinsOnFeed())
            history.push('/pins')

        }
    }

    return (
        <>
            <div className='edit-pin-form-container'>
                <form className='edit-pin-form' onSubmit={handleSubmit}>
                    <div>
                        <h2>Edit a pin</h2>
                    </div>
                    <div className='login-error-container'>
                        {errors?.map((error, ind) => (
                            <div key={error}>{error}</div>
                        ))}
                    </div>
                    <div className="create-pin-input-container">
                        <div className="create-pin-photo">
                            <div className="pin-photo">
                                <input
                                    className='pin-photo-url'
                                    type="text"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder='Click to upload"'
                                />
                            </div>
                        </div>
                        <div className="create-pin-input">
                            <div>
                                <input
                                    className='pin-title'
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Add your title"'
                                />
                            </div>
                            <div>
                                <textarea
                                    className='pin-description'
                                    placeholder="Tell everyone what your Pin is about"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className='pin-source-link'
                                    type="text"
                                    value={sourceLink}
                                    onChange={(e) => setSourceLink(e.target.value)}
                                    placeholder='Add a destination link"'
                                />
                            </div>
                        </div>
                        <div className='delete-btn-div'>
                            <button onClick={handleDelete} id={pin.id} type="submit" className='delete-board-btn'>Delete</button>
                        </div>
                        <div className='edit-button-div'>
                            <button type="submit" className='edit-board-btn'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditAPinForm;
