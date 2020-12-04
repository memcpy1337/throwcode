import React from 'react';
import ReactModal from 'react-modal';
import ButtonSmall from '../../../elements/Buttons/ButtonSmall/ButtonSmall';
import styles from './Login.module.css'
const Login = (props) => {
    const loginRef = React.createRef();
    const passwordRef = React.createRef();
    const modalStyle = {
        overlay: {
            background: "rgba(0, 0, 0, .7)"
        },
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          background: "#24292e",
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    }
    const toogleModalOn = () => {
        props.toogleModal(true);
    }
    const toogleModalOff = () => {

        props.toogleModal(false);
    }
    const changeLoginField = () => {
        let fieldValue = loginRef.current.value;
        props.changeLoginField(fieldValue)
    }
    const changePasswordField = () => {
        let fieldValue = passwordRef.current.value;
        props.changePasswordField(fieldValue)
    }
    return (
        <div>
            <ButtonSmall onClick={toogleModalOn} >Войти</ButtonSmall>
            <ReactModal
            style={modalStyle}
                isOpen={props.loginModal.modalIsOpen}
                onClose={toogleModalOff}
                ariaHideApp={false}
                onRequestClose={toogleModalOff}
            >
                <div>
                    <input ref={loginRef} style={{borderRadius: 25, textAlign: 'center', marginBottom: 10}} type="text" placeholder="Логин" value={props.login.loginField} onChange={changeLoginField}></input>
                </div>
                <div>
                    <input ref={passwordRef} style={{borderRadius: 25, textAlign: 'center', marginBottom: 10}} type="password" placeholder="Пароль" value={props.login.passwordField} onChange={changePasswordField} ></input>
                </div>
                <div style={{textAlign: 'center'}}>
                    {
                        props.login.invalidAttempt ? <div style={{marginBottom: 10, color: 'red'}}>Неверные данные</div> : <div></div>
                    }
                <ButtonSmall onClick={props.getToken}>Войти</ButtonSmall>
                </div>
            </ReactModal>
        </div>
    );

}
export default Login;