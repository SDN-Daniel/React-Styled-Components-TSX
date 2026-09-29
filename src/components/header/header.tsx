import { HeaderLogo, NavbarContainer, NavbarLink, NavbarLinkContainer } from "./styles";
import Logo from '../../assets/logos/Logo_header_piratas.png';
import { useContext } from "react";
import { UserContext } from "../../contexts/navContext";

function Header() {
    const {item, setItem} = useContext(UserContext);      

    return(
        <>
        <NavbarContainer>
            <HeaderLogo src={Logo}  alt='Piratas do Caribe no Fim do Mundo'/>
            <NavbarLinkContainer>
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
            </NavbarLinkContainer>
        </NavbarContainer>
        </>
    )
}

export default Header;