import {API} from "../../api/API";


//constant
export const SET_TOKEN = 'SET_TOKEN';
export const SHOW_POSITION = 'SHOW_POSITION';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const SET_IS_VISIBLE = 'SET_IS_VISIBLE';


//action
const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});
export const updatePhotoAC = (fileName) => ({type: UPDATE_PHOTO, fileName: fileName});
export const setIsVisibleAC = (setIsVisible) => ({type: SET_IS_VISIBLE, setIsVisible: setIsVisible});
export const resetListAC = () => ({type: "RESET_USER_LIST"});


//Thunk
export const getTokenThunkCreator = () => {
    return (dispatch) => {
        API.getToken()
            .then(data => {
                dispatch(setTokenAC(data));
            })
    }
};

export const getPositionThunkCreator = () => {
    return (dispatch) => {
        API.getPositions()
            .then(data => {
                dispatch(showPositionAC(data));
            });
    }
};
