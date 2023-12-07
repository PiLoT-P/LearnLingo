import s from './PopUpBookTrail.module.scss';
import svg from '../../assets/icons/symbol-defs.svg'
import { validationSchemaBookTrail } from 'yup/validationSchemaBojkTrail';
import FormikWrapper from 'formik/formik';
import clsx from 'clsx';
import { selectorTheme } from 'Redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const PopUpBookTrail = ({ dataTeacher, setIsHidden, setdataForTrail }) => {
    const theme = useSelector(selectorTheme);

    const onSubmit = (values) => {
        console.log(values);
    };
    const validationSchema = validationSchemaBookTrail;

    return (
        <FormikWrapper
            initialValues={{ reason: '', name: '', email: '', phone: '', }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return(<>
                    <div className={s.backdrop}>
                        <div className={s.container}>
                            <svg className={s.iconExit} width="32" height="32" onClick={() => { setIsHidden(true); setdataForTrail(null); }}>
                                <use href={`${svg}#exit`}></use>
                            </svg>
                            <h3 className={s.title}>Book trial lesson</h3>
                            <p className={s.titleText}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
                            <div className={s.blockTeacher}>
                                <img width="44px" height="44px" className={s.img} src={dataTeacher.avatar_url} alt="avatar" />
                                <div className={s.block}>
                                    <p className={s.upperText}>Your teacher</p>
                                    <p className={s.lowerText}>{dataTeacher.name} {dataTeacher.surname}</p>
                                </div>
                            </div>
                            <p className={s.question}>What is your main reason for learning English?</p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={s.blockRadioInput}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="Career and business"
                                            className={s.input}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.reason === 'Career and business'}
                                        />
                                        <svg className={clsx(s.iconChecked, s[theme])} width="20" height="20">
                                            <use href={`${svg}#checked`}></use>
                                        </svg>
                                        Career and business
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="Lesson for kids"
                                            className={s.input}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.reason === 'Lesson for kids'}
                                        />
                                        <svg className={clsx(s.iconChecked, s[theme])} width="20" height="20">
                                            <use href={`${svg}#checked`}></use>
                                        </svg>
                                        Lesson for kids
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="Living abroad"
                                            className={s.input}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.reason === 'Living abroad'}
                                        />
                                        <svg className={clsx(s.iconChecked, s[theme])} width="20" height="20">
                                            <use href={`${svg}#checked`}></use>
                                        </svg>
                                        Living abroad
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="Exams and coursework"
                                            className={s.input}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.reason === 'Exams and coursework'}
                                        />
                                        <svg className={clsx(s.iconChecked, s[theme])} width="20" height="20">
                                            <use href={`${svg}#checked`}></use>
                                        </svg>
                                        Exams and coursework
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="reason"
                                            value="Culture, travel or hobby"
                                            className={s.input}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.reason === 'Culture, travel or hobby'}
                                        />
                                        <svg className={clsx(s.iconChecked, s[theme])} width="20" height="20">
                                            <use href={`${svg}#checked`}></use>
                                        </svg>
                                        Culture, travel or hobby
                                    </label>
                                </div>
                                <div className={s.blockTextInput}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        className={clsx(s.input, s[theme])}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        className={clsx(s.input, s[theme])}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone number"
                                        className={clsx(s.input, s[theme])}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                </div>
                                <button className={clsx(s.btn, s[theme])} type='submit'>Book</button>
                            </form>
                        </div>
                    </div>
                </>)
            }}
        </FormikWrapper>
    );
}

export default PopUpBookTrail;