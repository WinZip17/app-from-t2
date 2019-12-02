import {API} from "../../api/API";

//constant
export const SAVE_USERS = 'SAVE_USERS';


//action
export const saveUsersAC = (data) => ({type: SAVE_USERS, data: data.user});


//Thunk
export const getUsersByIdThunkCreator = (id) => {
    return (dispatch) => {
        API.getUserById(id)
            .then(data => {
                dispatch(saveUsersAC(data));
            });
    };
};



