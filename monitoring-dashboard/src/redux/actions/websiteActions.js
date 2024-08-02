import axios from 'axios';

export const fetchWebsites = () => dispatch => {
  axios.get('/api/websites')
    .then(res => {
      dispatch(setWebsites(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const setWebsites = (websites) => {
  return {
    type: 'SET_WEBSITES',
    payload: websites,
  };
};
