const initialState = {
  currentUser: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':{
     // console.log(action,"ac");
      return { 
        ...state,
        currentUser: action.payload }
      }


      case 'LOGIN_USER':
        return {...state, currentUser: action.payload}
        
    case "LOGOUT_USER" :
      return {...state, currentUser: ''}
    default:
      return state;
  }

 
};

export default reducer;
