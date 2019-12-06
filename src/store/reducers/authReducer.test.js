import authReducer from "./authReducer";
import {saveUsersAC} from "../actions/auth";


test('add e-mail header user', () => {
    let state = {
        superUserInfo: {
            email: "",
        }};
    let data = {"user" : {"email" : "axaxaxax@ua.ua"}};
    let action = saveUsersAC(data);
    let newState = authReducer(state, action);
    expect(newState.superUserInfo.email).toBe("axaxaxax@ua.ua");
});
