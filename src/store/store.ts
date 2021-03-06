import {applyMiddleware, createStore} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducers from './reducers';
import { AppActions } from './actions';


const store = createStore(rootReducers, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));

export type AppState = ReturnType<typeof rootReducers>
export default store;