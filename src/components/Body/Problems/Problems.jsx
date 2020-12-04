import React from 'react';
import PreloaderBig from '../../../elements/Preloaders/PreloaderBig';
import Filters from './Filters/Filters';
import ProblemItems from './ProblemItems/ProblemItems';
import styles from './Problems.module.css'
let Problems = (props) => {
    return (
        <div className={styles.problems}>
            <Filters />
            {
                !props.isFetchingProblems ? <ProblemItems problems={props.problems} />
                    :
                    <PreloaderBig />
            }
        </div>
    );
}
export default Problems;