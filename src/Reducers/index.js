import {
    combineReducers
} from 'redux';
import {
    reducer as form
} from 'redux-form';
import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import userReducer from './userReducer';
import userFormReducer from './userFormReducer';
import countryReducer from './countryReducer';
import slotMachineReducer from './slotMachineReducer';

const rootReducer = combineReducers({
    modalReducer,
    form,
    snackBarReducer,
    userReducer,
    userFormReducer,
    countryReducer,
    slotMachineReducer,
});

export default rootReducer;