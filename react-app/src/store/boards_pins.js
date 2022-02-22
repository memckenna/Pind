//ACTIOn
//GET all boards for pin

//ADD pin to board

//DELETE pin from board


//ACTION CREATOR
//GET all boards for pin

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

//DELETE pin from board


//THUNK ACTION CREATOR
//GET all boards for pin

//ADD pin to board


//DELETE pin from board


//REDUCER


//CREATE COMPONENTS
//1. create modal for get all boards component
//2. component for each indivdual board details (img - title - save button) so that
//each individual mapping of the boards has its own state
//3. create a component for mapping the boards and pass in the <Board Details /> componenet as the mapping
//4. Add it to the create a Pin component and to each pin on feed page
