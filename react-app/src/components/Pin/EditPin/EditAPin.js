import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserPin, getASinglePin, getAllPinsOnFeed, deleteUserPin } from '../../../store/pin';

import "./EditAPin.css"

const EditAPinForm = ({onClose}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const pin = useSelector(state => state.pinReducer)
    const sessionUser = useSelector(state => state.session.user)

    const [title, setTitle] = useState(pin.title)
    const [description, setDescription] = useState(pin.description)
    const [sourceLink, setSourceLink] = useState(pin.source_link)
    const [photoUrl, setPhotoUrl] = useState(pin.photo_url)
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {

    }, [dispatch])
    
    useEffect(() => {
        if(title.length > 0 && photoUrl.length > 10) setDisabled(false)
        else setDisabled(true)

    }, [disabled, title, photoUrl])

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

    const handleDelete = async(e) => {
        e.preventDefault()

        const data = await dispatch(deleteUserPin(pin.id))
        // console.log("DELETE", data)
        await dispatch(getAllPinsOnFeed())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            onClose()
            await dispatch(getAllPinsOnFeed())
            history.push('/pins')
        }
    }

    return (
        <>
            <div className='edit-pin-form-container'>
                <form className='edit-pin-form' onSubmit={handleSubmit}>
                    <div>
                        <h2 className='edit-pin-form-header'>Edit this pin</h2>
                    </div>
                    <div className='login-error-container'>
                        {errors?.map((error, ind) => (
                            <div key={error}>{error}</div>
                        ))}
                    </div>
                    <div className="edit-pin-input-container">
                        <div className="create-pin-photo">
                            <div>
                                <img src={photoUrl} />
                            </div>
                        </div>
                        <div className="edit-pin-input">
                            <div className='edit-pin-form-title'>
                                <h4 className='edit-pin-title'>Title</h4>
                                <input
                                    className='edit-pin-title-input'
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Add your title'
                                />
                            </div>
                            <div className='edit-pin-descrip-form'>
                                <h4 className='edit-pin-descrip'>Description</h4>
                                <textarea
                                    className='edit-pin-description'
                                    placeholder="Tell us about this Pin..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className='edit-pin-sourcelink-form'>
                                <h4 className='edit-pin-source'>Source Link</h4>
                                <input
                                    className='edit-pin-source-link'
                                    type="text"
                                    value={sourceLink}
                                    onChange={(e) => setSourceLink(e.target.value)}
                                    placeholder='Add a destination link'
                                />
                            </div>
                        </div>
                        <div className='edit-delete-btn-form-div'>
                            <div className='edit-delete-btn-div'>
                                <button onClick={handleDelete} id={pin.id} type="submit" className='delete-pin-btn-form'>Delete</button>
                            </div>
                            <div className='edit-button-form-div'>
                                <button type="submit" className='edit-pin-btn-form'>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditAPinForm;
