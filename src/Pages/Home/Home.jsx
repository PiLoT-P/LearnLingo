import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import PopUpAuth from "components/PopUpAuth/PopUpAuth";

const Home = () => {
    return (
        <section> 
            <Header />
            <Hero />
            <Footer />
            <PopUpAuth/>
        </section>
    );
}

export default Home;