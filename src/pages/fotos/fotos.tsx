import { useContext, useEffect } from 'react';
import Header from '../../components/header/header'
import './styles'
import { BannerFotos} from './styles'
import { UserContext } from '../../contexts/navContext';
import CardsFotos from '../../components/CardsFotos/cardsFotos';
import ActionCards from '../../components/ActionCards/actionCards';
import Footer from '../../components/footer/footer';

function Fotos() {
    const {item, setItem} = useContext(UserContext);
    
    useEffect (() => {
        if (item !== 'fotos') {
            setItem('fotos')
        }
    })

    return(
        <>
        <Header />
        <BannerFotos /> 
        <CardsFotos />
        <ActionCards />
        <Footer />
        </>
    )
}

export default Fotos;