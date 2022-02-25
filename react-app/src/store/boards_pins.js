//CONSTANTS
const GET_BOARD_PINS = "board_pin/GET_BOARD_PINS";
const GET_BOARDS_FOR_PIN = "board_pin/GET_BOARDS_FOR_PIN";

const ADD_BOARD_PIN = "board_pin/ADD_BOARD_PIN";

const REMOVE_BOARD_PIN = "board_pin/REMOVE_BOARD_PIN";

//ACTIONs
const getBoardPin = (data) => ({
    type: GET_BOARD_PINS,
    data
})

const getBoardsForAPin = (boards) => ({
    type: GET_BOARDS_FOR_PIN,
    boards
})

const addBoardPin = (data) => ({
    type: ADD_BOARD_PIN,
    data
})

const removeBoardPin = (data) => ({
    type: REMOVE_BOARD_PIN,
    data
})


// THUNK ACTIONS

//GET: get all pins from a board
//Passing into SingleBoard.js
export const getAllBoardPins = (boardId) => async (dispatch) => {
    const response = await fetch(`/api/boardpins/${boardId}`)
    const pins = await response.json()
    dispatch(getBoardPin(pins))
    return pins;
}

//GET: get all boards for a pin
export const getAllBoardsForPin = (boardId) => async (dispatch) => {
    const response = await fetch(`/api/boardpins/${boardId}/boards`)
    const boards = await response.json()
    dispatch(getBoardsForAPin(boards))
    return boards
}


//POST: add a pin to a board
export const createBoardPin = (boardId, pinId) => async (dispatch) => {
    const response = await fetch(`/api/boardpins/${boardId}/boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pinId})
    })

    const pin = await response.json();
    dispatch(addBoardPin(pin))
    return pin;
}


export const removePin = (boardId, pinId) => async (dispatch) => {
    const response = await fetch(`/api/boardpins/${boardId}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pinId})
    })
    const pin = await response.json()

    dispatch(removeBoardPin(pin))
    return pin;
}


//ADD pin to board
//EXAMPLE
// export const createPin = (boardId, payload) => async(dispatch) => {
//     const response = await fetch(`/api/pins/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "title": payload.title,
//             "photo_url": payload.photoUrl,
//             "description": payload.description,
//             "source_link": payload.sourceLink,
//             // "board_id": payload.boardId
//         })
//     })
//     console.log("RESPONSE", response)

//     if(response.ok) {
//         const data = await response.json()
//         // console.log("CREATE NEW PIN THUNK", data)
//         dispatch(addSinglePin(data))
//         return data
//     } else if (response.status < 500) {
//         const data = await response.json()
//         if(data.errors) {
//             return data.errors
//         }
//     } else {
//         return ['An error occured. Please try again']
//     }
// }


//REDUCER
const boardPinReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_BOARD_PINS:
            newState = {}
            action.data['board_pin'].forEach(pin => {
                newState[pin.id] = pin
            })
            return newState;
        case GET_BOARDS_FOR_PIN:
            newState = { ...state, ...action.boards }


        case ADD_BOARD_PIN:
            newState = { ...state }
            newState[action.data.id] = action.data
            return newState;

        case REMOVE_BOARD_PIN:
            newState = { ...state }
            delete newState[action.data.id];
            return newState;

        default:
            return state
    }
}

export default boardPinReducer;



//CREATE COMPONENTS
//1. create modal to get all boards component
//2. component for each indivdual board details (img - title - save button) so that
//each individual mapping of the boards has its own state
//3. create a component for mapping the boards and pass in the <Board Details /> componenet as the mapping
//4. Add it to the create a Pin component and to each pin on feed page
