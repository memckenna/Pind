import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserBoard } from '../../../store/board';
import './EditBoard.css';


const EditABoardForm = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board);
    // console.log("MY BOARDDDD IN EDIT", id)
    console.log("MY BOARDDDD IN EDIT TITLE", board.boards[id])
    console.log("MY BOARDDDD IN EDIT", board)

    const [title, setTitle] = useState(board?.boards[id]?.title || "");
    const [description, setDescription] = useState("")
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState([]);

    let boardToEdit = board.boards.filter((board) => board.id === id.id)
    console.log("IS THIS IS BOARD?", boardToEdit)

    useEffect(() => {
        if(title.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [disabled, title])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = dispatch(updateUserBoard(id, title))
        // console.log(data)
        if(data) {
            onClose()
        } else {
            setErrors(data)
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
                 <textarea
                    className='description'
                    placeholder="Write a desciptiom..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className='edit-button-div'>
                    <button type="submit" disabled={disabled} className='edit-board-btn'>Edit</button>
                </div>
            </form>
        </>
    )
}

export default EditABoardForm;
