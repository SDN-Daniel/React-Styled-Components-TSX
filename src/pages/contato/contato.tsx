import './styles';
import {Icon, IconContainer, IconContent, Span, StyledLink} from './styles'
import Header from '../../components/header/header'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/navContext';
import Footer from '../../components/footer/footer';
import GitHub from '../../assets/icons/github-branco-50x50.png';

function Contato() {
    const {item, setItem} = useContext(UserContext);
    
    useEffect (() => {
        if (item !== 'contato') {
            setItem('contato')
        }
    })

    return(
        <>
        <Header />
        <IconContainer>
            <IconContent>
                <StyledLink href="https://github.com/SDN-Daniel?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Icon src={GitHub} alt='GitHub' />
                    <Span>GitHub: SDN-Daniel</Span>
                </StyledLink>
            </IconContent>
        </IconContainer>
        <Footer />
        </>
    )
}

export default Contato;