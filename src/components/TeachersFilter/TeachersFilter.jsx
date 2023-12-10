import Select from 'react-select';
import s from './TeachersFilter.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter, selectorTeachers } from 'Redux/teachers/teachersSelectors';
import { changeFilter } from 'Redux/teachers/teachersSlice';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { selectorTheme } from 'Redux/auth/authSelectors';

const TeachersFilter = () => {
    const dispatch = useDispatch()
    const teachersData = useSelector(selectorTeachers);
    const theme = useSelector(selectorTheme);
    const dataFilter = useSelector(selectorFilter);
    const [language, setLanguage] = useState(null);
    const [level, setLevel] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => { 
        const { language, level, price } = dataFilter;

        setLanguage(language)
        setLevel(level);
        setPrice(price);
    }, [dataFilter]);

    const uniqueLanguages = Array.from(new Set(teachersData.flatMap(teacher => teacher.languages)));
    const languages = uniqueLanguages.map(language => ({ value: language, label: language }));

    const uniqueLevels = Array.from(new Set(teachersData.flatMap(teacher => teacher.levels)));
    const levels = uniqueLevels.map(level => ({ value: level, label: level }));

    const uniquePrices = Array.from(new Set(teachersData.flatMap(teacher => teacher.price_per_hour)));
    const sortedPrices = uniquePrices.sort((a, b) => a - b);
    const prices = sortedPrices.map(price => ({ value: price, label: price }));

    const handleFilterUpdate = () => {
        dispatch(changeFilter({ language: null, level: null, price: null }))

        setLanguage(null);
        setLevel(null);
        setPrice(null);
    }


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
                        value={language ? { value: language, label: language } : null}
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
                        value={level ? { value: level, label: level } : null}
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
                        value={price ? { value: price, label: price } : null}
                    />
                </div>
                <div className={s.blockBtn}>
                    <button className={clsx(s.btn, s[theme])} type='button' onClick={handleFilterUpdate} >Update Filter</button>
                </div>
            </div>
        </>
    );
}

export default TeachersFilter;