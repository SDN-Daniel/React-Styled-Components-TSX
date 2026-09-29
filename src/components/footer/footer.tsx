import './styles';
import Logo_dourada from '../../assets/logos/Logo_dourada.png';
import GitHub from '../../assets/icons/github-branco-50x50.png';
import { FooterContainer, FooterNavcontainer, FooterNavigation, LogoDourada, Span } from './styles';
import { Icon, StyledLink } from '../../pages/contato/styles';
import { NavbarLink } from '../header/styles';
import { useContext } from 'react';
import { UserContext } from '../../contexts/navContext';

function Footer() {
    const {item, setItem} = useContext(UserContext);

    return(
        <FooterContainer>
            <LogoDourada src={Logo_dourada} alt='Disney Piratas do Caribe no Fim do Mundo' />
            <StyledLink href="https://github.com/SDN-Daniel?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Icon src={GitHub} alt='GitHub' />
            </StyledLink>
            <Span>Todos os direitos reservados ©</Span>
            <Span>Desenvolvido por: Daniel Santos do Nascimento</Span>

            <FooterNavcontainer>
                <FooterNavigation>
                    <div onClick={() => setItem('home')}>
                        <NavbarLink to="/" active={item === 'home'} >Home</NavbarLink>
                    </div>
                    <div onClick={() => setItem('fotos')}>
                    <NavbarLink to="/fotos" active={item === 'fotos'} >Fotos</NavbarLink>
                </div>
                <div onClick={() => setItem('comentarios')}>
                    <NavbarLink to="/comentarios" active={item === 'comentarios'} >Comentários</NavbarLink>
                </div>
                <div onClick={() => setItem('contato')}>
                    <NavbarLink to="/contato" active={item === 'contato'} >Contato</NavbarLink>       
                </div>
                </FooterNavigation>
            </FooterNavcontainer>
        </FooterContainer>
    )
}

export default Footer;