import authReducer from "./authReducer";
import {saveUsersAC} from "../actions/auth";
import {showUsersAC} from "../actions/ourCheerfulUsers";
import ourCheerfulUsersReducer from "./ourCheerfulUsersReducer";


test('show users', () => {
    let state = {
        serverData: {
            success: false,
        },
        total_pages: 0,
    };
    let data = {"total_pages" : 5, 'success' : true}
    let action = showUsersAC(data)
    let newState = ourCheerfulUsersReducer(state, action)
    expect(newState.total_pages).toBe(5);
    expect(newState.serverData.success).toBe(true);
});
