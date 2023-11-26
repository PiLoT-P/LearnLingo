
import s from './Header.module.scss'
import imgLogo from '../../assets/image/LogoPNG.png'
import svg from 'assets/icons/symbol-defs.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <img className={s.logo} src={imgLogo} alt="Logo" />
                <div className={s.navigate}>
                    <NavLink className={s.text} to='/home'>Home</NavLink>
                    <NavLink className={s.text} to='/teachers'>Teachers</NavLink>
                </div>
                <div className={s.users}>
                    <button className={s.logIn} type='button'>
                        <svg width="20" height="20" className={s.iconLogIn}>
                            <use xlinkHref={`${svg}#login`} />
                        </svg>
                        <span  className={s.text}>Log in</span>
                    </button>
                    <button className={s.register} type='button'>
                        <span className={s.text}>Registration</span>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;