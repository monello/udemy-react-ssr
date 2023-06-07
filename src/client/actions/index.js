// TYPES
export const FETCH_USERS = 'fetch_users';

// ACTION CREATORS
// > "action creators" are functions that returns a function
export const fetchUsers = () => async (dispatch, _getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};
