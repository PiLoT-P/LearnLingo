import { useState } from "react";
import { useDispatch} from "react-redux";
import { loginUser, registerUser } from "Redux/auth/authOperation";
import { useFormik } from "formik";
import s from './PopUpAuth.module.scss';
import svg from '../../assets/icons/symbol-defs.svg';
import { validationSchemaLogIn } from "yup/validationSchemaLogIn";
import { validationSchemaRegister } from "yup/validationSchemaRegister";


const PopUpAuth = ({authType, isHidden, onIsHidden}) => {
    const dispatch = useDispatch();
    const [passwordShow, setPasswordShow] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            authType === 'logIn' ? dispatch(loginUser(values)) : dispatch(registerUser(values));
            onIsHidden();
        },
        validationSchema: authType === 'logIn' ? validationSchemaLogIn : validationSchemaRegister,
    });

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    }
    
    return (
        <>
            <div className={`${s.backContainer} ${isHidden ? s.isHidden : ''}` }>
                <div className={s.container}>
                    <h2 className={s.title}>{authType === 'logIn' ?  'Log In' : 'Registration'}</h2>
                    <p className={s.text}>{authType === 'logIn' ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.' : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'}</p>
                    <svg  className={s.iconExit} width="32" height="32" onClick={( ) => onIsHidden()}>
                        <use href={`${svg}#exit`}></use>
                    </svg>
                    <form className={s.formPopUp} onSubmit={formik.handleSubmit}>
                        <div className={s.containerInput}>
                            {authType === 'logIn' ? '' :  
                                <div className={s.blockValidate}>
                                    <input
                                        className={s.input}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className={s.error}>{formik.errors.name}</div>
                                    )}
                                </div>
                            }
                            <div className={s.blockValidate}>
                                <input
                                    className={s.input}
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className={s.error}>{formik.errors.email}</div>
                                )}
                            </div>
                            <div className={s.passwordContainer}>
                                <input
                                    className={s.input}
                                    type={passwordShow ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className={s.error}>{formik.errors.password}</div>
                                )}
                                {!passwordShow ? 
                                    <svg onClick={togglePassword} className={s.iconEye} width="20" height="20">
                                        <use href={`${svg}#eye-off`}></use>
                                    </svg>
                                    :
                                    <svg onClick={togglePassword} className={s.iconEye} width="20" height="20">
                                        <use href={`${svg}#eye`}></use>
                                    </svg>
                                }
                            </div>
                        </div>
                        <button className={s.btn} type="submit">{authType === 'logIn' ? 'Log In': 'Sign Up'}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUpAuth;