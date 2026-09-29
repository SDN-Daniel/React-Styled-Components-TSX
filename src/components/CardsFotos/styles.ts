import styled from "styled-components";
import Jack from '../../assets/imagens/Jack.jpg';
import WillTurner from '../../assets/imagens/Will_Turner_curseless.jpg';
import Elizabeth from '../../assets/imagens/Elizabeth.jpg';
import Davy from '../../assets/imagens/Davy_Jones_verde.jpg';
import Barbosa from '../../assets/imagens/Barbossa_jack.jpg';
import Dalma from '../../assets/imagens/Tia_Dalma.jpg';
import Lord from '../../assets/imagens/Cutler_Beckett.jpg';
import Feng from '../../assets/imagens/CaptFeng.JPG.webp';

export const FotosCardsContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-top: 100px;
`;

export const FotosCardsContent = styled.div`
 width: 90%;
 display: grid;
 grid-template-columns: repeat(4,1fr);
 row-gap: 20px;
 column-gap: 40px;
 @media(max-width: 768px) {
 grid-template-columns: repeat(2,1fr);
 row-gap: 20px;
 column-gap: 40px;    
}
 @media(max-width: 500px) {
 grid-template-columns: repeat(1,1fr);
 row-gap: 20px;
 column-gap: 40px;
 width: 80%;   
}
`;

export const CardFoto1 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Jack});
 background-position: 50% 50%;
`;

export const CardFoto2 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${WillTurner});
`;

export const CardFoto3 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Elizabeth});
`;

export const CardFoto4 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Davy});
`;

export const CardFoto5 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Barbosa});
`;

export const CardFoto6 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Dalma});
`;

export const CardFoto7 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Lord});
`;

export const CardFoto8 = styled.div`
 width: 100%;
 height: 600px;
 background-size:cover;
 background-position: 50% 50%;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 padding: 0 0 20px 10px;
 color: #fff;
 font-size: 17px;
 font-family: "Pirata One", system-ui;
 margin-bottom: 15px;
 margin-top: 20px;
 background-image: url(${Feng});
`;


