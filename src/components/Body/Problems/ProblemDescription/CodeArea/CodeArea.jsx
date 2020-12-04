import React from 'react';
import styles from './CodeArea.module.css'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/javascript/javascript.js';

import ButtonSmall from '../../../../../elements/Buttons/ButtonSmall/ButtonSmall';
const CodeArea = (props) => {
    const updateCodeMode = (value) => {
        props.onUpdateCodeMode(optionValue.current.value);
    }
    let optionValue = React.createRef();
    let codeMode = props.codeArea.codeMode;
    return (
        <div>
            <div className={styles.codeZone}>
                <CodeMirror
                    value={props.codeArea.code}
                    options={{
                        mode: codeMode,
                        theme: 'material',
                        lineNumbers: true
                    }}
                    onBeforeChange={(editor, data, value) => {
                        props.onUpdateCode({ value }); // must be managed here
                    }}
                    onChange={(editor, metadata, value) => {
                        // final value, no need to setState here
                    }}
                />
            </div>
            <div className={styles.commandPanel}>
                <div className={styles.commandButtons}>
                    <ButtonSmall className={styles.buttonSubmit}>Отправить</ButtonSmall>
                    <select ref={optionValue} onChange={updateCodeMode} value={props.codeArea.codeMode} className={styles.selectLang} name="language" id="language">
                        <option value="javascript">Javascript</option>
                        <option value="cs">C#</option>
                        <option value="cplusplus">C++</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default CodeArea;