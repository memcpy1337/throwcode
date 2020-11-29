import React from 'react';
import styles from './HardType.module.css'
const HardType = (props) => {
    return (
        <div className={styles.filterHardType}>
            <div className={styles.filterHard}>Сложность</div>
            <div className={styles.filterCheckbox}>
                <input type="checkbox" id="easy" name="easy" value="yes" />
                <label for="easy">Легкие</label>
            </div>
            <div className={styles.filterCheckbox}>
                <input type="checkbox" id="middle" name="middle" value="yes" />
                <label for="middle">Средние</label>
            </div>
            <div className={styles.filterCheckbox}>
                <input type="checkbox" id="hard" name="hard" value="yes" />
                <label for="hard">Сложные</label>
            </div>
        </div>
    )
}

export default HardType;