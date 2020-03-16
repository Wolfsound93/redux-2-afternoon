import axios from 'axios';

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

//CREATE THE BASE ACTION TYPES YOU WILL USE
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {
  let data = axios.get('/auth/user-data').then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
};

// EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT TO THE STORE
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + '_FULFILLED':
      const { email, firstName, lastName } = action.payload.user;
      return { email, firstName, lastName };
    default:
      return state;
  }
}
