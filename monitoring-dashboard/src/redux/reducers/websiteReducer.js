const initialState = {
    websites: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'SET_WEBSITES':
        return {
          ...state,
          websites: action.payload,
        };
      default:
        return state;
    }
  }
  