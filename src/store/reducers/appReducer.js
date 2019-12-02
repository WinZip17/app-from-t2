import {SET_INNER_WIDTH} from "../actions/app";

let initialState = {
    innerWidth: 0
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INNER_WIDTH:
            return {...state, innerWidth: action.innerWidth};
        default:
            return state;
    }
};

export default appReducer;
