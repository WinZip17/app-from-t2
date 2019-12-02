import {SET_IS_VISIBLE, SET_TOKEN, SHOW_POSITION, UPDATE_PHOTO} from "../actions/registerUser";


let initialState = {
    photo_file_name: "Upload your photo",
    position_id: "",
    position_data: {
        positions: [],
        success: false
    },
    token: "",
    isVisible: false
};

const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        case SHOW_POSITION:
            return {...state, position_data: action.positionData};
        case UPDATE_PHOTO:
            return {
                ...state,
                photo_file_name: action.fileName || "Upload your photo"
            };
        case SET_IS_VISIBLE:
            return {...state, isVisible: action.setIsVisible};
        default:
            return state;
    }

};


export default registerUserReducer;
