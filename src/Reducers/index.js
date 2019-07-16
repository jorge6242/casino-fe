import {
    combineReducers
} from 'redux';
import {
    reducer as form
} from 'redux-form';
import modalReducer from './modalReducer';
import snackBarReducer from './snackBarReducer';
import countryReducer from './countryReducer';
import slotMachineReducer from './slotMachineReducer';

const rootReducer = combineReducers({
    modalReducer,
    form,
    snackBarReducer,
    countryReducer,
    slotMachineReducer,
});

export default rootReducer;