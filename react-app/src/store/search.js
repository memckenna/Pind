const GET_BOARD_SEARCH = 'search/GET_BOARD_SEARCH';


const getSearchedBoards = (boards) => ({
    type: GET_BOARD_SEARCH,
    boards
});


export const getBoardsBySearch = (query) => async (dispatch) => {
    // console.log("QUERY IN THUNK", query)
    const response = await fetch(`/api/search/boards/${query}/all`);

    if(response.ok) {
        const data = await response.json();

        // dispatch(getSearchedBoards(data))
        dispatch(getSearchedBoards(data.boards))
        console.log("SEARCH THUNK", data)
        return data
    }
}


const searchReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_BOARD_SEARCH:
            newState = {...state, ...action.boards}
            console.log("SEARCH STATE", newState)
            // newState = action.boards
            return newState
        default:
            return state;
    }
}

export default searchReducer;
