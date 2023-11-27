
import s from './Header.module.scss'
import imgLogo from '../../assets/image/LogoPNG.png'
import svg from 'assets/icons/symbol-defs.svg'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth, selectorName } from 'Redux/auth/authSelectors';
import { logoutUser } from 'Redux/auth/authOperation';

const Header = ({ onLigIn, onRegister, onIsHidden }) => {
    const isAuth = useSelector(selectorIsAuth);
    const name = useSelector(selectorName)
    const dispatch = useDispatch();

    return (
        <>
            <header className={s.header}>
                <img className={s.logo} src={imgLogo} alt="Logo" />
                <div className={s.navigate}>
                    <NavLink className={s.text} to='/home'>Home</NavLink>
                    <NavLink className={s.text} to='/teachers'>Teachers</NavLink>
                </div>
                {isAuth ? 
                    <div className={s.users}>
                        <button className={s.logIn} type='button' onClick={() => { dispatch(logoutUser()) }}>
                            <svg width="20" height="20" className={s.iconLogOut}>
                                <use xlinkHref={`${svg}#log-out`} />
                            </svg>
                            <span  className={s.text}>Log Out</span>
                        </button>
                        <span className={`${s.text} ${s.textGL}`}>{name}</span>
                    </div>
                    :
                    <div className={s.users}>
                        <button className={s.logIn} type='button' onClick={() => { onLigIn(); onIsHidden() }}>
                            <svg width="20" height="20" className={s.iconLogIn}>
                                <use xlinkHref={`${svg}#login`} />
                            </svg>
                            <span  className={s.text}>Log in</span>
                        </button>
                        <button className={s.register} type='button' onClick={() => { onRegister(); onIsHidden() }}>
                            <span className={s.text}>Registration</span>
                        </button>
                    </div>
                }
            </header>
        </>
    );
}

export default Header;