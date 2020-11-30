import React from 'react';
import Filters from './Filters/Filters';
import ProblemItems from './ProblemItems/ProblemItems';
import styles from './Problems.module.css'
let Problems = (props) => {
    return (
        <div className={styles.problems}>
            <Filters />
            <ProblemItems />
        </div>
    );
}
export default Problems;