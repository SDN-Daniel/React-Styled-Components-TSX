import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
 height: 90px;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 background-color: black;
`;

export const NavbarLinkContainer = styled.nav`
 width: 70%;
 display: flex;
 justify-content: space-around;
 @media(max-width: 500px) {
    display: none;
}
`;

export const NavbarLink = styled(Link) <{active: boolean}>`
 text-decoration: none;
 cursor: pointer;
 color: ${(props) => props.active? '#ffffff' : '#AAAAAA' };
 font-family: "Pirata One", system-ui;
 font-size: 25px;
 &:hover{
    color: #d30d0d;
    transition: .8s;
}
`;

export const HeaderLogo = styled.img`
 width: 180px;
`;

