import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Problem.module.css'
const Problem = (props) => {
    return (
        <div className={styles.problem}>
            <NavLink to={'/problems/' + props.id}>
                <div className={styles.problemTitle}>
                    <span>{props.title}</span>
                </div>
                <div className={styles.problemSolved}>
                    <span>Решили: {props.solved}</span>
                </div>
                <div className={styles.problemTrying}>
                    <span>Попыток: {props.trying}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Problem;