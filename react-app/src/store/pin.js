const GET_ALL_PINS = 'pins/GET_ALL_PINS';
const GET_SINGLE_PIN = 'pins/GET_SINGLE_PIN';

const ADD_PIN = 'pins/ADD_PIN';

//Action Creator
export const getAllPins = (pins) => ({
    type: GET_ALL_PINS,
    pins
})

export const getSinglePin = (pin) => ({
    type: GET_SINGLE_PIN,
    pin
})

export const addPin = (pin) => ({
    type: ADD_PIN,
    pin
})

//Thunk Action Creator
// GET ALL PINS ON FEED PAGE
export const getAllPinsOnFeed = () => async (dispatch) => {
    const response = await fetch('/api/pins')

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
        console.log("PIN THUNK", data)
        // return data
    }
}

//Create a Pin
export const createPin = (formData) => async(dispatch) => {
    const response = await fetch(`/api/pins/create_pin`, {
        method: 'POST',
        body: formData
    })

    if(response.ok) {
        const data = await response.json()
        dispatch(addPin(data))
        console.log("CREATE NEW PIN THUNK", data)
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

const pinReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ALL_PINS:
            newState = { ...state, ...action.pins }
            console.log("PIN REDUCER", newState)
            return newState
        case GET_SINGLE_PIN:
            newState = { ...state, ...action.pin.pin }
            console.log("PIN STATE", newState)
            return newState
        case ADD_PIN:
            newState = { ...state, [action.pin.id]: action.pin }
            // let newPin = [...newState.pins]
            // newPin.push(action.pin)
            // newState.pins = newPin
            console.log("CREATE NEW PIN STATE", newState)
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
