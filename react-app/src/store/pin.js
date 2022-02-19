const GET_ALL_PINS = 'pins/GET_ALL_PINS';

//Action Creator
export const getAllPins = (pins) => ({
    type: GET_ALL_PINS,
    pins
})

//Thunk Action Creator
// GET ALL PINS ON FEED PAGE
export const getAllPinsOnFeed = () => async (dispatch) => {
    const response = await fetch('/api/pins/')

    if(response.ok) {
        const data = await response.json()
        dispatch(getAllPins(data))
        console.log("PIN THUNK", data)
        // return data
    }
}



const pinReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_ALL_PINS:
            const allPins = {}

            newState = { ...state, ...action.pins }
            console.log("PIN REDUCER", newState)
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
