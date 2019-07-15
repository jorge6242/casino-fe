import Country from '../Api/Country';
import snackBarStatus from './snackbarActions';

export const ACTIONS = {
    GET_ALL: 'country/get_all',
    SET_LOADING: 'country/set_loading',
};

export const getAll = () => async dispatch => {
    dispatch({
        type: ACTIONS.SET_LOADING,
        payload: true,
    });
    try {
        const {
            data,
            status
        } = await Country.getAll();
        let response = [];
        if (status === 200) {
            response = data;
            dispatch({
                type: ACTIONS.GET_ALL,
                payload: response.countries,
            });
            dispatch({
                type: ACTIONS.SET_LOADING,
                payload: false,
            });
        }
        return response;
    } catch (error) {
        snackBarStatus({
            payload: {
                title: error.message,
                type: 'error',
                enable: true,
            },
        })(dispatch);
        dispatch({
            type: ACTIONS.SET_LOADING,
            payload: false,
        });
        return error;
    }
};

export const search = term => async dispatch => {
    dispatch({
        type: ACTIONS.SET_LOADING,
        payload: true,
    });
    try {
        const {
            data,
            status
        } = await Country.search(term);
        let response = [];
        if (status === 200) {
            response = data;
            dispatch({
                type: ACTIONS.GET_ALL,
                payload: response.countries
            });
            dispatch({
                type: ACTIONS.SET_LOADING,
                payload: false,
            });
        }
        return response;
    } catch (error) {
        snackBarStatus({
            payload: {
                title: error.message,
                type: 'error',
                enable: true,
            },
        })(dispatch);
        dispatch({
            type: ACTIONS.SET_LOADING,
            payload: false,
        });
        return error;
    }
};