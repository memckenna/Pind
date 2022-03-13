const GET_BOARD_BY_USER = 'userBoard/GET_BOARD_BY_USER';
const GET_SINGLE_BOARD = 'userBoard/GET_SINGLE_BOARD';

const ADD_BOARD = 'userBoard/ADD_BOARD';
const FOLLOW_USER = 'user/FOLLOW_USER';

const EDIT_USER_BOARD = 'userBoard/EDIT_USER_BOARD';

const DELETE_USER_BOARD = 'userBoard/DELETE_USER_BOARD';
const UNFOLLOW_USER = 'user/UNFOLLOW_USER';

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

const followUser = (user) => ({
    type: FOLLOW_USER,
    user
})

const editBoard = (board) => ({
    type: EDIT_USER_BOARD,
    board
})

const deleteBoard = (board) => ({
    type: DELETE_USER_BOARD,
    board
})

const unfollowUser = (user) => ({
    type: UNFOLLOW_USER,
    user
})

// CRUD FEATRURE WITH REDUX
// GET
// Get All User Boards
export const getBoardsByUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/boards`)

    if(response.ok) {
        const data = await response.json()

        dispatch(getUserBoard(data))
        return data
    }
}

//Get Single Board
export const getASingleBoard = (id) => async (dispatch) => {

    const response = await fetch(`/api/boards/${id}`)
    if(response.ok) {
        const board = await response.json();
        // console.log("THUNK SINGLE BOARD and PINS", board)
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
        // console.log("CREATE", data)
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

export const followAUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/follow`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })
    if(response.ok) {
        const data = await response.json()

        dispatch(followUser(data))
        return data
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
        // console.log("EDITT", data)
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

//DELETE BOARD

export const deleteUserBoard = (id) => async (dispatch) => {
    const response = await fetch(`/api/boards/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })
    const data = await response.json()
    if(data.message === "Deleted") {
        dispatch(deleteBoard(id))
    }
}

export const unfollowAUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/unfollow`)
    if(response.ok) {
        const data = await response.json()

        dispatch(unfollowUser(data))
        return data
    }
}


const boardReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_BOARD_BY_USER:
            newState = {...state, ...action.boards}
            return newState
        // case GET_BOARD:
        //     const allBoards = []
        //     for (let board of action.boards['boards']) {
        //         allBoards.push(board)
        //     }
        //     return { ...state, 'posts': allBoards }
        case GET_SINGLE_BOARD:
            newState = { ...state, ...action.board.pins[0] }
            // console.log("STATE", newState)
            return newState
        case ADD_BOARD:
            newState = { ...state }
            let newBoard = [ ...newState.boards]
            newBoard.push(action.board)
            newState.boards = newBoard
            // newState[action.board.id] = action.board
            // console.log("ADDD BOARD", newState)
            return newState;
        case FOLLOW_USER:
            newState = { ...state }
            console.log("FOLLLOW STATE", newState)
            return newState;
        case EDIT_USER_BOARD:
            newState = { ...state }
            // console.log("EDITT REDUCER BOARD", newState)
            newState[action.board.boards.id] = action.board.boards
            return newState;
        case DELETE_USER_BOARD:
            newState = { ...state }
            delete newState[action.board.id]
            return newState;
        case UNFOLLOW_USER:
            newState = { ...state }
            console.log("UNFOLLOW STATE", newState)
            return newState;
        default:
            return state
    }
}

export default boardReducer;
