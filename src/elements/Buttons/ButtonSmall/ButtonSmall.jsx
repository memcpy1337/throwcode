import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonSmall.module.css'
const ButtonSmall = (props) => {
    return (
        <div>
            <Link onClick={props.action} class={styles.square_btn}>{props.text}</Link>
        </div>
    )
}

export default ButtonSmall;