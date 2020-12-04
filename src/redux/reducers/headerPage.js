const TOOGLE_LOGIN_MODAL = "TOOGLE_LOGIN_MODAL";
const TOOGLE_REGISTER_MODAL = "TOOGLE_REGISTER_MODAL";
let initialState = {
    loginModal: {
        modalIsOpen: false
    },
    registerModal: {
        modalIsOpen: false
    }
}
const headerPage = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case TOOGLE_LOGIN_MODAL: {
            newState = { ...state }
            newState.loginModal = { ...state.loginModal }
            newState.loginModal.modalIsOpen = action.toogle;
            return newState;
        }
        case TOOGLE_REGISTER_MODAL: {
            newState = { ...state }
            newState.registerModal = { ...state.registerModal }
            newState.registerModal.modalIsOpen = action.toogle;
            return newState;
        }
        default:
            return state;
    }
}

export const toogleLoginModalAC = (toogle) => {
    return {
        type: TOOGLE_LOGIN_MODAL,
        toogle
    }
}
export const toogleRegisterModalAC = (toogle) => {
    return {
        type: TOOGLE_REGISTER_MODAL,
        toogle
    }
}

export default headerPage;