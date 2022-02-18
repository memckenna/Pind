import React, { useState } from 'react' //useEffect,
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import "./CreateBoard.css"
import { createBoard } from '../../../store/board'

const CreateBoardForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const user = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description)

        const data = await dispatch(createBoard(formData))

        if (data) {
            setErrors(data)
            // onClose()
            history.push(`/users/${user.id}`)
        }
    }

    // const updateTitle = (e) => {
    //     setTitle(e.target.value)
    // }

    // const updateDescription = (e) => {
    //     setDescription(e.target.value)
    // }


    return (
        <>
            <form className='create-board-form' onSubmit={handleSubmit}>
                <h2 className='create-board-text'>Create board</h2>
                <div className='login-error-container'>
                    {errors.map((error, ind) => (
                        <div key={error}>{error}</div>

                    ))}
                </div>
                <input
                    className='title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                />
                 <textarea
                    className='description'
                    placeholder="Write a desciptiom..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className='button-div'>
                    <button type="submit" onSubmit={handleSubmit} className='create-board-btn'>Create</button>
                </div>
            </form>
        </>
    )
}

export default CreateBoardForm;
