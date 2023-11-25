import { useState } from "react";
import s from './PopUpAuth.module.css'

const PopUpAuth = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const hendleChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    }

    return (
        <>
            <div className={s.container}>
                <h2 className={s.title}>Registration</h2>
                <p className={s.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
                <form className={s.formPopUp}>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={hendleChange}
                    />
                    <input
                        className={s.input}
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={hendleChange}
                    />
                    <input
                        className={s.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={hendleChange}
                    />
                    <button className={s.btn} type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default PopUpAuth;