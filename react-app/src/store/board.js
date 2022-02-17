const GET_BOARD_BY_USER = 'userBoard/GET_BOARD_BY_USER';

const ADD_BOARD = 'userBoard/ADD_BOARD';


const GET_BOARD = 'board/GET_BOARD';
const GET_SINGLE_BOARD = 'board/GET_SINGLE_BOARD';

const getUserBoard = (boards) => ({
    type: GET_BOARD_BY_USER,
    boards
})

const getBoards = (boards) => ({
    type: GET_BOARD,
    boards
})

const getSingleBoard = (board) => ({
    type: GET_SINGLE_BOARD,
    board
})

const addBoard = (board) => ({
    type: ADD_BOARD,
    board
})


// CRUD FEATRURE WITH REDUX
// GET
// Get All User Boards
export const getBoardsByUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/boards`)

    if(response.ok) {
        const data = await response.json()
        console.log("THESE ARE MY BOARDS", data)
        dispatch(getUserBoard(data))
        return data
    }
}

export const getAllBoard = (payload) => async (dispatch) => {
    const response = await fetch(`/api/boards/${payload.user_id}`)

    if(response.ok) {
        const boards = await response.json()
        dispatch(getBoards(boards))
        console.log(boards)
        return boards
    }
}

export const getASingleBoard = (payload) => async (dispatch) => {
    // const response = await fetch(`/api/boards/${payload.board_id}`)
    const response = await fetch(`/api/boards/${payload.board_id}`)

    if(response.ok) {
        const board = await response.json();
        dispatch(getASingleBoard(board))
        return board;
    }
}

// export const getASingleBoard = (payload) => async (dispatch) => {
//     const response = await fetch(`/api/boards/${payload.board_id}`)

//     if(response.ok) {
//         const board = await response.json();
//         dispatch(getASingleBoard(board))
//         return board;
//     }
// }

//CREATE
export const createBoard = (formData) => async(dispatch) => {
    const response = await fetch(`/api/boards/create_board`, {
        method: 'POST',
        body: formData
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(addBoard(data))
        // dispatch(getBoardsByUser(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        }
    } else {
        return ['An error occured. Please try again']
    }
}


const boardReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_BOARD_BY_USER:
            newState = {...state, ...action.boards}
            console.log(action.boards)
            return newState
        // case GET_BOARD:
        //     const allBoards = []
        //     for (let board of action.boards['boards']) {
        //         allBoards.push(board)
        //     }
        //     console.log("ALL BOARDS", allBoards)
        //     return { ...state, 'posts': allBoards }
        // case GET_BOARD_BY_USER:
        //     action.boards.forEach(board => {
        //         newState[board.id] = board
        //     })
        //     return newState
        // case GET_SINGLE_BOARD:
        //     newState = { ...state }
        //     const newBoard = [...state.boards, action.board]
        //     newState.boards = newBoard
        //     return newState

        // case ADD_BOARD:

        default:
            return state
    }
}

export default boardReducer;
