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
                        <NavLink to="/problems">Игры</NavLink>
                    </div>
                    <div className={style.itemLink}>
                        <NavLink to="/problems">Статьи</NavLink>
                    </div>
                    <div className={style.itemLink}>
                        <NavLink to="/problems">Рейтинг</NavLink>
                    </div>
                </nav>
            </div>
            <div className={style.authBlock}>
                <div className={style.buttonAction}>
                    <ButtonSmall text="Войти" action={() => { }} />
                </div>
                <div className={style.buttonAction}>
                    <ButtonSmall style='color: black' text="Регистрация" action={() => { }} />
                </div>
            </div>
        </div>
    );

}
export default Header;