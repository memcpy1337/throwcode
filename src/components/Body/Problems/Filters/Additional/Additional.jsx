import React from 'react';
import styles from './Additional.module.css'
const Additional = (props) => {
    return (
        <div className={styles.additional}>
            <div className={styles.additionalTitle}>Дополнительно</div>
            <div className={styles.additionalCheckbox}>
                <input type="checkbox" id="solved" name="solved" value="yes" />
                <label for="solved">Показывать решенные</label>
            </div>
            <div className={styles.additionalCheckbox}>
                <input type="checkbox" id="show_new" name="show_new" value="yes" />
                <label for="show_new">Показывать только новые</label>
            </div>
        </div>
    )
}

export default Additional;