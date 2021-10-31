import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default: 
            return state;
    };
};

export default sessionErrorsReducer;