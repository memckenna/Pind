// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getASingleBoard } from "../../store/board";

// import "./SingleBoard.css"



// const SingleBoardDetails = () => {
//     const dispatch = useDispatch();

//     const boards = useSelector(state => state.board)
//     // const sessionUser = useSelector((state) => state.session.user);
//     const { boardId } = useParams()

//     // let board = boards.boards.filter((e) => console.log(e))
//     console.log("SINGLE BOARD", boards.boards)

//     useEffect(() => {

//         dispatch(getASingleBoard(boardId))

//     }, [dispatch, boardId])

//     return (
//         <>
//             <div className="single-board">
//                 <div>PLEASE SHOW UPPPPPP</div>
//                 {boards.boards?.map((board) => (
//                     <div>
//                         {console.log(board.id.pins.id.title)}
//                         {board.id.pins.id.title}
//                     </div>
//                 ))}

//             </div>
//         </>

//     )

// }

// export default SingleBoardDetails;
