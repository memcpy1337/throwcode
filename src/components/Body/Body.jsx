import React from 'react';
import { Route } from 'react-router-dom';
import Problems from './Problems/Problems';
import styles from './Body.module.css'
let Body = (props) => {
    return (
        <div className={styles.body}>
            <Route path="/problems" render={() => <Problems />} />
        </div>
    );

}
export default Body;