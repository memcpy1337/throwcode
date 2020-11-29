import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ButtonSmall from '../../elements/Buttons/ButtonSmall/ButtonSmall';
import style from "./Header.module.css"
let Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logoImage}>
                <Link to='/'>
                    <img src="/logo.png" alt="My logo"></img>
                </Link>
            </div>
            <div className={style.nav}>
                <nav>
                    <div className={style.itemLink}>
                        <NavLink to="/problems">Задачи</NavLink>
                    </div>
                    <div className={style.itemLink}>
                        <NavLink to="/games">Игры</NavLink>
                    </div>
                    <div className={style.itemLink}>
                        <NavLink to="/articles">Статьи</NavLink>
                    </div>
                    <div className={style.itemLink}>
                        <NavLink to="/rating">Рейтинг</NavLink>
                    </div>
                </nav>
            </div>
            <div className={style.authBlock}>
                <div className={style.buttonAction}>
                    <ButtonSmall >Войти</ButtonSmall>
                </div>
                <div className={style.buttonAction}>
                <ButtonSmall >Регистрация</ButtonSmall>
                </div>
            </div>
        </div>
    );

}
export default Header;