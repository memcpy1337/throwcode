import React from 'react';
import styles from './CodeArea.module.css'
import ReactModal from 'react-modal';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/clike/clike.js';
import ButtonSmall from '../../../../../elements/Buttons/ButtonSmall/ButtonSmall';
import PreloaderBig from '../../../../../elements/Preloaders/PreloaderBig';
const CodeArea = (props) => {
    const updateCodeMode = (value) => {
        props.onUpdateCodeMode(optionValue.current.value);
    }
    const toogleModalOff = () => {
        props.notAuthErrorToogle(false);
    }
    let optionValue = React.createRef();
    let codeMode = props.codeArea.codeMode == "cplusplus" ? "text/x-c++src" : props.codeArea.codeMode;
    const modalStyle = {
        overlay: {
            background: "rgba(0, 0, 0, .7)"
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            background: "#24292e",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    }
    return (
        <div>
            <div className={styles.codeZone}>
                {
                    props.codeArea.isFetching ?
                        <div className={styles.preloader}>
                            <PreloaderBig />
                        </div>
                        : <span></span>
                }
                <div className={styles.codeInput}>
                    <CodeMirror
                        value={props.codeArea.code}
                        options={{
                            mode: codeMode,
                            theme: 'material',
                            lineNumbers: true,
                            readOnly: props.codeArea.isFetching ? true : false
                        }}
                        onBeforeChange={(editor, data, value) => {
                            props.onUpdateCode({ value }); // must be managed here
                        }}
                        onChange={(editor, metadata, value) => {
                            // final value, no need to setState here
                        }}
                    />
                </div>
            </div>
            <div className={styles.commandPanel}>
                <div className={styles.commandButtons}>
                    <ButtonSmall disabled={props.codeArea.isFetching ? true : false} onClick={props.codeSubmit} className={styles.buttonSubmit}>Отправить</ButtonSmall>
                    <select ref={optionValue} onChange={updateCodeMode} value={props.codeArea.codeMode} className={styles.selectLang} name="language" id="language">
                        <option value="javascript">Javascript</option>
                        <option value="cs">C#</option>
                        <option value="cplusplus">C++</option>
                    </select>
                </div>
            </div>
            <ReactModal
                style={modalStyle}
                isOpen={props.notAuthError}
                onClose={toogleModalOff}
                ariaHideApp={false}
                onRequestClose={toogleModalOff}
            >
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <div style={{ borderRadius: 25, textAlign: 'center', marginBottom: 10, color: 'white' }}>Для отправки решения необходима регистрация</div>
                    </div>
                    <div>
                        <ButtonSmall onClick={toogleModalOff}>Ок</ButtonSmall>
                    </div>
                </div>
            </ReactModal>
        </div>

    )
}

export default CodeArea;