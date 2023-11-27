import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import PopUpAuth from "components/PopUpAuth/PopUpAuth";
import { useState } from "react";

const Home = () => {
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
        <section> 
            <Header onLigIn={handleLogIn} onRegister={handleRegister} onIsHidden={handleIsHidden} />
            <Hero />
            <Footer />
            <PopUpAuth authType={authType} isHidden={isHidden} onIsHidden={handleIsHidden} />
        </section>
    );
}

export default Home;