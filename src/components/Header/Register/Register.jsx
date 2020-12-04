import React from 'react';
import ReactModal from 'react-modal';
import ButtonSmall from '../../../elements/Buttons/ButtonSmall/ButtonSmall';
const Register = (props) => {
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
    return (
        <div>
            <ButtonSmall onClick={toogleModalOn} >Регистрация </ButtonSmall>
            <ReactModal
            style={modalStyle}
                isOpen={props.registerModal.modalIsOpen}
                onClose={toogleModalOff}
                ariaHideApp={false}
                onRequestClose={toogleModalOff}
            >
                <div>
                    <input style={{borderRadius: 25, textAlign: 'center', marginBottom: 10}} type="text" placeholder="Логин"></input>
                </div>
                <div>
                    <input style={{borderRadius: 25, textAlign: 'center', marginBottom: 10}} type="text" placeholder="Почта"></input>
                </div>
                <div>
                    <input style={{borderRadius: 25, textAlign: 'center', marginBottom: 10}} type="password" placeholder="Пароль"></input>
                </div>
                <div style={{textAlign: 'center'}}>
                <ButtonSmall >Зарегистрироваться</ButtonSmall>
                </div>
            </ReactModal>
        </div>
    );

}
export default Register;