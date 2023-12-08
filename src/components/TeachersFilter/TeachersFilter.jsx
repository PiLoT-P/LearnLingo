import Select from 'react-select';
import s from './TeachersFilter.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectorTeachers } from 'Redux/teachers/teachersSelectors';
import { changeFilter } from 'Redux/teachers/teachersSlice';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TeachersFilter = () => {
    const dispatch = useDispatch()
    const teachersData = useSelector(selectorTeachers);
    const [language, setLanguage] = useState(null);
    const [level, setLevel] = useState(null);
    const [price, setPrice] = useState(null);

    const uniqueLanguages = Array.from(new Set(teachersData.flatMap(teacher => teacher.languages)));
    const languages = uniqueLanguages.map(language => ({ value: language, label: language }));

    const uniqueLevels = Array.from(new Set(teachersData.flatMap(teacher => teacher.levels)));
    const levels = uniqueLevels.map(level => ({ value: level, label: level }));

    const uniquePrices = Array.from(new Set(teachersData.flatMap(teacher => teacher.price_per_hour)));
    const sortedPrices = uniquePrices.sort((a, b) => a - b);
    const prices = sortedPrices.map(price => ({ value: price, label: price }));

    return (
        <>
            <div className={s.container}>
                <div>
                    <p className={s.label}>Languages</p>
                    <Select
                        className={`${s.text} ${s.blockLanguages}`}
                        onChange={(e) => {
                            setLanguage(e.value)
                            dispatch(changeFilter({language: e.value, level, price}))
                        }}
                        options={languages}
                    />
                </div>
                <div>
                    <p className={s.label}>Level of knowledge</p>
                    <Select
                        className={`${s.text} ${s.blockLevels}`}
                        onChange={(e) => {
                            setLevel(e.value)
                            dispatch(changeFilter({language, level: e.value, price}))
                        }}
                        options={levels}
                    />
                </div>
                <div>
                    <p className={s.label}>Price</p>
                    <Select
                        className={`${s.text} ${s.blockPrice}`}
                        onChange={(e) => {
                            setPrice(e.value)
                            dispatch(changeFilter({language, level, price: e.value}))
                        }}
                        options={prices}
                    />
                </div>
                <NavLink className={s.link} to='/home'>Home</NavLink>
            </div>
        </>
    );
}

export default TeachersFilter;