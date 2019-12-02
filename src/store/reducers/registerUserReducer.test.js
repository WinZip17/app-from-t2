import {updatePhotoAC} from "../actions/registerUser";
import registerUserReducer from "./registerUserReducer";


test('change name photo', () => {
    let state = {
        photo_file_name: "Upload your photo",
        position_id: "",
        position_data: {
            positions: [],
            success: false
        },
        token: "",
        isVisible: false
    };
    let data = "test name.jpg"
    let action = updatePhotoAC(data)
    let newState = registerUserReducer(state, action)
    expect(newState.photo_file_name).toBe("test name.jpg");
});
