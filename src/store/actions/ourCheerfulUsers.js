import {API} from "../../api/API";


//constant
export const SHOW_USERS = 'SHOW_USERS';
export const SHOW_MORE = 'SHOW_MORE';
export const ADD_ELEMENTS_USER_LIST = 'ADD_ELEMENTS_USER_LIST';
export const RESET_USER_LIST = 'RESET_USER_LIST';


//action
export const showUsersAC = (data) => ({type: SHOW_USERS, data: data});
const addElementsUserListAC = (serverData) => ({type: ADD_ELEMENTS_USER_LIST, serverData: serverData});
const showMoreUsersAC = (page, data) => ({type: SHOW_MORE, page: page, data: data});


//Thunk
export const getUsersThunkCreator = (page , count) => {
    return (dispatch) => {
        API.getUsers(page , count)
            .then(data => {
                dispatch(showUsersAC(data));
                dispatch(addElementsUserListAC(data));
            })
    }
};

export const showUsersThunkCreator = (page , count) => {
    return (dispatch) => {
        API.getUsers(page , count)
            .then(data => {
                return dispatch(showMoreUsersAC(page, data));
            })
    }
};
