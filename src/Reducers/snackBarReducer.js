import { ACTIONS } from '../Actions/snackbarActions';

const initialState = {
  enable: false,
  title: 'snackbar',
  type: 'error',
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.STATUS:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.CLEAR:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
