import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';
// Note: this API requires redux@>=3.1.0

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const CreateStore = initialState =>
  createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default CreateStore;