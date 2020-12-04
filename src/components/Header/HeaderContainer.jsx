import React from 'react';
import { connect } from 'react-redux';
import { toogleLoginModalAC, toogleRegisterModalAC } from '../../redux/reducers/headerPage';
import Header from './Header';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header loginModal={this.props.loginModal}
            isAuth={this.props.isAuth}
             toogleLoginModal={this.props.toogleLoginModal.bind(this)}
             registerModal={this.props.registerModal} 
             toogleRegisterModal={this.props.toogleRegisterModal.bind(this)}
             />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        loginModal: state.headerPage.loginModal,
        isAuth: state.authPage.isAuth,
        registerModal: state.headerPage.registerModal
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toogleLoginModal: (toogle) => {
            dispatch(toogleLoginModalAC(toogle));
        },
        toogleRegisterModal: (toogle) => {
            dispatch(toogleRegisterModalAC(toogle));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)