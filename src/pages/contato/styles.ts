import styled from "styled-components";

export const IconContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 50px;
`;

export const IconContent = styled.div`
 width: 200px;
 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const Icon = styled.img`
 height: 20px;
 cursor: pointer;
 &:hover {
    transform: scale(1.2);
    transition: .6s;
}
`;

export const H1 = styled.h1`
 font-family: "Pirata One", system-ui;
 color: rgb(255, 255, 255);
 font-size: 20px;
 font-weight: lighter;
`;

export const Span = styled.span`
 color: #fff;
 font-family: system-ui, sans-serif;
 margin-left: 5px;
 font-size: 19px;
 font-style: none;
 @media(max-width: 768px) {
    width: 100%; 
    font-size: 16px; 
 }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;
