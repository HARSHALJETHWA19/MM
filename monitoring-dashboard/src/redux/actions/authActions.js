import axios from 'axios';

export const loginUser = (userData) => (dispatch) => {
  axios.post('http://localhost:3001/api/auth/login', userData)
    .then((res) => {
      const { token, user } = res.data;
      localStorage.setItem('jwtToken', token);
      axios.defaults.headers.common['Authorization'] = token;
      dispatch(setCurrentUser(user));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};
