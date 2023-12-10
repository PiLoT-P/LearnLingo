
import s from './Header.module.scss'
import imgLogo from '../../assets/image/ukraineLG.png'
import svg from 'assets/icons/symbol-defs.svg'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth, selectorName, selectorTheme } from 'Redux/auth/authSelectors';
import { logoutUser } from '../../Redux/auth/authOperation';
import { cleanFavorites} from '../../Redux/teachers/teachersSlice';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import clsx from 'clsx';

const Header = ({ onLigIn, onRegister, onIsHidden }) => {
    const isAuth = useSelector(selectorIsAuth);
    const name = useSelector(selectorName);
    const theme = useSelector(selectorTheme);
    const dispatch = useDispatch();

    return (
        <>
            <header className={s.header}>
                <NavLink className={s.blockLogo} to='/home'>
                    <img width="28px" height="28px" src={imgLogo} alt="Logo" />
                    <span className={s.textLogo}>LearnLingo</span>
                </NavLink>
                <div className={s.navigate}>
                    <NavLink className={`${s.text} ${s.link}`} to='/home'>Home</NavLink>
                    <NavLink className={`${s.text} ${s.link}`} to='/teachers'>Teachers</NavLink>
                    {isAuth ? <NavLink className={`${s.text} ${s.link}`} to='/favorites'>Favorites</NavLink> : null}
                </div>
                {isAuth ? 
                    <div className={s.users}>
                        <button className={s.logIn} type='button' onClick={() => { dispatch(logoutUser()); dispatch(cleanFavorites()) }}>
                            <svg width="20" height="20" className={clsx(s.iconLogOut, s[theme])}>
                                <use xlinkHref={`${svg}#log-out`} />
                            </svg>
                            <span  className={s.text}>Log Out</span>
                        </button>
                        <span className={`${s.text} ${clsx(s.textGL, s[theme])}`}>{name}</span>
                        <ChangeTheme/>
                    </div>
                    :
                    <div className={s.users}>
                        <button className={s.logIn} type='button' onClick={() => { onLigIn(); onIsHidden(); document.body.style.overflow = 'hidden'; }}>
                            <svg width="20" height="20" className={clsx(s.iconLogIn, s[theme])}>
                                <use xlinkHref={`${svg}#login`} />
                            </svg>
                            <span  className={s.text}>Log in</span>
                        </button>
                        <button className={s.register} type='button' onClick={() => { onRegister(); onIsHidden(); document.body.style.overflow = 'hidden'; }}>
                            <span className={s.text}>Registration</span>
                        </button>
                        <ChangeTheme/>
                    </div>
                }
            </header>
        </>
    );
}

export default Header;