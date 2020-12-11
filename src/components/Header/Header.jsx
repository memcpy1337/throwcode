import React from 'react';
import Popup from 'reactjs-popup';
import { Link, NavLink } from 'react-router-dom';
import ButtonSmall from '../../elements/Buttons/ButtonSmall/ButtonSmall';
import style from "./Header.module.css"
import Login from './Login/Login';
import Register from './Register/Register';
import LoginContainer from './Login/LoginContainer';
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
            {
                !props.isAuth ?

                    <div className={style.authBlock}>
                        <div className={style.buttonAction}>
                            <LoginContainer loginModal={props.loginModal} toogleModal={props.toogleLoginModal} />
                        </div>
                        <div className={style.buttonAction}>
                            <Register registerModal={props.registerModal} toogleModal={props.toogleRegisterModal} />
                        </div>
                    </div>
                    :
                    <div className={style.authBlock}>
                        <div className={style.profile}>
                        <img  width="24" height="24" src='https://www.gravatar.com/avatar/bb913e3b525ddce6d0a8ff3a5c6f6338?s=48&d=identicon&r=PG&f=1'></img>
                        <span style={{marginLeft: 5, color: 'gold'}}>● 550</span>
                        </div>
            </div>
            }
        </div>
    );

}
export default Header;