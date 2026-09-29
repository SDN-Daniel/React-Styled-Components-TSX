import styled from "styled-components";

export const ActorCardsContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-top:50px;
 background-color: #000;
 @media (max-width:500px) {
    margin-top:0px;
}
`;

export const CardsContent = styled.div`
 width: 90%;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 row-gap: 20px;
 column-gap: 40px;
 justify-content: center;
 @media (max-width:768px) {
    grid-template-columns: repeat(2,1fr);
    margin-top: 120px;
}
 @media (max-width:500px) {
    grid-template-columns: 1fr;
}
`;


export const NameContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: end;
 background-color: #101010b6;
 width: 70%;
 border-radius: 4px;
 `;

export const NameContent = styled.div`
 color: rgb(255, 255, 255);
 font-size: 18px;
 &:hover {
     color: #951212;
     font-size: 18px;
    }
    `;
    
export const CardBanner1 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 background-image: url('https://is1-ssl.mzstatic.com/image/thumb/95nAGjOMPund5vcQHxsc5g/1200x675mf.jpg');
 &:hover{
 transform: scale(1.02);
 background-image: url('https://i.pinimg.com/564x/a6/9f/05/a69f05e00f599405787a076dda1a6f41.jpg');
}
 @media (max-width:768px) {
    width: 97%;
}
`;

export const CardBanner2 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 background-image: url('https://i.pinimg.com/736x/27/fa/d5/27fad53e434f80356deffcb09e7eac7c.jpg');
 &:hover{
 transform: scale(1.02);
 background-image: url('https://pbs.twimg.com/media/C9YBad_WsAMPmxs.jpg');
}
 @media (max-width:768px) {
    width: 97%;
}
`;

export const CardBanner3 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 background-image: url('https://i.pinimg.com/474x/b5/2f/61/b52f612fde15019a53ab9c9d00ca4607.jpg');
 &:hover{
 transform: scale(1.02);
 background-image: url('https://i.pinimg.com/736x/af/d2/c9/afd2c9e0a700ac69a7fa25efb6280c34.jpg');
}
 @media (max-width:768px) {
    width: 97%;
}
`;

export const CardBanner4 = styled.div`
 width: 100%;
 height: 600px;
 background-size: cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: 1s;
 display: flex;
 flex-direction: column;
 justify-content: end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 background-image: url('https://w0.peakpx.com/wallpaper/142/1021/HD-wallpaper-davy-jones-action-at-carribean-davy-disney-end-jones-pirate-pirates.jpg');
 &:hover{
 transform: scale(1.02);
 background-image: url('https://images8.alphacoders.com/641/641237.jpg');
}
 @media (max-width:768px) {
    width: 97%;
    background-position: 50%, 100%;
}
`;