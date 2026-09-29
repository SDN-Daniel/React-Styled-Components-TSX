import styled from "styled-components";

export const CommentsContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-top: 1%;
`;

export const CommentsContent = styled.div`
 width: 50%;
 display: grid;
 grid-template-columns: repeat(1,1fr);   
 row-gap: 20px;
 justify-items: center;
 padding: 50px 0px;
 border-radius: 10px;
 background-color: rgba(223, 206, 170, 0.42);
 @media(max-width: 768px) {
   width: 90%; 
 }
`;

export const CommentBlock = styled.div`
 width: 70%;
 display: flex;
 flex-direction: column;
 @media(max-width: 768px) {
   width: 90%; 
 }
`;

export const CommentH1 = styled.h1`
color: rgb(211, 118, 11);
 font-size: 25px;
 font-family: "Pirata One", system-ui; 
 margin-bottom: 30px;
 font-weight: lighter;
`;

export const CommentTitle = styled.span`
 color: rgb(211, 118, 11);
 font-size: 19px;
 font-family: "Pirata One", system-ui;
 @media(max-width: 768px) {
    margin-left: 0px; 
 }
`;

export const User = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-start;
`;
export const Icon = styled.img`
 height: 30px;
 margin-right: 8px;
`;

export const CommentPack = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
`;

export const Comment = styled.p`
 color: #fff;
 font-family: system-ui, sans-serif;
 margin-bottom: 15px;
 font-size: 19px;
 @media(max-width: 768px) {
    width: 100%; 
    font-size: 16px; 
 }
`;
