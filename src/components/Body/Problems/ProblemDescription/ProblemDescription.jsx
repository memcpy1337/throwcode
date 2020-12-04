import React from 'react';
import CodeArea from './CodeArea/CodeArea';
import ProblemDescriptionBlock from './Description/ProblemDescriptionBlock';
import styles from './ProblemDescription.module.css'
const ProblemDescription = (props) => {
    debugger;
    return (
        <div className={styles.description}>
            <ProblemDescriptionBlock description={props.description} />
            <CodeArea codeArea={props.codeArea} onUpdateCode={props.onUpdateCode} onUpdateCodeMode={props.onUpdateCodeMode}/>
        </div>
    )
}

export default ProblemDescription;