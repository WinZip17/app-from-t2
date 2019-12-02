import {SAVE_USERS} from "../actions/auth";

let initialState = {
    superUserInfo: {
        email: "",
        id: "",
        name: "",
        phone: "",
        photo: "",
        position: "",
        position_id: "",
        registration_timestamp: 0
    },
    isVisibleMenu: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USERS:
            return {...state, superUserInfo: action.data};
        default:
            return state;
    }
};

export default authReducer;