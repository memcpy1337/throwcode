import problemsPage from './reducers/problemsPage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import descriptionPage from './reducers/descriptionPage';
import headerPage from './reducers/headerPage';
import thunkMiddleWare from 'redux-thunk';
import authPage from './reducers/authPage';

const reducers = combineReducers({
    problemsPage: problemsPage,
    descriptionPage: descriptionPage,
    headerPage: headerPage,
    authPage: authPage
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;