import styled from "styled-components";

export const TrailerContainer = styled.div`
 width: 100%;
 height: 400px;
 display: flex;
 justify-content: center;
 background-color: #000;
 @media(max-width: 768px) {    
    margin-top: 1px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}
`;

export const Content = styled.div`
 width:60%;
 display: flex;
 align-items: center;
 justify-content: space-between;
@media(max-width: 1100px) {
    width:80%;
}
@media(max-width: 768px) {
    width:95%;
    display: flex;
    flex-direction: column;
}
@media(max-width: 500px) {
    display: flex;
}
`;

export const TrailerContent = styled.video`
 width: 60%;
 @media(max-width: 768px) {
    width:90%;
    margin-left: 5%;
}
`;

export const Sinopse = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin-left: 30px;
 @media(max-width: 768px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`;

export const Description = styled.p`
 color: #fff;
 font-size: 17px;
 font-family: system-ui, sans-serif;
 width: 95%;
 @media(max-width: 768px) {
    width: 100%;
}
`;
   
export const Button = styled.button`
 width: 100%;
 height: 60px;
 background-color: #d21617;
 color: #fff;
 padding: 8px 10px;
 border-radius: 5px;
 cursor: pointer;
 transition: .8s;
 font-size: 18px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: bold;
 border: none;
 outline: none;
 margin-top: 25px;
 &:hover{
    background-color: #fff;
    color: #000;
 }
 @media(max-width: 768px) {
    display: flex;
}
`;