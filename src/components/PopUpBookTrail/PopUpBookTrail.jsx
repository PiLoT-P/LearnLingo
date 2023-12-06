import s from './PopUpBookTrail.module.scss';
import svg from '../../assets/icons/symbol-defs.svg'
import { Field, useFormik } from 'formik';
import { validationSchemaBookTrail } from 'yup/validationSchemaBojkTrail';

const PopUpBookTrail = ({ dataTeacher, setIsHidden, setdataForTrail }) => {
    
    const formik = useFormik({
        initialValues: {
            reason: '',
            name: '',
            email: '',
            phone: ''
        },
        onSubmit: (value) => {
            console.log(value);
        },
        validationSchema: validationSchemaBookTrail,
    })

    return (
        <>
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
                                <Field
                                    type="radio"
                                    name="reason"
                                    value="Career and business"
                                    className={s.input}
                                />
                                <svg className={s.iconChecked} width="20" height="20">
                                    <use href={`${svg}#checked`}></use>
                                </svg>
                                Career and business
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="reason"
                                    value="Lesson for kids"
                                    className={s.input}
                                />
                                <svg className={s.iconChecked} width="20" height="20">
                                    <use href={`${svg}#checked`}></use>
                                </svg>
                                Lesson for kids
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="reason"
                                    value="Living abroad"
                                    className={s.input}
                                />
                                <svg className={s.iconChecked} width="20" height="20">
                                    <use href={`${svg}#checked`}></use>
                                </svg>
                                Living abroad
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="reason"
                                    value="Exams and coursework"
                                    className={s.input}
                                />
                                <svg className={s.iconChecked} width="20" height="20">
                                    <use href={`${svg}#checked`}></use>
                                </svg>
                                Exams and coursework
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="reason"
                                    value="Culture, travel or hobby"
                                    className={s.input}
                                />
                                <svg className={s.iconChecked} width="20" height="20">
                                    <use href={`${svg}#checked`}></use>
                                </svg>
                                Culture, travel or hobby
                            </label>
                        </div>
                        <div className={s.blockTextInput}>
                            <input
                                className={s.input}
                                type="text"
                                name='name'
                                placeholder='Full Name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <input
                                className={s.input}
                                type="text"
                                name='email'
                                placeholder='Email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <input
                                className={s.input}
                                type="text"
                                name='phone'
                                placeholder='Phone number'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                        </div>
                        <button className={s.btn} type='submit'>Book</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUpBookTrail;