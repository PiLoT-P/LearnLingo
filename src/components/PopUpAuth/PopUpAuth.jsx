import { useState } from "react";
import s from './PopUpAuth.module.scss'
import svg from '../../assets/icons/symbol-defs.svg'
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "Redux/auth/authOperation";

const PopUpAuth = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [passwordShow, setPasswordShow] = useState(false);
    const isHidden = false;
    const nameAuth = 'r';

    const hendleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    }
    
    const hendleSubmit = (e) => {
        e.preventDefault();
        console.log('sub');
        dispatch(registerUser(form));
    }

    return (
        <>
            <div className={`${s.backContainer} ${isHidden ? s.isHidden : ''}` }>
                <div className={s.container}>
                    <h2 className={s.title}>{nameAuth === 'logIn' ?  'Log In' : 'Registration'}</h2>
                    <p className={s.text}>{nameAuth === 'logIn' ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.' : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'}</p>
                    <svg  className={s.iconExit} width="32" height="32">
                        <use href={`${svg}#exit`}></use>
                    </svg>
                    <form className={s.formPopUp} onSubmit={hendleSubmit}>
                        <div className={s.containerInput}>
                            {nameAuth === 'logIn' ? '' :  
                                <input
                                    className={s.input}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={hendleChange}
                                />
                            }
                            <input
                                className={s.input}
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={hendleChange}
                            />
                            <div className={s.passwordContainer}>
                                <input
                                    className={s.input}
                                    type={passwordShow ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={hendleChange}
                                />
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
                        <button className={s.btn} type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUpAuth;