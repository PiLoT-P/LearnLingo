import { useDispatch, useSelector } from 'react-redux';
import s from './ChangeTheme.module.scss'
import svg from '../../assets/icons/symbol-defs.svg';
import { changeTheme } from 'Redux/auth/authSlice';
import { clsx } from 'clsx';
import { selectorTheme } from 'Redux/auth/authSelectors';

const ChangeTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectorTheme);

    return (
        <>
            <div className={s.container}>
                <button className={s.btn} type='button'>
                    Theme 
                    <svg width="20" height="20" className={s.iconChevron}>
                        <use href={`${svg}#chevron-down`} />
                    </svg>
                </button>
                <ul className={clsx(s.list, s[theme])}>
                    <li className={clsx(s.item, s[theme])} onClick={() => dispatch(changeTheme('Yellow'))}>Yellow</li>
                    <li className={clsx(s.item, s[theme])} onClick={() => dispatch(changeTheme('Green'))}>Green</li>
                    <li className={clsx(s.item, s[theme])} onClick={() => dispatch(changeTheme('Blue'))}>Blue</li>
                    <li className={clsx(s.item, s[theme])} onClick={() => dispatch(changeTheme('Pink'))}>Pink</li>
                    <li className={clsx(s.item, s[theme])} onClick={() => dispatch(changeTheme('Coral'))}>Coral</li>
                </ul>
            </div>
        </>
    );
}

export default ChangeTheme;