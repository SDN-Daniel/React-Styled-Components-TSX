import styled from "styled-components";

export const FooterContainer = styled.footer`
 height: 200px;
 margin-top: 50px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 margin-bottom: 50px;
`;

export const LogoDourada = styled.img`
 margin-bottom: 10px;
 width: 200px;
 object-fit: contain;
`;

export const Span = styled.span`
 color: #fff;
 font-family: system-ui, sans-serif;
 font-size: 16px;
 text-align: center;
`;

export const FooterNavcontainer = styled.nav`
 display: none;
 @media(max-width: 500px) {
    display: block;
    margin-bottom: 300px;
 }
`;

export const FooterNavigation = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 row-gap: 5px;
 margin-top: 30px;
 margin-bottom: 30px;
`;