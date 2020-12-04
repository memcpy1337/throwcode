import React from 'react';
import Problem from './Problem/Problem';
import styles from './ProblemItems.module.css'
const ProblemItems = (props) => {
    let problemArr = props.problems.map(p => {
        return <Problem id={p.id} title={p.title} hardType={p.type} solved={p.solved} trying={p.trying} />
    })
    return (
        <div className={styles.problemItems}>
            {
                problemArr
            }
        </div>
    )
}

export default ProblemItems;