import React from 'react';
import ButtonSmall from '../../../../elements/Buttons/ButtonSmall/ButtonSmall';
import Additional from './Additional/Additional';
import styles from './Filters.module.css'
import HardType from './HardType/HardType';
import Numeric from './Numeric/Numeric';
const Filters = (props) => {
    return (
        <div className={styles.filters}>
            <div className={styles.main}>
                <div className={styles.filtersContent}>
                    <div className={styles.filterTitle}>
                        Фильтры
                </div>
                    <HardType />
                    <Numeric />
                    <Additional />
                    <ButtonSmall className={styles.luckButton}>Мне повезет!</ButtonSmall>
                </div>
            </div>
        </div>
    )
}

export default Filters;