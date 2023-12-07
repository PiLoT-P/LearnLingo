
import s from './Header.module.scss'
import imgLogo from '../../assets/image/LogoPNG.png'
import svg from 'assets/icons/symbol-defs.svg'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsAuth, selectorName, selectorTheme } from 'Redux/auth/authSelectors';
import { logoutUser } from '../../Redux/auth/authOperation';
import { cleanFavorites} from '../../Redux/teachers/teachersSlice';
import { NotificationContainer } from 'react-notifications';
import { errorNotification } from 'notifications/notifications';
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
                <img className={s.logo} src={imgLogo} alt="Logo" />
                <div className={s.navigate}>
                    <NavLink className={s.text} to='/home'>Home</NavLink>
                    <NavLink className={s.text} to='/teachers'>Teachers</NavLink>
                    {isAuth ? <NavLink className={s.text} to='/favorites'>Favorites</NavLink> :
                        <button className={`${s.text} ${s.btn}`} type='button' onClick={() => {
                            errorNotification('First, log in or register', 'Error', 3000);
                        }}>Favorites</button>
                    }
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
                        <button className={s.logIn} type='button' onClick={() => { onLigIn(); onIsHidden() }}>
                            <svg width="20" height="20" className={clsx(s.iconLogIn, s[theme])}>
                                <use xlinkHref={`${svg}#login`} />
                            </svg>
                            <span  className={s.text}>Log in</span>
                        </button>
                        <button className={s.register} type='button' onClick={() => { onRegister(); onIsHidden() }}>
                            <span className={s.text}>Registration</span>
                        </button>
                        <ChangeTheme/>
                    </div>
                }
            </header>
            <NotificationContainer/>
        </>
    );
}

export default Header;