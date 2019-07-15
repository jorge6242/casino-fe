export const ACTIONS = {
  STATUS: 'snackbar/status',
  CLEAR: 'snackbar/clear',
};

const snackBarStatus = value => dispatch => {
  dispatch({
    type: ACTIONS.STATUS,
    ...value
  });
};

export const clearSnackBarStatus = () => dispatch => {
  dispatch({
    type: ACTIONS.CLEAR
  });
};

export default snackBarStatus;