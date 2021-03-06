import React, { useEffect } from "react"; //useState,
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateBoardModal from "../../Board/CreateABoard";

import EditUserBoardModal from "../../Board/EditABoard";
import { getASingleBoard, getBoardsByUser, createBoard } from "../../../store/board";
import SingleBoard from "../../Board/SingleBoard";
import kitchen from '../../../images/kitchen.jpg'
import cake from '../../../images/cake.jpg'
import '../UserProfile.css'

function GetUserBoards({ id, user }) {    //id = userId  user = userboard
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const boards = useSelector(state => state.board)

    useEffect(() => {
        dispatch(getBoardsByUser(id));
        // dispatch(createBoard(boards.boards[id]))
    }, [dispatch, id])

    if(!sessionUser) return <Redirect to="/login" />;
    if(!boards) return null;


    return (
        <>
            <div className="create-board-profile-modal">
                <CreateBoardModal id={id} />
            </div>
            <div className="board-container">
                {boards.boards?.map(board => (
                    <div key={board.id} className="board-card">
                        <div className="board-img">
                            <EditUserBoardModal user={board.user_id} board={board} id={board.id} />
                            <NavLink to={`/boards/${board.id}`}>
                                {!board.pins[0]?.photo_url ?
                                    <img className="board-image" src={kitchen} /> :
                                    <img className="board-image" src={board.pins[0]?.photo_url} />
                                }
                            </NavLink>
                        </div>
                        <div className="board-title">{board.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GetUserBoards;
