import React from 'react';
import CodeArea from './CodeArea/CodeArea';
import ProblemDescriptionBlock from './Description/ProblemDescriptionBlock';
import styles from './ProblemDescription.module.css'
const ProblemDescription = (props) => {
    debugger;
    return (
        <div className={styles.description}>
            <ProblemDescriptionBlock description={props.description} codeSubmitResult={props.codeSubmitResult} />
            <CodeArea codeArea={props.codeArea} onUpdateCode={props.onUpdateCode} onUpdateCodeMode={props.onUpdateCodeMode} codeSubmit={props.codeSubmit} notAuthError={props.notAuthError}  notAuthErrorToogle={props.notAuthErrorToogle}/>
        </div>
    )
}

export default ProblemDescription;