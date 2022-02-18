const GET_BOARD_BY_USER = 'userBoard/GET_BOARD_BY_USER';
const GET_SINGLE_BOARD = 'userBoard/GET_SINGLE_BOARD';

const ADD_BOARD = 'userBoard/ADD_BOARD';

const EDIT_USER_BOARD = 'userBoard/EDIT_USER_BOARD';

const GET_BOARD = 'board/GET_BOARD';

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

const editBoard = (board) => ({
    type: EDIT_USER_BOARD,
    board
})

// CRUD FEATRURE WITH REDUX
// GET
// Get All User Boards
export const getBoardsByUser = (id) => async (dispatch) => {
    // console.log(id)
    const response = await fetch(`/api/users/${id}/boards`)

    if(response.ok) {
        const data = await response.json()
        console.log()
        console.log("BOARDDS IN THUNK", data)
        console.log()
        dispatch(getUserBoard(data))
        return data
    }
}

// export const getAllBoard = (payload) => async (dispatch) => {
//     const response = await fetch(`/api/boards/${payload.user_id}`)

//     if(response.ok) {
//         const boards = await response.json()
//         dispatch(getBoards(boards))
//         // console.log()
//         // console.log("BOARDDS IN THUNK", boards)
//         // console.log()
//         return boards
//     }
// }

// export const getASingleBoard = (payload) => async (dispatch) => {
//     // const response = await fetch(`/api/boards/${payload.board_id}`)
//     const response = await fetch(`/api/users/${payload.id}/boards/${payload.board_id}`)

//     if(response.ok) {
//         const board = await response.json();
//         dispatch(getSingleBoard(board))
//         console.log("THUNK SINGLE BOARD", board)
//         return board;
//     }
// }

export const getASingleBoard = (id) => async (dispatch) => {

    const response = await fetch(`/api/boards/${id}`)
    if(response.ok) {
        const board = await response.json();
        // console.log("THUNK SINGLE BOARD", board)
        dispatch(getSingleBoard(board))
        return board;
    }
}

//CREATE BOARD
export const createBoard = (formData) => async(dispatch) => {
    const response = await fetch(`/api/boards/create_board`, {
        method: 'POST',
        body: formData
    })

    if(response.ok) {
        const data = await response.json()
        console.log("CREATE", data)
        dispatch(addBoard(data))
        // dispatch(getBoardsByUser(data))
        return data
    } else if (response.status < 500) {
        const data = await response.json()
        if(data.errors) {
            return data.errors
        }
    } else {
        return ['An error occured. Please try again']
    }
}

//EDIT BOARD

export const updateUserBoard = (id, title) => async (dispatch) => {
    const response = await fetch(`/api/boards/${id}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })

    if (response.ok) {
        const data = await response.json()
        console.log("EDITT", data)
        dispatch(editBoard(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}


const boardReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_BOARD_BY_USER:
            newState = {...state, ...action.boards}

            console.log("ALLBOARDS?", action.boards)
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
        case GET_SINGLE_BOARD:
            newState = { ...state }
            newState[action.board.id] = action.board
            return newState
            // console.log("NEWSTATE: ", newState)
            // const newBoard = [...state.boards, action.board]
            // newState.boards = newBoard
        case ADD_BOARD:
            newState = { ...state, [action.board.id]: action.board }
            console.log("ADDD BOARD", newState)
            return newState;
        case EDIT_USER_BOARD:
            newState = { ...state, [action.board.id]: action.board }
            return newState

        default:
            return state
    }
}

export default boardReducer;
