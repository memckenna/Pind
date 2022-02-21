import React, { useEffect } from "react"; //useState,
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateBoardModal from "../../Board/CreateABoard";

import EditUserBoardModal from "../../Board/EditABoard";
import { getASingleBoard, getBoardsByUser, createBoard } from "../../../store/board";
import SingleBoard from "../../Board/SingleBoard";
import  door from '../../../images/door.jpg'
import '../UserProfile.css'

function GetUserBoards({id}) {    //id = userId
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // console.log("SESSION USER", sessionUser)
    const boards = useSelector(state => state.board)
    console.log("BOARDS.Boards", boards)
    console.log("USER ID", id)
    const pins = useSelector(state => state.pinReducer)
    console.log("MY PINS", pins)
    // const boardsList = Object.values(boards)


    useEffect(() => {
        // const payload = {
        //     id: sessionUser?.id
        // }
        dispatch(getBoardsByUser(id));
        // dispatch(createBoard(boards.boards[id]))
    }, [dispatch])

    if(!sessionUser) return <Redirect to="/login" />;
    if(!boards) return null;

    // const handleClick = () => {
    //     dispatch(getASingleBoard(id))

    // }
    // let sessionLinks;
    // if(sessionUser) {
    //     sessionLinks = (
    //         <EditUserBoardModal id={board.id} />
    //     )
    // }


    return (
        <>
            <div className="create-board-profile-modal">
                <CreateBoardModal  />
            </div>
            <div className="board-container">
                {boards.boards?.map(board => (
                    <div key={board.id} className="board-card">
                        {console.log("BOARD IN COMP", board)}

                        <div className="board-img">
                            <EditUserBoardModal user={board.user_id} board={board} id={board.id} />
                            <NavLink to={`/boards/${board.id}`}>
                                {/* <SingleBoard id={board.id} /> */}
                                {!board.pins[0]?.photo_url ?
                                    <img src={door} /> :
                                    <img src={board.pins[0]?.photo_url} />
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
