import { getAuthStatus, getAuthToken } from "../../api/requests";

const LOGIN_FIELD_CHANGE = "LOGIN_FIELD_CHANGE";
const PASSWORD_FIELD_CHANGE = "PASSWORD_FIELD_CHANGE";
const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
const INCORRECT_AUTH = "INCORRECT_AUTH";
const GET_AUTH_STATUS = "GET_AUTH_STATUS";
let initialState = {
    auth: {
        loginField: null,
        passwordField: null,
        invalidAttempt: false
    },
    register: {
        loginField: null,
        passwordField: null,
        emailField: null
    },
    userId: null,
    userLogin: null,
    isAuth: false,
    jwtToken: null
}
const authPage = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOGIN_FIELD_CHANGE: {
            newState = { ...state };
            newState.auth = { ...state.auth, loginField: action.data };
            return newState;
        }
        case PASSWORD_FIELD_CHANGE: {
            newState = { ...state };
            newState.auth = { ...state.auth, passwordField: action.data };
            return newState;
        }
        case SET_AUTH_TOKEN: {
            debugger;
            newState = { ...state };
            newState.isAuth = true;
            newState.jwtToken = action.token;
            localStorage.setItem('token', action.token);
            return newState;
        }
        case INCORRECT_AUTH: {
            newState = { ...state };
            newState.auth = {...state.auth, invalidAttempt: true}
            return newState;
        }
        case GET_AUTH_STATUS: {
            debugger;
            newState = {...state, ...action.data };
            return newState;
        }
        default:
            return state;
    }
}

export default authPage;

export const loginChangeAC = (data) => {
    return {
        type: LOGIN_FIELD_CHANGE,
        data
    }
}
export const passwordChangeAC = (data) => {
    return {
        type: PASSWORD_FIELD_CHANGE,
        data
    }
}
export const setTokenAC = (token) => {
    return {
        type: SET_AUTH_TOKEN,
        token
    }
}
export const incorrectAuthAC = () => {
    return {
        type: INCORRECT_AUTH
    }
}
const getAuthStatusAC = (data) => {
    return {
        type: GET_AUTH_STATUS,
        data
    }
}
export const getTokenThunkCreator = (usr, pass) => {
    debugger;
    return (dispatch) => {
        getAuthToken(usr, pass).then(
            response => {
                debugger;
                dispatch(setTokenAC(response))
            },
            error => {
                debugger;
                dispatch(incorrectAuthAC());
            });
    }
}
export const getAuthStatusThunkCreator = () => {
    return (dispatch) => {
        getAuthStatus().then(
            response => {
                dispatch(getAuthStatusAC(response.data));
            },
            error => {
                const obj = {
                    userId: null,
                    userLogin: null,
                    isAuth: false
                }
                dispatch(getAuthStatusAC(obj));
            }

        )
    }
}