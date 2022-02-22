const GET_ALL_PINS = 'pins/GET_ALL_PINS';
const GET_SINGLE_PIN = 'pins/GET_SINGLE_PIN';

const ADD_SINGLE_PIN = 'pins/ADD_SINGLE_PIN';

const EDIT_USER_PIN = 'pins/EDIT_USER_PIN';

const DELETE_USER_PIN = 'pins/DELETE_USER_PIN';

//Action Creator
export const getAllPins = (pins) => ({
    type: GET_ALL_PINS,
    pins
})

export const getSinglePin = (pin) => ({
    type: GET_SINGLE_PIN,
    pin
})

export const addSinglePin = (pin) => ({
    type: ADD_SINGLE_PIN,
    pin
})

export const editSinglePin = (pin) => ({
    type: EDIT_USER_PIN,
    pin
})

export const deleteSinglePin = (pin) => ({
    type: DELETE_USER_PIN,
    pin
})

//Thunk Action Creator
// GET ALL PINS ON FEED PAGE
export const getAllPinsOnFeed = () => async (dispatch) => {
    const response = await fetch('/api/pins/')

    if(response.ok) {
        const data = await response.json()
        dispatch(getAllPins(data))
        // console.log("PIN THUNK", data)
        // return data
    }
}

//Get A Single Pin
export const getASinglePin = (id) => async (dispatch) => {
    const response = await fetch(`/api/pins/${id}`)

    if(response.ok) {
        const data = await response.json()
        dispatch(getSinglePin(data))
        // console.log("PIN THUNK", data)
        // return data
    }
}

//Create a Pin
export const createPin = (payload) => async(dispatch) => {
    const response = await fetch(`/api/pins/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": payload.title,
            "photo_url": payload.photoUrl,
            "description": payload.description,
            "source_link": payload.sourceLink,
            // "board_id": payload.boardId
        })
    })
    console.log("RESPONSE", response)

    if(response.ok) {
        const data = await response.json()
        // console.log("CREATE NEW PIN THUNK", data)
        dispatch(addSinglePin(data))
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

//EDIT PIN

export const updateUserPin = (payload) => async (dispatch) => {
    const response = await fetch(`/api/pins/${payload.id}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": payload.title,
            "photo_url": payload.photoUrl,
            "description": payload.description,
            "source_link": payload.sourceLink,
         })
    })

    if(response.ok) {
        const data = await response.json()
        console.log("EDIT PIN THUNK", data)
        dispatch(editSinglePin(data))
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

//Delete users pin
export const deleteUserPin = (id) => async (dispatch) => {
    const response = await fetch(`/api/pins/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })

    const data = await response.json()
    console.log("DATA IN DELETE PIN", data)
    if(data.message === "Deleted") {
        dispatch(deleteSinglePin(data))
    }
}

const pinReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ALL_PINS:
            newState = { ...state, ...action.pins }
            // console.log("PIN REDUCER", newState)
            return newState
        case GET_SINGLE_PIN:
            newState = { ...state, ...action.pin.pin }
            // console.log("PIN STATE", newState)
            return newState
        case ADD_SINGLE_PIN:
            newState = { ...state, [action.pin.id]: action.pin }
            // let newPin = [...newState.pins]
            // newPin.push(action.pin)
            // newState.pins = newPin
            // console.log("CREATE NEW PIN STATE", newState)
            return newState
        case EDIT_USER_PIN:
            newState = { ...state }
            newState[action.pin.id] = action.pin
            return newState
        case DELETE_USER_PIN:
            newState = { ...state }
            // console.log("DELETE STATE", newState)
            // console.log("DELETE STATE", action.pin)
            delete newState[action.pin.id]
            return newState
        // case GET_PINS_BY_BOARD:
        //     const allPins = []
        //     for (let pin of action.pins['pins']) {
        //         allPins.push(pin)
        //     }
        //     console.log("ALLLL PINS", allPins)
        //     return { ...state, 'pins': allPins}



        default:
            return state
    }
}

export default pinReducer;
