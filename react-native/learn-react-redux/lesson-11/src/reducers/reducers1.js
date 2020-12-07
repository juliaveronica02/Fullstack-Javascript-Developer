import * as ACTION_TYPES from "../actions/action_types"

// setting variabel called initial state to javascript object.
const initialState = {
    stateProps1: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SUCCESS: 
        return {
            ...state,
            stateProps1: true
        }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                stateProps1: false
            }
            default: 
            return state
    }
}

export default rootReducer