import styled from "styled-components";

export const FotosCardsActionContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 100px;
`;

export const FotosCardsActionBlock = styled.div`
 width: 80%;
 display: block;
`;

export const FotosCardsActionContent = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(2,1fr);
 row-gap: 20px;
 column-gap: 40px;
 @media(max-width: 768px) {
 grid-template-columns: repeat(1,1fr);
 }
`;

export const CardActionFoto1 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url('https://d23.com/app/uploads/2015/07/pirates-of-the-caribbean-at-worlds-end-1180x600.jpg');
    background-position: 65% 50%;
`
export const CardActionFoto2 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url('https://imgix.vielskerserier.dk/2024-01-18/pirates-of-the-caribbean-2_1.jpg?auto=format,compress&fit=crop&ar=320:180&crop=faces,entropy');
 background-position: 50% 50%;
`
export const FotosCardsActionBanner = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(1,1fr);
 row-gap: 20px;
 column-gap: 40px;
 @media(max-width: 768px) {
 margin-top: 20px;
 }
`;

export const CardAction = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url('https://fictionmachine.com/wp-content/uploads/2017/03/pirates3_01.jpg?w=1920&h=768&crop=1');
 background-position: 30% 50%;
 &:hover{
 transform: scale(1.02);
 }
 @media(max-width: 768px) {
 background-position: 55% 50%;
 }
`;