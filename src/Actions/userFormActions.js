export const ACTIONS = {
    SET_EDIT: 'user_form/set_edit',
    CLEAR: 'user_form/clear',
  };
  
  export const setEdit = product => ({
    type: ACTIONS.SET_EDIT,
    payload: product
  });
  
  export const clear = () => ({
    type: ACTIONS.CLEAR
  });