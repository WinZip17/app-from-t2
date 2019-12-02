import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import ourCheerfulUsersReducer from "./reducers/ourCheerfulUsersReducer";
import authReducer from "./reducers/authReducer";
import registerUserReducer from "./reducers/registerUserReducer";
import appReducer from "./reducers/appReducer";


export let reducers = combineReducers({
    userList: ourCheerfulUsersReducer,
    authUser: authReducer,
    registerUser: registerUserReducer,
    app: appReducer,
});

let store = createStore(reducers,
    applyMiddleware(thunk));

window.store = store;

export default store;
