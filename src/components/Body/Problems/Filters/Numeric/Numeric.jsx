import React from 'react';
import styles from './Numeric.module.css'
const Numeric = (props) => {
    return (
        <div className={styles.numeric}>
            <div>
                <div className={styles.titleSolved}>Решили</div>
                <div>
                    <input className={styles.inputSolved} id="min" type="inputbox" value='' placeholder="мин."></input>
                    <span style={{color: "white"}}>   —   </span>
                    <input className={styles.inputSolved} id="max" type="inputbox" value='' placeholder="макс."></input>
                </div>
            </div>
            <div>
                <div className={styles.titleTry}>Попыток</div>
                <div>
                    <input className={styles.inputTry} id="min" type="inputbox" value='' placeholder="мин." ></input>
                    <span style={{color: "white"}}>   —   </span>
                    <input className={styles.inputTry}  id="max" type="inputbox" value='' placeholder="макс."></input>
                </div>
            </div>
        </div>
    )
}

export default Numeric;