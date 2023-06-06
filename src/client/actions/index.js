import axios from "axios";

// TYPES
export const FETCH_USERS = 'fetch_users';

// ACTION CREATORS
// > "action creators" are functions that returns a function
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};
