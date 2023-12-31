import { selectorTheme } from 'Redux/auth/authSelectors';
import s from './Footer.module.scss'
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

const Footer = () => {
    const theme = useSelector(selectorTheme);

    return (
        <footer className={clsx(s.container, s[theme])}>
            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.number}>32,000 +</span>
                    <span className={s.text}>Experienced tutors</span>
                </li>
                <li className={s.item}>
                    <span className={s.number}>300,000 +</span>
                    <span className={s.text}>5-star tutor reviews</span>
                </li>
                <li className={s.item}>
                    <span className={s.number}>120 +</span>
                    <span className={s.text}>Subjects taught</span>
                </li>
                <li className={s.item}>
                    <span className={s.number}>200 +</span>
                    <span className={s.text}>Tutor nationalities</span>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;