import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createPin } from "../../../store/pin";
import { getBoardsByUser } from "../../../store/board";
import './CreatePin.css';



const CreateAPin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [sourceLink, setSourceLink] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if(title.length > 0) setDisabled(false)
        else setDisabled(true)

        if(photoUrl.length > 10) setDisabled(false)
        else setDisabled(true)
    }, [disabled, title, photoUrl])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("title", title);
        formData.append("photo_url", photoUrl);

        const data = await dispatch(createPin(formData))
        // await dispatch(getBoardsByUser(sessionUser.id))

        if(data?.errors) {
            setErrors(data.errors)
        } else if (!data?.errors) {
            // await dispatch(getBoardsByUser(sessionUser.id))
            history.push(`/users/${sessionUser.id}`)
        }
        alert("Your pin was created: ")
    }


    return (
        <>
            <div className="create"> CREATE A PIN</div>
            <form onSubmit={handleSubmit}>
                <h2>Create a Pin</h2>
                <div className='login-error-container'>
                    {errors?.map((error, ind) => (
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <input
                    className='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Add your title"'
                />
                <textarea
                    className='description'
                    placeholder="Tell everyone what your Pin is about"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    className='source-link'
                    type="text"
                    value={sourceLink}
                    onChange={(e) => setSourceLink(e.target.value)}
                    placeholder='Add a destination link"'
                />
                <input
                    className='photo-url'
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder='Click to upload"'
                />
                <div className="create-pin-btn-div">
                        <button type="submit" disabled={disabled} className="create-pin-btn">Save</button>
                </div>
            </form>

        </>
    )
}

export default CreateAPin;
