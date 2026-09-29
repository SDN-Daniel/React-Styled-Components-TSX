import { useContext, useEffect } from "react";
import BannerHome from "../../components/bannerHome/bannerHome";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Trailer from "../../components/trailer/trailer";
import './styles';
import { UserContext } from "../../contexts/navContext";

function Home() {
    const {item, setItem} = useContext(UserContext);
    
    useEffect (() => {
        if (item !== 'home') {
            setItem('home')
        }
    })

    return(
        <>
        <Header />
        <BannerHome />
        <Trailer />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;