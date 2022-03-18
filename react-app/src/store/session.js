// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const FOLLOW_USER = 'session/FOLLOW_USER';
const UNFOLLOW_USER = 'session/UNFOLLOW_USER';


const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const followUser = (user) => ({
  type: FOLLOW_USER,
  user
})

const unfollowUser = (user) => ({
  type: UNFOLLOW_USER,
  user
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (payload) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "first_name": payload.first_name,
      "last_name": payload.last_name,
      "age": payload.age,
      "profile_img_url": payload.profileImgUrl,
      "username": payload.username,
      "email": payload.email,
      "password": payload.password,
      "repeat_password": payload.repeat_password
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
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
  if (response.ok) {
    const data = await response.json()

    dispatch(followUser(data))
    return data
  }
}

export const unfollowAUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/unfollow`)
  if (response.ok) {
    const data = await response.json()

    dispatch(unfollowUser(data))
    return data
  }
}


export default function reducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case FOLLOW_USER:
      newState = { ...state }
      newState.user.following.push(action.user)
      console.log("FOLLLOW STATE", newState)
      return newState;
    case UNFOLLOW_USER:
      newState = { ...state }
      // console.log(newState.user.following)
      // console.log(action.user.id)
      newState.user.following = newState.user.following.filter(u => u.id !== action.user.id)
      // delete newState[action.user.id]
      console.log("UNFOLLOW STATE", newState)
      return newState;
    default:
      return state;
  }
}
