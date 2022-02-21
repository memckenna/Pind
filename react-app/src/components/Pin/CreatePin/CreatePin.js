import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createPin, getAllPinsOnFeed } from "../../../store/pin";
import { getBoardsByUser } from "../../../store/board";

import './CreatePin.css';



const CreateAPin = ({onClose}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [sourceLink, setSourceLink] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)

    const boards = useSelector(state => state.boards)

    // useEffect(() => {
    //     if(title.length > 0) setDisabled(false)
    //     else setDisabled(true)

    //     // if(photoUrl.length > 10) setDisabled(false)
    //     // else setDisabled(true)
    // }, [disabled, title, photoUrl])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const formData = new FormData()
        // formData.append("title", title);
        // formData.append("description", description)
        // formData.append("source_link", sourceLink)
        // formData.append("photo_url", photoUrl);
        const payload = {
            title,
            description,
            sourceLink,
            photoUrl,
            // board_id
        }

        console.log("FORM DATA", payload)

        // const data = await dispatch(createPin(payload))
        const data = await dispatch(createPin(payload))
        console.log("CREATE PIN DATA", data)
        // await dispatch(getBoardsByUser(sessionUser.id))
        await dispatch(getAllPinsOnFeed())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            await dispatch(getAllPinsOnFeed())
            onClose()
        }

        // if(data?.errors) {
        //     setErrors(data.errors)
        // } else if (!data?.errors) {
        //     // await dispatch(getBoardsByUser(sessionUser.id))
        //     await dispatch(getAllPinsOnFeed())

        //     // history.push(`/pins`)
        //     // history.push(`/users/${sessionUser.id}`)
        // }
        // alert("Your pin was created: ")
    }


    return (
        <>
            <div className="create-pin-form-container">
                <form className="create-pin-form" onSubmit={handleSubmit}>
                    <div className="create-pin-heading">
                        <h2>Create a Pin</h2>
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

                        <div className="create-pin-btn-div">
                                <button type="pin-submit"  className="create-pin-btn">Save</button>
                        </div>

                    </div>
                </form>

            </div>

        </>
    )
}

export default CreateAPin;
