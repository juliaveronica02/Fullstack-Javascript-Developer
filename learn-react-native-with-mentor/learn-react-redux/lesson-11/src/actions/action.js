// import the action_types.js and set the types.
import * as ACTION_TYPES from "./action_types"

// create a new export success javascript variable and set the type to action_types and dot (.) Success.
//  we can set the type to the string of success but using a separete action_type file is considered best practice and recommend.

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}

// case: these actions will describe what will happen and will be dispatched from a react redux container into a container.

export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}