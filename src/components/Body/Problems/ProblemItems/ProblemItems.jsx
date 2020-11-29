import React from 'react';
import Problem from './Problem/Problem';
import styles from './ProblemItems.module.css'
const ProblemItems = (props) => {
    return (
        <div className={styles.problemItems}>
            <Problem />
        </div>
    )
}

export default ProblemItems;