import appReducer from './appReducer'
import {setInnerWidthAC} from "../actions/app";



test('change width', () => {
    let state = {
        innerWidth: 0
    };
    let action = setInnerWidthAC(2)
    let newState = appReducer(state, action)
    expect(newState.innerWidth).toBe(2);
});
