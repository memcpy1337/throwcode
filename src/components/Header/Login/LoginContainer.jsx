import React from 'react';
import { connect } from 'react-redux';
import { getTokenThunkCreator, loginChangeAC, passwordChangeAC } from '../../../redux/reducers/authPage';
import Login from './Login';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    getToken() {
        this.props.getToken(this.props.login.loginField, this.props.login.passwordField);
    }
    render() {
        return (
            <Login getToken={this.getToken.bind(this)} loginModal={this.props.loginModal} toogleModal={this.props.toogleModal} login={this.props.login} changeLoginField={this.props.changeLoginField} changePasswordField={this.props.changePasswordField} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.authPage.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeLoginField: (data) => {
            dispatch(loginChangeAC(data));
        },
        changePasswordField: (data) => {
            dispatch(passwordChangeAC(data));
        },
        getToken: (usr, pass) => {
            dispatch(getTokenThunkCreator(usr, pass));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);