import { selectorTeachers } from "Redux/teachers/teachersSelectors";
import { useSelector } from "react-redux";
import s from './TeachersList.module.scss';
import svg from '../../assets/icons/symbol-defs.svg'

const TeachersList = () => {
    const teachersData = useSelector(selectorTeachers);

    return (
        <>
            <ul className={s.mainList}>
                {teachersData.map(({avatar_url, conditions, experience, languages, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname}, index) => (
                    <li key={`${index}_${surname}`} className={s.mainListItem}>
                        <img width='96px' height='96px' src={avatar_url} alt="avatar teacher" className={s.avatar} />
                        <div className={s.container}>
                            <div className={s.topBlock}>
                                <span className={`${s.text} ${s.textLanguages}`}>Languages</span>
                                <ul className={s.topList}>
                                    <li className={s.item}>
                                        <svg className={s.iconBook} width="16" height="16">
                                            <use href={`${svg}#book-open`}></use>
                                        </svg>
                                        <span  className={s.text}>Lessons online</span>
                                    </li>
                                    <li className={s.item}>
                                        <span className={s.text}>Lessons done:  {lessons_done}</span>
                                    </li>
                                    <li className={s.item}>
                                        <svg className={s.iconStar} width="16" height="16">
                                            <use href={`${svg}#star`}></use>
                                        </svg>
                                        <span className={s.text}>Rating: {rating}</span>
                                    </li>
                                    <li className={s.item}>
                                        <span className={s.text}>Price / 1 hour: <span className={s.money}>{price_per_hour}$</span></span>
                                    </li>
                                </ul>
                                <svg className={s.iconHeart} width="26" height="26">
                                    <use href={`${svg}#heart`}></use>
                                </svg>
                            </div>
                            <p className={s.nameSurname}>{`${name} ${surname}`}</p>
                            <ul className={s.informationList}>
                                <li className={s.item}>Speaks: <span className={s.text}>{languages.map((el) => ` `+el)}</span></li>
                                <li className={s.item}>Lesson Info: <span className={s.text}>{lesson_info}</span></li>
                                <li className={s.item}>Conditions: <span  className={s.text}>{conditions}</span></li>
                            </ul>
                            <button type="button" className={s.btn}>Read more</button>
                            <ul className={s.levelsList}>
                                {levels.map((el, id) => (
                                    <li className={s.item}>{el}</li>
                                ))}
                            </ul>
                        </div>
                  </li>  
                ))}
            </ul>
        </>
    );
}

export default TeachersList;