import PopUpAuth from "components/PopUpAuth/PopUpAuth";
import TeachersFilter from "../../components/TeachersFilter/TeachersFilter";
import TeachersList from "../../components/TeachersList/TeachersListTwo";
import Header from "components/Header/Header";
import { useState } from "react";


const Teachers = () => {
    const [authType, setAuthType] = useState('');
    const [isHidden, setIsHidden] = useState(true);

    const handleLogIn = () => {
        setAuthType('logIn');
    }
    const handleRegister = () => {
        setAuthType('register');
    }
    const handleIsHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <section style={{ backgroundColor: "#e9e9e9", paddingBottom: "96px", paddingTop: "20px", minHeight: "100vh"}}>
            <Header onLigIn={handleLogIn} onRegister={handleRegister} onIsHidden={handleIsHidden} />
            <TeachersFilter />
            <TeachersList />
            <PopUpAuth authType={authType} isHidden={isHidden} onIsHidden={handleIsHidden} />
        </section>
    );
}

export default Teachers;