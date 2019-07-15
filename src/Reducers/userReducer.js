import {
    ACTIONS
} from '../Actions/userActions';

const initialState = {
    users: [],
    usersAvailable: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                users: action.payload,
            };
        case ACTIONS.GET_AVAILABLE_USERS:
            return {
                ...state,
                usersAvailable: action.payload,
            };
        case ACTIONS.UPDATE:
            return {
                ...state,
                usersAvailable: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;