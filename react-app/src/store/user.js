// const LOAD_USERS = 'users/LOAD_USERS';
// const UPDATE = 'users/UPDATE';

// const FOLLOW_USER = 'users/FOLLOW_USER';
// const UNFOLLOW_USER = 'users/UNFOLLOW_USER';

// const loadUsers = (users) => ({
//     type: LOAD_USERS,
//     users
// })

// const updateUser = (user) => ({
//     type: UPDATE,
//     user
// })

// const followUser = (userId) => ({
//     type: FOLLOW_USER,
//     userId
// })

// const unfollowUser = (userId) => ({
//     type: UNFOLLOW_USER,
//     userId
// })


// export const followAUser = (id) => async (dispatch) => {
//     const response = await fetch(`/api/users/${id}/follow`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ id })
//     })
//     if (response.ok) {
//         const data = await response.json()

//         dispatch(followUser(data))
//         return data
//     }
// }

// export const unfollowAUser = (id) => async (dispatch) => {
//     const response = await fetch(`/api/users/${id}/unfollow`)
//     if (response.ok) {
//         const data = await response.json()

//         dispatch(unfollowUser(data))
//         return data
//     }
// }

// export const loadAllUsers = () => async dispatch => {
//     const response = await fetch('/api/users/');
//     if (response.ok) {
//         const users = await response.json();
//         dispatch(loadUsers(users));
//         return users;
//     }
// }

// //Create a route and a form to update user profile
// //info in api routes then create store to update




// const userReducer = (state = {}, action) => {
//     let newState = {}
//     switch (action.type) {
//         case LOAD_USERS:
//             const allUsers = {}
//             action.users.users.forEach(user => {
//                 allUsers[user.id] = user;
//             });
//             return { ...allUsers };
//         case FOLLOW_USER:
//             newState = { ...state }
//             // newState.user.following.push(action.user)
//             console.log("FOLLLOW STATE", newState)
//             return newState;
//         case UNFOLLOW_USER:
//             newState = { ...state }
//             console.log(newState)
//             // console.log(action.user.id)
//             // newState.user.following = newState.user.following.filter(u => u.id !== action.user.id)
//             // delete newState[action.user.id]
//             console.log("UNFOLLOW STATE", newState)
//             return newState;
//         default:
//             return state
//     }
// }

// export default userReducer;
