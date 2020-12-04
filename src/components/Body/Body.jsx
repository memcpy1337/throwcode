import React from 'react';
import { Route } from 'react-router-dom';
import styles from './Body.module.css'
import ProblemContainer from './Problems/ProblemContainer';
import ProblemDescriptionContainer from './Problems/ProblemDescription/ProblemDescriptionContainer';

let Body = (props) => {
    return (
        <div className={styles.body}>
            <Route exact path="/problems" render={() => <ProblemContainer />} />
            <Route exact path='/problems/:id' render={() => <ProblemDescriptionContainer />} />
        </div>
    );

}
export default Body;