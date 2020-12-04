import { getProblem } from "../../api/requests";

const UPDATE_CODE = "UPDATE_CODE";
const UPDATE_CODE_MODE = "UPDATE_CODE_MODE";
const SET_PAGE = "SET_PAGE";
let initialState = {
    descriptionBlock: {
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
        readOnly: false
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
            newState.descriptionBlock = { ...state.descriptionBlock, text: action.data.text, cheats: action.data.cheats, examples: JSON.parse(action.data.examples) };
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
export let setPage = (data) => {
    return (
        {
            type: SET_PAGE,
            data
        }
    )
}

export const setPageThunkCreator = (id) => {
    return (dispatch) => {
        getProblem(id).then(response => {
            debugger;
            dispatch(setPage(response.item));
        });
    }
}
export default descriptionPage;