import { getProblems } from "../../api/requests";

const SET_PROBLEMS = "SET_PROBLEMS";
const TOOGLE_FETCHING = "TOOGLE_FETCHING";
let initialState = {
    problems: [],
    isFetchingProblems: false,
    filters: []
};

let problemsPage = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PROBLEMS: {
            newState = { ...state };
            newState.problems = action.problems;
            return newState;
        }
        case TOOGLE_FETCHING: {
            newState = { ...state };
            newState.isFetchingProblems = action.toogle;
            return newState;
        }
        default:
            return state;
    }
}
export const getProblemsThunkCreator = () => {
    return (dispatch) => {
        dispatch(toogleFetchingAC(true));
        getProblems().then(response => {
            dispatch(toogleFetchingAC(false));
            dispatch(setProblemsAC(response.items));
        });
    }
}
const setProblemsAC = (problems) => {
    return {
        type: SET_PROBLEMS,
        problems
    }
}
const toogleFetchingAC = (toogle) => {
    return {
        type: TOOGLE_FETCHING,
        toogle
    }
}
export default problemsPage;