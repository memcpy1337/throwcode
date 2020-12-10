import { getProblem, submitProblem } from "../../api/requests";

const UPDATE_CODE = "UPDATE_CODE";
const UPDATE_CODE_MODE = "UPDATE_CODE_MODE";
const SET_PAGE = "SET_PAGE";
const NOT_AUTHORISED_ERROR = "NOT_AUTHORISED";
const CODE_SUBMIT_RESULT = "CODE_SUBMIT_RESULT";
const CODE_FETCHING = "CODE_FETCHING";
let initialState = {
    descriptionBlock: {
        id: null,
        text: "В этой задаче требуется найти сумму двух чисел",
        examples: [
            {
                text: "Input: a = 1, b = 2; Output: 3;"
            }
        ],
        cheats: "К этой задаче нет подсказок"
    },
    codeArea: {
        code: "vdsfsdfdsfuuhiiiiiiiiiiiiiiiiiiiiiiiisduifhus9dhfuisdhfuisdfhisdufhsdiufhsudihfu",
        codeMode: "javascript",
        readOnly: false,
        isFetching: false
    },
    notAuthorisedError: false,
    codeSumbitResult: {
        success: null,
        response: null
    }
};

let descriptionPage = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case UPDATE_CODE: {
            newState = { ...state };
            newState.codeArea = { ...state.codeArea };
            newState.codeArea.code = action.code.value;
            return newState;
        }
        case UPDATE_CODE_MODE: {
            debugger;
            newState = { ...state };
            newState.codeArea = { ...state.codeArea };
            newState.codeArea.codeMode = action.mode;
            return newState;
        }
        case SET_PAGE: {
            newState = { ...state };
            newState.descriptionBlock = { ...state.descriptionBlock, id: action.data.id, text: action.data.text, cheats: action.data.cheats, examples: JSON.parse(action.data.examples) };
            newState.codeSumbitResult = { ...state.codeSumbitResult, success: null, response: null };
            return newState;
        }
        case NOT_AUTHORISED_ERROR: {
            newState = { ...state };
            newState.notAuthorisedError = action.toogle
            return newState;
        }
        case CODE_FETCHING: {
            debugger;
            newState = { ...state };
            debugger;
            newState.codeArea = {...state.codeArea, isFetching: action.toogle};
            debugger;
            return newState;
        }
        case CODE_SUBMIT_RESULT: {
            newState = { ...state };
            debugger;
            newState.codeSumbitResult = { ...state.codeSumbitResult, success: action.data.success, response: action.data.response }
            return newState;
        }
        default:
            return state;
    }
}

export let updateCodeAC = (code) => {
    return (
        {
            type: UPDATE_CODE,
            code: code
        }
    )
}
export let updateCodeModeAC = (mode) => {
    return (
        {
            type: UPDATE_CODE_MODE,
            mode
        }
    )
}
const codeFetchingAC = (toogle) => {
    debugger;
    return {
        type: CODE_FETCHING,
        toogle
    }
}
export let setPage = (data) => {
    return (
        {
            type: SET_PAGE,
            data
        }
    )
}
export let toogleAuthorisedErrorAC = (toogle) => {
    return {
        type: NOT_AUTHORISED_ERROR,
        toogle
    }
}

export const setPageThunkCreator = (id) => {
    return (dispatch) => {
        getProblem(id).then(response => {
            debugger;
            dispatch(setPage(response.item));
        });
    }
}
const codeSubmitAC = (data) => {
    return {
        type: CODE_SUBMIT_RESULT,
        data
    }
}
export const codeSubmitThunkCreator = (id, lang, code) => {
    return (dispatch) => {
        debugger;
        dispatch(codeFetchingAC(true));
        debugger;
        submitProblem(id, lang, code).then(
            response => {
                dispatch(codeSubmitAC(response.data));
                dispatch(codeFetchingAC(false));
            },
            error => {
                dispatch(codeFetchingAC(false));
            }
        )
    }
}
export default descriptionPage;