const initialState = {};

const reducer = (state = initialState, action) => {
  if (action.type == "GET_DATA") {
    return action.payload;
  }
  return state;
};

export default reducer;
