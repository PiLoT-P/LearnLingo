import { NavLink } from 'react-router-dom';
import imgSrc from '../../assets/image/blockYellow.png'
import s from './Hero.module.css'

const Hero = () => {
    return (
        <section className={s.sectionHero}>
            <div className={s.containerHeroText}>
                <h1 className={s.title}>Unlock your potential with the best <span className={s.variableText}>language</span> tutors</h1>
                <p className={s.text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                <NavLink className={s.link} to='/teachers'>Get started</NavLink>
            </div>
            <div className={s.containerHeroImg}>
                <img src={imgSrc} alt="girl with mac" className={s.img} />
            </div>
        </section>
    );
}

export default Hero;