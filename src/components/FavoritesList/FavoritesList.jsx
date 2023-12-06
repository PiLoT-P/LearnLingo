import { selectorFavorites } from "Redux/teachers/teachersSelectors";
import { useDispatch, useSelector } from "react-redux";
import { addTeacherToFavorites, removeTeachersFromFavorites } from "Redux/teachers/teachersOperation";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import PopUpBookTrail from "components/PopUpBookTrail/PopUpBookTrail";
import s from './FavoritesList.module.scss';
import svg from '../../assets/icons/symbol-defs.svg';

const FavoritesList = () => {
    const dispatch = useDispatch();
    const dataFavorites = useSelector(selectorFavorites);
    const [isHidden, setIsHidden] = useState(true);
    const [indexHidden, setIndexHidden] = useState(-1); 
    const [dataForTrail, setDataForTrail] = useState(null);

    return (
        <>
            <ul className={s.mainList}>
                {dataFavorites.map(({avatar_url, conditions, experience, id,languages, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname}, index) => (
                    <li key={id} className={s.mainListItem}>
                        <div className={s.blockAvatar}>
                            <svg className={s.iconDot} width="12" height="12">
                                <use href={`${svg}#greenDot`}></use>
                            </svg>
                            <img width='120px' height='120px' src={avatar_url} alt="avatar teacher" className={s.avatar} />
                        </div>
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
                                <svg
                                    onClick={() => { 
                                        if (dataFavorites.some(favorite => favorite.id === id)) {
                                            dispatch(removeTeachersFromFavorites(id));
                                        } else {
                                            dispatch(addTeacherToFavorites({ avatar_url, conditions, experience, id, languages, lesson_info, lessons_done, levels, name, price_per_hour, rating, reviews, surname }));   
                                        }
                                    }}
                                    className={dataFavorites.some(favorite => favorite.id === id) ? s.iconHeartUse: s.iconHeart} width="26" height="26">
                                    <use href={`${svg}#heart`}></use>
                                </svg>
                            </div>
                            <p className={`${s.text} ${s.nameSurname}`}>{`${name} ${surname}`}</p>
                            <ul className={s.informationList}>
                                <li className={`${s.text} ${s.item}`}>Speaks: <span className={`${s.text} ${s.textLanguages}`}>{languages.map((el) => ` `+el)}</span></li>
                                <li className={`${s.text} ${s.item}`}>Lesson Info: <span className={s.text}>{lesson_info}</span></li>
                                <li className={`${s.text} ${s.item}`}>Conditions: <span  className={s.text}>{conditions}</span></li>
                            </ul>
                            {indexHidden === -1 || indexHidden < index || indexHidden > index ? <button type="button"  className={`${s.text} ${s.btn}`} onClick={() => {setIndexHidden(index); }}>Read more</button> : null}
                            {indexHidden === index ? 
                                <div className={s.hiddenBlock}>
                                    <p className={`${s.text} ${s.textExperience}`}>{experience}</p>
                                    <ul className={s.commentList}>
                                        {reviews.map(({ comment, reviewer_name, reviewer_rating, surname }, id) => (
                                            <li key={uuidv4()}  className={s.item}>
                                                <div className={s.container}>
                                                    <svg className={s.iconUser} width="44" height="43">
                                                        <use href={`${svg}#user`}></use>
                                                    </svg>
                                                    <div>
                                                        <span className={`${s.text} ${s.name}`}>{reviewer_name}</span>
                                                        <div className={s.blockRating}>
                                                            <svg width="16" height="16">
                                                                <use href={`${svg}#star`}></use>
                                                            </svg>
                                                            <span className={s.textRating}>{reviewer_rating}.0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={s.text}>{comment}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                : null
                            }
                            <ul className={s.levelsList}>
                                {levels.map((el, id) => (
                                    // el.includes(filter.level) ? <li key={uuidv4()} className={`${s.text} ${s.item} ${s.found}`}>#{el}</li> :
                                        <li key={uuidv4()} className={`${s.text} ${s.item}`}>#{el}</li>
                                ))}
                            </ul>
                            {indexHidden === index ? <button className={s.btnTrail} type="button"
                                onClick={() => {
                                    setIsHidden(!isHidden);
                                    setDataForTrail({
                                        avatar_url,
                                        name,
                                        surname
                                    })
                                }}
                            >Book trial lesson</button> : null}
                        </div>
                  </li>  
                ))
                }
            </ul>
            {isHidden ? null : <PopUpBookTrail dataTeacher={dataForTrail} setIsHidden={setIsHidden} setdataForTrail={setDataForTrail} />}
        </>
    );
}

export default FavoritesList;