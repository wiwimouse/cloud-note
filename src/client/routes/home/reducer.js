import { types } from './action';

const initialState = {
  notes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      }
    default:
      return state;
  }
};
