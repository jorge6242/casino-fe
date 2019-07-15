import {
    ACTIONS
} from '../Actions/countryActions';

const initialState = {
    countries: [],
    isLoading: false,
};

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL:
            return {
                ...state,
                countries: action.payload,
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default countryReducer;