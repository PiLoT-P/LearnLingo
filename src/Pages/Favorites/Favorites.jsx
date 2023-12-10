import FavoritesList from "components/FavoritesList/FavoritesList";
import Header from "components/Header/Header";
import PopUpAuth from "components/PopUpAuth/PopUpAuth";
import { useState } from "react";

const Favorites = () => {
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
        <section style={{ backgroundColor: "#e9e9e9", paddingBottom: "96px", paddingTop: "20px", minHeight: "100vh" }}>
            <Header onLigIn={handleLogIn} onRegister={handleRegister} onIsHidden={handleIsHidden} />
            <FavoritesList />
            <PopUpAuth authType={authType} isHidden={isHidden} onIsHidden={handleIsHidden} />
        </section>
    );
}

export default Favorites;