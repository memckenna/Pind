import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createPin, getAllPinsOnFeed } from "../../../store/pin";
import { getBoardsByUser, getASingleBoard } from "../../../store/board";


import './CreatePin.css';



const CreateAPin = ({onClose}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)
    // console.log("BOARDS IN PINS", boards.boards)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [sourceLink, setSourceLink] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [boardId, setBoardId] = useState()
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
        if(title.length > 0 && photoUrl.length > 10) setDisabled(false)
        else setDisabled(true)

        // if(photoUrl.length > 10) setDisabled(false)
        // else setDisabled(true)
    }, [disabled, title, photoUrl])

    if (!sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            title,
            description,
            sourceLink,
            photoUrl,
            // boardId
        }

        console.log("FORM DATA", payload)

        // const data = await dispatch(createPin(payload))
        const data = await dispatch(createPin(payload))
        console.log("CREATE PIN DATA", data)
        // await dispatch(getBoardsByUser(sessionUser.id))
        await dispatch(getAllPinsOnFeed())
        // await dispatch(getBoardsByUser(sessionUser.id))
        // await dispatch(getASingleBoard())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            await dispatch(getAllPinsOnFeed())
            // await dispatch(getBoardsByUser(sessionUser.id))
            onClose()
            //     // history.push(`/pins`)
            //     // history.push(`/users/${sessionUser.id}`)
        }
        // alert("Your pin was created: ")
    }

    // const onChange = (e) => {
    //     setBoardId({boardId: e.target.value})
    // }


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
                                <button type="pin-submit" disabled={disabled}  className="create-pin-btn">Save</button>
                                {/* <select onChange={onChange} value={boardId}> */}

                                    {/* {boards.boards?.map((board) => (

                                        <option key={board.id} value={board.title}>
                                            {board.title}
                                            {console.log("DROPDOWN", board)}
                                        </option>
                                    ))} */}

                                {/* </select> */}

                        </div>

                    </div>
                </form>

            </div>

        </>
    )
}

export default CreateAPin;
