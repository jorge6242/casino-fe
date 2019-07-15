import AXIOS from '../Config/Axios';

export const ACTIONS = {
  RESPONSE_CODE: 'response/code',
};

export function setupInterceptors() {
  return dispatch => {
    AXIOS.interceptors.response.use(
      response => response,
      error => {
        const { status, data: { error: err } } = error.response;
          if (status === 401 && err !== 'unauthorized') {
            window.location.href = '/';
          }
        return Promise.reject(error.response.data);
      },
    );
  };
}
