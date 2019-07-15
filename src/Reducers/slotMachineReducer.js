import {
    ACTIONS
} from '../Actions/slotMachineActions';

const initialState = {
    currency: 20,
};

const slotMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
};

export default slotMachineReducer;