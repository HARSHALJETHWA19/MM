const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          isAuthenticated: !!action.payload,
          user: action.payload,
        };
      default:
        return state;
    }
  }
  