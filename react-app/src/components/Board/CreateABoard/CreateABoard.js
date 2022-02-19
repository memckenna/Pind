import React, { useEffect, useState } from 'react' //useEffect,
import { Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./CreateBoard.css"
import { createBoard } from '../../../store/board'


const CreateBoardForm = ({ onClose }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const sessionUser = useSelector(state => state.session.user)

    // const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [errors, setErrors] = useState([])
    const [disabled, setDisabled] = useState(true);
    const user = useSelector(state => state.session.user);
    // console.log("USER", user)

    useEffect(() => {
        if(title.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [disabled, title])

    if (!user) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", title);
        // formData.append("description", description)

        const data = await dispatch(createBoard(formData))
        // console.log("THIS IS MY COMP DATA", data)
        if (data) {
            setErrors(data)
            onClose()
            history.push(`/users/${user.id}`)
        }
        alert("Your board was created: ")
    }

    return (
        <>
            <form className='create-board-form' onSubmit={handleSubmit}>
                <h2 className='create-board-text'>Create board</h2>
                <div className='login-error-container'>
                    {/* {errors?.map((error, ind) => (
                        <div key={error}>{error}</div>
                    ))} */}
                </div>
                <input
                    className='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Like "Places to See" or "Recipes to Make"'
                />
                 {/* <textarea
                    className='description'
                    placeholder="Write a desciptiom..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /> */}
                <div className='button-div'>
                    <button type="submit" disabled={disabled} className='create-board-btn'>Create</button>
                </div>
            </form>
        </>
    )
}

export default CreateBoardForm;
