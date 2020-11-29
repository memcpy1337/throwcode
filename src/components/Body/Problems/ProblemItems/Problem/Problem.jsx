import React from 'react';
import styles from './Problem.module.css'
const Problem = (props) => {
    return (
        <div className={styles.problem}>
          <div className={styles.problemTitle}>
              <span>Сумма двух чисел</span>
          </div>
        </div>
    )
}

export default Problem;