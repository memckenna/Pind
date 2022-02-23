import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserBoard } from '../../../store/board';
import { getBoardsByUser } from '../../../store/board';
import { deleteUserBoard } from '../../../store/board';
import './EditBoard.css';


const EditABoardForm = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board);
    const sessionUser = useSelector(state => state.session.user)
    console.log("MY BOARDDDD IN EDIT ID", id)
    // console.log("MY BOARDDDD IN EDIT TITLE", board.boards[id])
    // console.log("MY BOARDDDD IN EDIT", board.boards)


    let boardToEdit = board.boards.filter((board) => board.id === +id)
    // let userOfBoard = board.boards.filter((board) => board.user_id === +sessionUser.id)
    // console.log("IS THIS IS BOARD?", boardToEdit[0].description)
    // console.log("THIS IS USER OF BOARD", userOfBoard)

    if(boardToEdit) {
        localStorage.setItem("title", boardToEdit[0].title)
        // localStorage.setItem("description", boardToEdit[0].description)
    }

    // const [title, setTitle] = useState(board?.boards[id]?.title || "");
    const [title, setTitle] = useState(localStorage.getItem("title"));
    // const [description, setDescription] = useState("")
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState([]);

    // const name = localStorage.getItem("description")
    // console.log(name)

    // if(name !== "null") {
    //     console.log(typeof name)
    //     console.log("sdfghjkls")
    //     setDescription(localStorage.getItem("description"))
    // }

    useEffect(() => {
        if(title.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [disabled, title])

    // useEffect(())

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await dispatch(updateUserBoard(id, title))
        await dispatch(getBoardsByUser(sessionUser.id));

        if(data?.errors) {
            setErrors(data.errors)
        } else if(!data?.errors) {
            await dispatch(getBoardsByUser(sessionUser.id));
            onClose()
        }
    }

    const handleDelete = (e) => {
        e.preventDefault()
        // const id = e.target.id
        const data = dispatch(deleteUserBoard(id));
        dispatch(getBoardsByUser(sessionUser.id));

        if(data?.errors) {
            setErrors(data.errors)
        } else if(!data?.errors) {
            dispatch(getBoardsByUser(sessionUser.id));
            onClose()
        }
    }

    return (
        <>
            <form className='edit-board-form' onSubmit={handleSubmit}>
                <h2 className='edit-board-text'>Edit board</h2>
                <div className='login-error-container'>
                    {errors?.map((error, ind) => (
                        <div key={error}>{error}</div>
                    ))}
                </div>
                <input
                    className='edit-title'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Like "Places to See" or "Recipes to Make"'
                />
                 {/* <textarea
                    className='description'
                    placeholder="Write a description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /> */}
                <div className='delete-btn-div'>
                    <button onClick={handleDelete}  id={id} type="submit" className='delete-board-btn'>Delete board</button>
                    <div className='delete-text'>Delete this board and all its Pins forever.</div>
                    <div className='delete-text'>You can't undo this!</div>
                </div>
                <div className='edit-button-div'>
                    <button type="submit" disabled={disabled} className='edit-board-btn'>Done</button>
                </div>

            </form>
        </>
    )
}

export default EditABoardForm;