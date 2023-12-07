import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'Redux/auth/authSelectors';
import s from './Hero.module.scss';
import imgYellow from '../../assets/image/blockYellow.png';
import imgGreen from '../../assets/image/blockGreen.png';
import imgBlue from '../../assets/image/blockBlue.png';
import imgPink from '../../assets/image/blockPink.png';
import imgCoral from '../../assets/image/blockCoral.png';

const Hero = () => {
    const theme = useSelector(selectorTheme);

    return (
        <section className={s.sectionHero}>
            <div className={s.containerHeroText}>
                <h1 className={s.title}>Unlock your potential with the best <span className={clsx(s.variableText, s[theme])}>language</span> tutors</h1>
                <p className={s.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                <NavLink className={clsx(s.link, s[theme])} to='/teachers'>Get started</NavLink>
            </div>
            <div className={s.containerHeroImg}>
                {theme === null ? <img src={imgYellow} alt="girl with mac" className={s.img} /> : null}
                {theme === 'Yellow' ? <img src={imgYellow} alt="girl with mac" className={s.img} /> : null}
                {theme === 'Green' ? <img src={imgGreen} alt="girl with mac" className={s.img} /> : null}
                {theme === 'Blue' ? <img src={imgBlue} alt="girl with mac" className={s.img} /> : null}
                {theme === 'Pink' ? <img src={imgPink} alt="girl with mac" className={s.img} /> : null}
                {theme === 'Coral' ? <img src={imgCoral} alt="girl with mac" className={s.img} /> : null}
            </div>
        </section>
    );
}

export default Hero;